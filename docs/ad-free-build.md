# v3.9.0 无广告修改

基于 `haohaoai0/HarmonyX` 的 `v3.9.0` 标签（标签对象 `c3c017f72393d367227fe907860372fdf75977cb`，源码提交 `c57984551493c01537fd1aca7e2055d3ec3fdc7f`），修复分支为 `codex/remove-ads-v3.9.0`。该标签与最初选中的 `luoxiaoxin123/HarmonyX` 的旧版 `main` 不同。

“小僵尸同学 / 纸语 / PAPERTALK”卡片来自 XXAuth 远程应用推广配置，经 `XXAuthPopupHost.publishPromotionPost` 发布到 `harmonyx.promotion_post`，再由首页、搜索结果和评论区注入。它不是普通的 X 帖子。

本修改让发布端清空推广计划，首页和详情页同时拒绝读取此前发布的计划。远程开关、强制展示、不可关闭和投放数量设置均无法重新开启该路径。广告弹窗与横幅在排队和展示时被过滤，“发现应用”入口被移除；启动入口拒绝冷启动和回到前台的开屏广告，并以空候选列表清除旧开屏缓存，不下载新的开屏广告素材。正常公告和版本更新提示保留。

广告解析和布局辅助模块保留为兼容代码；实际应用入口不再发布或使用广告计划。本修改不伪造赞助激活状态，不修改用户的 X 内容。

验证使用仓库既有的 Node 测试方式，TypeScript 通过 `HARMONYX_TYPESCRIPT` 指定本机安装路径：

```bash
HARMONYX_TYPESCRIPT=/workspace/.harmonyx-tools/node_modules/typescript/lib/typescript.js \
node --test tests/ad-free-build.test.cjs tests/xxauth-promotion-post.test.cjs \
  tests/xxauth-popup.test.cjs tests/xxauth-splash.test.cjs tests/xxauth-supporter.test.cjs \
  tests/home-timeline-sources.test.cjs tests/home-tab-feed-regression.test.cjs \
  tests/search-feed-parity.test.cjs tests/settings-catalog.test.cjs
```

这类测试会执行提取的实际组件方法和数据源逻辑，但不替代 ArkTS 编译、HAP 打包和真机验证。本次云环境缺少 `devecocli`、HarmonyOS SDK 等构建组件，因此没有生成修改后的安装包。现有安装包不会因源码修改而自动更新。
