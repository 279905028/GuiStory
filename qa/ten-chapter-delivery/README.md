# E11 本地交付验收

2026-10-23｜**9组包检查、24组解压包浏览器检查通过**。用户确认仅本地交付，未发布公网；E10的Safari／实体手机待验保持原状态。

本目录结果针对[最终ZIP](../../交付/全十章-E11/dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11.zip)，SHA-256：`c53545a3a47f7c42e49716038b3bb699f29fc47bd5ef0b6b65a80dab9feee0bb`。原包与浏览器证据以ZIP、包内清单和运行文件指纹共同对应。

## 当前证据

| 检查 | 实际结果 | 证据 |
| --- | --- | --- |
| 打包与解压 | 229文件CRC／路径／SHA通过；独立中文与空格目录解压；146份运行文件与正式工程逐字相等 | [包检查](package-results.json) |
| 完整资源 | 剧情与首页引用闭包恰为138张WebP，包含37张沿用路径；无缺图／多图 | [包检查](package-results.json) |
| 可复现 | 第二次打包ZIP逐字相同；包内62份来源／构建文件与运行文件在临时目录重建四份正式产物逐字一致 | [包检查](package-results.json) |
| 拒绝与服务 | 缺失／篡改／多余文件／软链接4类拒绝；146份HTTP响应内容正确；资料／越界／写入等7类访问拒绝 | [包检查](package-results.json) |
| Chrome155／Firefox153 | 各12组，共24组通过；`file://`开启离线模式，HTTP仅允许本机请求；每种组合解码138图 | [浏览器结果](browser-results.json) |
| 游戏功能 | 两浏览器各验证开场与首选、章末继续、精确变身、存读档刷新、四CG进退；HTTP下各恢复13结局 | [浏览器结果](browser-results.json) |
| 同址恢复 | 关闭本机服务和浏览器后，以同一临时地址与测试profile重新启动，自动档／手动档内容一致 | [浏览器结果](browser-results.json) |
| 文件保护 | 6699个正式源、游戏、资产、历史发布与E10证据文件指纹未变 | [保护结果](protected-after.json) |

共40张最终截图，全部路径列于浏览器结果；0页面异常、0意外外网请求、0HTTP资源失败。截图是1440×900桌面及390×844模拟视口，不代表实体手机。使用包内真实引擎走合法路径生成快照后定位，不声称界面逐次点击完整736条路径。

实际目视复核了[离线竖屏封面](screenshots/chrome-file-cover-390.png)、[窄屏人形](screenshots/firefox-http-human-390.png)、[离线变身CG](screenshots/chrome-file-tc-cg-qiuqiu-transform.png)和[人形朋友结局](screenshots/firefox-http-ending-desktop.png)：图片加载、人物／背景／文本分区和操作区正常。未逐张目视40图或全部剧情节点。

## 复跑

```sh
node qa/ten-chapter-delivery/package-test.cjs 交付/全十章-E11/dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11.zip
# 先独立解压最终ZIP，再将包目录传给浏览器检查
node qa/ten-chapter-delivery/browser-test.cjs '/绝对路径/解压后的包目录' '/绝对路径/原ZIP'
node qa/ten-chapter-delivery/finish-audit.cjs
```

包检查需Node.js及本机`zip/unzip`；本轮macOS执行。浏览器脚本使用独立Playwright依赖、Chrome和E10已准备的临时Firefox，可用脚本中的环境变量改依赖路径。服务只绑定本机，测试需要本机监听权限；全部测试profile均已移除，未连接玩家浏览器。

首轮沙箱禁止监听的[环境记录](package-environment-failure.json)保留；取得本机监听权限后重跑通过。首版浏览器检查曾因脚本未等待响应式封面切换出现2项失败，修正等待后通过；[首版通过记录](prefinal-browser-results.json)和`screenshots/prefinal-harness-diagnostics/`仅作过程资料。最终包重新独立解压全套通过，以`browser-results.json`为准。

E10旧结果未重写、未冒充本轮验收。Safari／实体手机仍待验；Windows启动器未实机验收，源码逐字复核不支持Windows。历史部署只核对90个快照文件指纹，没有运行旧版或证明当前公网状态。当前ZIP作为后续整包回退基线，不包含玩家进度备份。

[E11交接](../../任务拆分/全十章/交接/E11.md) · [交付入口](../../交付/全十章-E11/README.md)
