# E10 Safari 实际浏览器探测

2026-10-23｜Safari 27.0（21625.1.29.18.28）

**Safari 的远程自动化权限当前关闭，实际浏览器验收未执行。** 这次通过本机 `safaridriver` 发出真实 WebDriver 会话请求，已排除“尚未尝试驱动”的不确定性。

`POST /session` 返回 HTTP 500，错误类型为 `session not created`，原文：

> Could not create a session: You must enable 'Allow remote automation' in the Developer section of Safari Settings to control Safari via WebDriver.

仅探测现有权限，没有运行 `--enable`、修改 Safari 全局设置或尝试操作普通浏览器窗口。Safari WebDriver 会话未创建，游戏静态服务器未启动，没有读取或写入玩家存储。驱动已正常退出，退出码为0；脚本进程也已结束。

本轮没有开局、隐藏入口、变身／刷新、CG、章末、手动档、13结局或长历史的 Safari 实测证据，也没有截图。该结果不影响已生成的 Chrome 证据，但不能据此声称 Safari 通过。声音试听及真人阅读已由用户取消，不属于此环境阻塞。

- [探测脚本](probe.cjs)：`node qa/ten-chapter/safari/probe.cjs`；仅绑定随机本机端口，若权限仍关闭便记录错误并退出。
- [原始结果](probe-results.json)：包含驱动版本、真实 HTTP 原始响应、端口、8个正式文件 SHA-256 和清理状态。
- 输入保护：8个正式文件检查前后全部一致。
- 正式 `story.js` SHA-256：`28dd958534a727dd06dae3e3a44f493e557a239a7a056111591e23d29e097d60`。

机器检查实际已执行：脚本语法检查通过；驱动状态请求成功；创建会话被 Safari 的现有设置拒绝；驱动清理和输入指纹复核通过。系统权限未改动。
