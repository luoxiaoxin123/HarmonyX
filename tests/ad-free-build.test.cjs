const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require(process.env.HARMONYX_TYPESCRIPT || 'D:/DevEco Studio/tools/ohpm/node_modules/typescript/lib/typescript.js');
const root = path.resolve(__dirname, '../entry/src/main/ets');
const modules = new Map();
const options = { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.CommonJS };

function load(file) {
  if (modules.has(file)) return modules.get(file);
  const source = fs.readFileSync(path.join(root, file + '.ets'), 'utf8');
  const js = ts.transpileModule(source, { compilerOptions: options }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', js)(id => {
    if (!id.startsWith('.')) throw new Error('Unexpected platform dependency: ' + id);
    return load(path.relative(root, path.resolve(root, path.dirname(file), id)));
  }, module, module.exports);
  modules.set(file, module.exports);
  return module.exports;
}

// Execute the actual component methods without replacing their admission logic.
function component(file, name, methods, globals = {}) {
  const source = fs.readFileSync(path.join(root, file + '.ets'), 'utf8')
    .replace(new RegExp('struct ' + name + '\\b'), 'class ' + name);
  const tree = ts.createSourceFile('component.ts', source, ts.ScriptTarget.Latest, true);
  const node = tree.statements.find(n => ts.isClassDeclaration(n) && n.name.text === name);
  const selected = methods.map(method => {
    const found = node.members.find(n => ts.isMethodDeclaration(n) && n.name.getText(tree) === method);
    assert.ok(found, 'missing component method: ' + method);
    return found.getText(tree);
  });
  const js = ts.transpileModule('class Subject {' + selected.join('\n') + '}\nreturn Subject;',
    { compilerOptions: options }).outputText;
  const Subject = new Function(...Object.keys(globals), js)(...Object.values(globals));
  return new Subject();
}
const { XXAuthPromotionPlan, XXAuthPromotionPostPolicy } = load('services/XXAuthPromotionPost');
const { XXAuthSupporterPolicy } = load('services/XXAuthSupporterPolicy');
const { TimelinePageDataSource } = load('utils/TimelinePageDataSource');
const { XXAuthCommentPromotionSession } = load('utils/XXAuthCommentPromotionSession');
const remote = XXAuthPromotionPostPolicy.plan([{id: 'papertalk', priority: 15, status: 1,
  content: '帖子昵称：小僵尸同学\n帖子账号：@纸语\n帖子正文：纸语，指尖打印，收藏专属记忆/小票\n帖子链接：https://example.com/papertalk'}],
  { enabled: true, promotion_enabled: true, post_enabled: true, post_dismissible: false,
    post_count: 100, post_comment_count: 100, post_comment_probability: 1 });
assert.equal(remote.posts[0].name, '小僵尸同学', 'fixture reproduces a real remotely enabled promotion');

for (const [file, name] of [['pages/Index', 'Index'], ['pages/PostDetail', 'PostDetail']]) {
  test(name + ' ignores forced and stale cached promotion plans', () => {
    const view = component(file, name, ['promotionPlan'], { XXAuthPromotionPlan });
    view.promotionPostJson = JSON.stringify(remote);
    const plan = view.promotionPlan();
    assert.deepEqual(plan.posts, []);
    assert.equal(plan.timelineCount, 0);
    assert.equal(plan.commentCount, 0);
    assert.equal(plan.commentProbability, 0);
    const source = new TimelinePageDataSource();
    const posts = [{ id: 'a' }, { id: 'b' }];
    source.replace(posts, plan.posts, 'for-you', plan.timelineCount);
    source.replace([...posts, { id: 'c' }], plan.posts, 'for-you', plan.timelineCount);
    assert.equal(source.contentCount(), 3, 'pagination adds only genuine posts');
    assert.deepEqual([1, 2, 3].map(i => source.getData(i).tweet.id), ['a', 'b', 'c']);
    assert.ok([1, 2, 3].every(i => source.getData(i).promotion === null));
    assert.equal(new XXAuthCommentPromotionSession().placements('post', ['r1', 'r2'], plan).size, 0);
  });
}

test('publisher clears an existing campaign without decoding or downloading it', () => {
  const state = new Map([['promotions', JSON.stringify(remote)]]);
  const host = component('components/XXAuthPopupHost', 'XXAuthPopupHost', ['publishPromotionPost'], {
    AppStorage: { setOrCreate: (key, value) => state.set(key, value) }, XXAUTH_PROMOTION_POST: 'promotions'
  });
  host.publishPromotionPost(remote.posts, { post_enabled: true, post_dismissible: false });
  assert.equal(state.get('promotions'), '');
});

test('forced banners and recommendation popups cannot display or fetch ad artwork', async () => {
  const host = component('components/XXAuthPopupHost', 'XXAuthPopupHost', ['present', 'openManual'], {
    XXAuthSupporterPolicy
  });
  host.visible = false;
  for (const kind of ['banner', 'recommendation']) {
    await host.present({ kind, forced: true, structuredRecommendation: true });
    await host.openManual(kind);
    assert.equal(host.visible, false);
  }
});

test('cold launches and foreground resumes never allow cached splash campaigns', () => {
  const view = component('pages/Index', 'Index', ['startupAdAllowed', 'onSplashOpenRequested']);
  Object.assign(view, { homePageAlive: true, splashOpenRequest: 1, showStartupCover: false,
    startupFromForeground: false });
  assert.equal(view.startupAdAllowed(), false);
  view.onSplashOpenRequested();
  assert.equal(view.showStartupCover, false);
  assert.equal(view.startupFromForeground, false);
});

test('normal announcements and update notices still display', async () => {
  for (const kind of ['announcement', 'update']) {
    const host = component('components/XXAuthPopupHost', 'XXAuthPopupHost', ['present'], {
      XXAuthSupporterPolicy, parseRecommendationDescription: () => [],
      xxAuthPopupStore: { shouldShow: () => true }
    });
    const item = { kind, fingerprint: kind, content: 'A real application notice', forced: kind === 'update' };
    Object.assign(host, { alive: true, visible: false, blocked: false, appForeground: true,
      manualMode: '', pending: [item], shown: [], context: () => ({}) });
    await host.present(item);
    assert.equal(host.visible, true);
    assert.equal(host.panel, item);
    assert.deepEqual(host.shown, [kind + ':' + kind]);
  }
});
