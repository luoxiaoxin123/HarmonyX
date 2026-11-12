# Ad-free HAP build

Source commit: 6029893a68a35b5949d50687167316af968bb3c5

Run: https://github.com/luoxiaoxin123/HarmonyX/actions/runs/43242436028

RESULT: success

SDK_RESULT: success

TEST_RESULT: success

HAP_RESULT: success

## harmonyx-tests.log

```text
✔ Index ignores forced and stale cached promotion plans (268.533626ms)
✔ PostDetail ignores forced and stale cached promotion plans (58.545648ms)
✔ publisher clears an existing campaign without decoding or downloading it (21.324403ms)
✔ forced banners and recommendation popups cannot display or fetch ad artwork (37.268054ms)
✔ cold launches and foreground resumes never allow cached splash campaigns (166.280086ms)
✔ normal announcements and update notices still display (31.544949ms)
✔ manual refresh at the top offers new posts without replacing the reading position (69.063502ms)
✔ another refresh deduplicates pending posts and no-new or offline responses retain the capsule (35.190204ms)
✔ an in-flight refresh cannot publish its capsule into a different feed (18.958059ms)
✔ feed snapshots retain their pending posts across switching away and back (13.648897ms)
✔ lazy feed updates preserve header/footer identity and avoid reloads for an unchanged cached page (63.684263ms)
✔ topic filtering sends local deletions and additions while retaining surviving card rows (30.108017ms)
✔ several topic switches commit once after sheet dismissal without replacing raw pagination posts (28.587245ms)
✔ tapping the capsule merges once and scrolls its own page after the new layout (11.175852ms)
✔ communities appear beside lists and topics; each community keeps its own ranking on restart (318.647983ms)
✔ local groups pin and reorder beside remote sources without network writes and survive restart (149.614313ms)
✔ mixed source ordering persists, validates all ids and cannot leak into another account (130.898011ms)
✔ removing a community changes only its home pin and never performs a membership mutation (63.428356ms)
✔ failed preference writes keep community pins, ordering and ranking unchanged (82.134335ms)
✔ source discovery paginates lists and communities separately and deduplicates boundaries (78.258802ms)
✔ a list unpin updates home only after a successful write and drops stale account responses (54.117171ms)
✔ directory results from a previous account never replace the new account sources (67.076225ms)
✔ membership directory falls back at the first page and keeps fallback cursors separate (95.627008ms)
✔ search follows the home list/column choice and keeps its title inset in ordinary header content (2.088931ms)
✔ all settings can be reached from one home group with no missing parents or cycles (1.327162ms)
✔ search opens the page containing a relocated control and explains its location (9.42744ms)
✔ searching a category finds its controls without duplicating ancestor pages (0.696323ms)
✔ external destinations retain their actual routes and native account identity (0.221976ms)
✔ chat notification and storage controls are indexed only in their canonical settings categories (1.358217ms)
✔ every category and search keyword has a value in every supported locale (82.193196ms)
✔ menu-only preferences and operations are searchable in their functional categories (11.295467ms)
✔ recommendations require a published usable link; remote close wins over remind (2.932832ms)
✔ the latest control record wins even when its content disables an older recommendation (0.802359ms)
✔ announcements respect priority, remote close and opt-in repeat without exposing control records (0.4084ms)
✔ banners require secure image URLs; articles only enter the startup queue when enabled (0.276947ms)
✔ cloud configuration parses JSON and malformed values safely (0.345077ms)
✔ live XXAuth variable list and single-value envelopes select the same popup configuration (0.199173ms)
✔ each switch is its own variable and only overrides the key it names (0.576758ms)
✔ updates obey server rollout decisions, suppress none/silent and preserve mandatory updates (0.305479ms)
✔ priority recommendation configuration supersedes legacy links and never leaks its control records as announcements (45.439619ms)
✔ displayed content strips controls and executable HTML, external URLs reject unsafe schemes (0.313381ms)
✔ device IDs and three-day snooze survive restart and apply across changed recommendations (23.836797ms)
✔ promotion posts keep their independent seven-day hide window (27.604506ms)
✔ read receipts persist per content revision; remind and forced policies remain eligible (29.157649ms)
✔ cloud recommendation controls parse independent flags, fractional intervals and campaign boundaries (0.46206ms)
✔ popup budgets survive restart, cap forced reminders and accept changed cloud limits without a reset (36.893709ms)
✔ campaign boundaries are timezone explicit and force never bypasses them (15.348417ms)
✔ multiple recommended apps share a daily budget; only the actually presented panel is counted (30.135487ms)
✔ legacy empty cloud config persists default popup limits across repeated launches (27.670263ms)
✔ even unlimited remote budgets allow only one automatic recommendation in each local period (25.302356ms)
✔ random comment probability and popup period are independent cloud variables (0.182488ms)
✔ a locked remote campaign is cleared regardless of saved dismissal state (196.030623ms)
✔ already read announcements do not postpone a five-second recommendation delay until the next poll (35.822664ms)
✔ missing cloud switch data pauses recommendations even if the legacy JSON endpoint still succeeds (85.156603ms)
✔ all software endpoints use only the public app identity, with platform/channel and encoded variable keys (22.34271ms)
✔ transport rejects HTTP/business failures and malformed payloads, always releasing requests (109.841137ms)
✔ announcement retries stop after success or three transient failures and never immediately retry rate limits (22.312195ms)
✔ popup resources exist in all locales and contain no duplicated keys (88.135568ms)
✔ a promotion post is parsed from the reserved announcement slots (3.560806ms)
✔ cloud post lock is carried by the plan and every rendered post (0.604599ms)
✔ closed, disabled or incomplete slots never inject a post (0.755992ms)
✔ verification follows the record and the avatar falls back to the app icon (0.290958ms)
✔ media keeps only https entries, avoids duplicates-free video detection and honours the close marker (0.600793ms)
✔ control records stay out of the announcement list and the store link is validated (0.814818ms)
✔ the data source injects the post after the first post and keeps cursor indexes intact (1.127447ms)
✔ an empty timeline still shows the post as its only row and reloads listeners (0.36036ms)
✔ cold start paints ordinary posts before promotion injection and startup popup eligibility (273.644792ms)
✔ pagination, filtering and promotion removal keep mounted WaterFlow counts synchronized (170.432612ms)
✔ startup cover keeps promotion popup deferred until its fade has finished (154.314433ms)
✔ Following stays empty until real posts arrive, then promotions join the same response update (95.531317ms)
✔ a stale startup frame cannot inject into a new account or a page already closed (302.848249ms)
✔ the remote budget, not the pool size, decides how many rows a timeline carries (0.337196ms)
✔ several posts are parsed newest first, each with its own or the shared media (0.43575ms)
✔ each record can be paused on its own and carry its own store link (0.494037ms)
✔ media carries clip length and a tablet set that falls back to the phone one (0.274253ms)
✔ the plan resolves how many promotions each surface carries (0.408981ms)
✔ random positions stay inside the first page, distinct, ordered and stable (0.306671ms)
✔ slots cycle the configured posts so one list never repeats the same card twice (0.161497ms)
✔ the promoted app rotates between launches but never inside one run (0.341302ms)
✔ positions change between launches while a mounted timeline keeps its positions (0.221856ms)
✔ comment probability defaults to 30 percent and respects disabled and bounded cloud values (0.645809ms)
✔ a missed comment draw stays missed through repeated renders, paging and config refresh (0.152615ms)
✔ comment placements stay attached to reply IDs during short-page growth and removal (0.247414ms)
✔ new detail visits randomize comment positions and switching threads draws again (0.559964ms)
✔ detail rendering only inserts before top-level replies and embedded media keeps every reply (75.063669ms)
✔ cloud app fields share identity and destination without leaking into post copy (325.741723ms)
✔ old records, invalid posters and every remote master switch fail closed (164.145473ms)
✔ duration clamps at five seconds and copy defaults come from the same app (75.583984ms)
✔ mosaic takes only this app introduction images, deduplicates them and skips videos (71.435089ms)
✔ mosaic caches independent tiles and keeps usable pictures when an extra image fails (90.364986ms)
✔ preparation uses independent local poster/icon slots; claim counts nothing (46.297235ms)
✔ daily cap and minimum interval survive a new process (54.938189ms)
✔ stale, missing, foreign and corrupt cached media are never shown (324.820449ms)
✔ no partial image preparation survives a download failure (55.009649ms)
✔ remote close invalidates a download already in flight (44.491214ms)
✔ the next cold launch rotates to another eligible app without a second fetch (92.40499ms)
✔ failed exposure persistence releases the cover without publishing a shown app (90.607056ms)
✔ warm launch shows only after the app has remained backgrounded for more than ten minutes (37.986711ms)
✔ every cold launch and foreground opening can show with unlimited splash frequency (36.810872ms)
✔ returning from the ad destination skips once, then normal foreground openings resume (43.912609ms)
✔ root refuses foreground advertisements and preserves the current destination (173.173137ms)
✔ direct entry skips the brand without changing cached ad eligibility (21.413544ms)
✔ local entitlement deadline skips an ad and ignores a late successful read (7.321264ms)
✔ supporter, unreadable rights and ineligible startup never claim a cached campaign (26.676572ms)
✔ restoring supporter rights during cold launch preserves every enabled startup animation (25.235623ms)
✔ supporter activation cancels a pending entitlement read without cutting off the animation (7.611831ms)
✔ ad eligibility, campaign closure and account changes cancel only the queued ad during startup (50.96374ms)
✔ an ineligible ad never prevents a cold-start animation or delays direct entry (14.279004ms)
✔ exposure and countdown start only after the poster paints; repeat callbacks count once (8.03969ms)
✔ unpainted poster exits after 500ms and stale frame cannot record an exposure (8.276849ms)
✔ account switch, background, supporter upgrade and cloud close dismiss a visible ad (34.72809ms)
✔ skipping or unmounting during link validation cancels the pending external launch (18.934069ms)
✔ CTA opens only the freshly validated link once; timeout returns home (10.492627ms)
✔ a supporter record is valid only for the X account that redeemed it (1.35343ms)
✔ one account keeps one record and switching past four accounts never evicts credentials (0.315904ms)
✔ redeeming binds the code to the X user id and never sends X credentials (83.772794ms)
✔ the entitlement follows the signed-in account instead of the device (58.221857ms)
✔ activation is refused until an X account is signed in (76.991067ms)
✔ offline, rate-limited, server and malformed replies preserve unexpired access (204.661157ms)
✔ a retired code stays inactive offline, while other accounts keep their access (19.791639ms)
✔ a mistyped code cannot revoke access and each X account redeems its own code (21.130737ms)
✔ a code bound to another account is rejected and unsaved codes never activate (88.355637ms)
✔ revocation covers every card-level rejection without distrusting transient faults (0.63209ms)
✔ expired cached access stays disabled offline and refreshes are coalesced (21.075727ms)
✔ supporter labels exist in every locale and match the strings the card uses (56.968078ms)
✔ an in-flight A activation never activates B, and B verifies its own code after A finishes (27.920861ms)
✔ switching to B during an A request publishes B cached expiry and never A expiry (24.238988ms)
✔ an activation started before storage loads is cancelled if the selected account changes (22.915742ms)
✔ a queued activation is cancelled on logout and an older response cannot restore logged-out access (18.8646ms)
✔ a new code never borrows the result of another code being checked for the same account (19.423583ms)
✔ refresh throttles are per account so switching A to B does not postpone B cloud verification (27.149161ms)
✔ locked asset storage retries after unlock without binding a new card or overwriting old accounts (24.897647ms)
✔ credentials for many accounts use separate assets under 1024 bytes and survive a service restart (15.791598ms)
✔ v2 revocation overrides an old v1 entitlement through upgrades and offline restarts (40.341834ms)
✔ storage failure cannot keep a cloud-revoked account active during the current process (19.40505ms)
✔ missing server binding never activates and mismatched binding retires only its original record (96.373255ms)
✔ online, IP, region, configuration, gateway 404 and ambiguous client errors preserve valid access (135.073249ms)
✔ malformed envelopes and corrupt assets do not revoke or overwrite another account (79.670187ms)
✔ a fresh device or app bundle restores the same code only under the same stable X account (89.876362ms)
✔ transient failures retry on the next foreground poll instead of consuming the five-minute success throttle (9.152697ms)
✔ an explicit card revocation in a successful HTTP envelope also retires the original account (8.506106ms)
ℹ tests 141
ℹ suites 0
ℹ pass 141
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 4206.40642
```

## harmonyx-build.log

```text
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:52:46
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:53:36
 'getStringSync' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:53:36
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:58:42
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:61:27
 'getParams' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:69:16
 'replaceUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:76:16
 'replaceUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:87:20
 'pushUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:92:20
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:92:20
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:128:42
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:132:20
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:132:20
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:142:22
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:148:22
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:152:22
 'pushUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:167:20
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:169:20
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/Login.ets:169:20
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:31:46
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:32:36
 'getStringSync' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:32:36
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:36:26
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:45:42
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:92:18
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:92:18
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:93:18
 'replaceUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:93:18
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/OAuthCallback.ets:131:22
 'replaceUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:63:46
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:64:36
 'getStringSync' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:64:36
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:85:27
 'getParams' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:109:44
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:150:48
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:161:42
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:165:20
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:165:20
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:172:18
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:172:18
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:177:18
 'replaceUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:177:18
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:200:22
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:200:22
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:201:16
 'back' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:205:22
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:205:22
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:206:16
 'back' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:210:22
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:210:22
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:211:16
 'back' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:214:44
 'getContext' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:218:22
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:218:22
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:219:16
 'back' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:231:20
 'showToast' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:231:20
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:232:20
 'replaceUrl' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:232:20
 Function may throw exceptions. Special handling is required.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:311:22
 'back' has been deprecated.
[39m[39m
[33mWARN: [33m[33mArkTS:WARN File: /home/runner/work/HarmonyX/HarmonyX/entry/src/main/ets/pages/AuthWeb.ets:333:14
 'userAgent' has been deprecated.
[39m[39m
[39m
> hvigor [32mFinished :entry:default@CompileArkTS... after 1 min 10 s 691 ms [39m
> hvigor [32mFinished :entry:default@BuildJS... after 1 ms [39m
> hvigor [32mFinished :entry:default@CacheNativeLibs... after 2 ms [39m
> hvigor [32mFinished :entry:default@GeneratePkgModuleJson... after 3 ms [39m
> hvigor [32mFinished :entry:default@ProcessCompiledResources... after 1 ms [39m
> hvigor [32mFinished :entry:default@PackageHap... after 1 s 214 ms [39m
> hvigor [32mFinished :entry:default@PackingCheck... after 38 ms [39m
> hvigor [33mWARN: No signingConfig found for product default[39m
> hvigor [32mFinished :entry:default@SignHap... after 1 ms [39m
> hvigor [32mFinished :entry:default@CollectDebugSymbol... after 34 ms [39m
> hvigor [32mFinished :entry:assembleHap... after 1 ms [39m
> hvigor [32mBUILD SUCCESSFUL in 1 min 17 s 751 ms [39m

34 tasks in total: 34 executed, 0 up-to-date
Validated unsigned HAP: build/ad-free/HarmonyX-v3.9.0-no-ads-unsigned.hap
SHA256: 759dcb4d464ac787691e01109fce88f563a66014c51fccac6defdac2c191a95a
```

