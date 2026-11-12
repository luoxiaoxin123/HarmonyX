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

这类测试会执行提取的实际组件方法和数据源逻辑，但不替代 ArkTS 编译、HAP 打包和真机验证。GitHub Actions 已使用 HarmonyOS API 26 工具链完成真实 ArkTS 编译与 HAP 打包；141 项测试通过，产物 ZIP 完整性、版本号和编译模块均通过检查。现有安装包不会因源码修改而自动更新。

## 已构建产物

- 构建提交：`6029893a68a35b5949d50687167316af968bb3c5`
- 构建记录：https://github.com/luoxiaoxin123/HarmonyX/actions/runs/43242436028
- 下载（需登录有仓库访问权的 GitHub 账号）：https://github.com/luoxiaoxin123/HarmonyX/actions/runs/43242436028/artifacts/13956451201
- Artifact 名称：`HarmonyX-v3.9.0-no-ads-unsigned`，保留 30 天。
- 解压后的 HAP：`HarmonyX-v3.9.0-no-ads-unsigned.hap`
- HAP SHA-256：`759dcb4d464ac787691e01109fce88f563a66014c51fccac6defdac2c191a95a`

这是未签名 HAP。安装到普通 HarmonyOS 设备之前，需要用自己的开发者证书和对应 Profile 签名；它不具有原作者的签名，不能承诺保留数据直接覆盖原版。没有进行真机安装和广告消失的视觉验收。

## 重新构建

向 `codex/remove-ads-v3.9.0` 分支推送源码改动会自动触发 `.github/workflows/build-ad-free-hap.yml`。流程校验固定 API 26 工具链归档的 SHA-256，安装 JDK 17，运行回归测试，然后调用 `scripts/build-ad-free-hap.sh`。构建脚本仅在本地配置缺失时创建不含签名材料、受 Git 忽略的 `build-profile.json5` 和 `.npmrc`，不会覆盖已有配置。

成功产物和 `SHA256SUMS` 上传到 workflow Artifacts；构建日志也作为独立 artifact 上传。为使本次云任务在没有 GitHub API 权限时也能跟踪结果，流程将状态与编译日志末尾写入专用 `codex/hap-build-status` 分支，不修改 main。

工具链使用 `ErBWs/setup-ohos` 固定提交和 `ErBWs/ohos-sdk` 固定 26.0.0.821 发行版，属于社区分发的 HarmonyOS 工具链；工作流保留归档校验。
