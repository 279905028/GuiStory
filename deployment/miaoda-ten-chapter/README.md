# 全十章妙搭发布

2026-10-23｜**发布完成，线上首页已确认**｜正文 `nightshift-20261022-r1`

- [打开妙搭游戏](https://rcniaktjf0x2.feishu.link/app/app_17gm4z6t27j)；应用 `app_17gm4z6t27j`，名称“毕节，雨停之前·全十章”。
- 发布 `7699752460159585575` 已由妙搭回读确认 `finished`，对应提交 `f4b52f136aafc5764a97ca6014f06a5eb9d0457a`，与本地验证版本一致。
- 当前为默认创建者访问范围：`Range`、`require_login=true`；未扩展公开范围。
- 实际发布理由：**将《毕节，雨停之前》网吧夜班版全十章部署到妙搭，保留剧情、分支与本地存档功能。**

## 实际验证

| 范围 | 结果与证据 |
| --- | --- |
| 正式来源 | 十章构建只读检查通过；146份正式运行文件／138张WebP的大小和指纹验证通过。[来源预检](source-preflight.json)、[构建日志](story-preflight.log)。 |
| 妙搭资源 | 138张WebP上传到本应用独立存储；妙搭回读138文件、178,686,658字节，与本地一致。[资源映射](uploaded-assets.json)。 |
| 部署适配 | 五份正式运行脚本保持逐字一致；单独脚本在加载时替换138处图片URL，反向还原后故事数据逐字一致；生产路径前缀、脚本顺序、构建、类型与规范检查通过。[构建验证](build-verification.json)。 |
| 本地浏览器 | Chrome 6/6组通过，1440×900与390×844模拟视口均自然推进28次到首选项；桌面slot3保存、刷新读档、自动继续通过。0脚本异常、0HTTP错误、0失败请求，8张截图。[本地报告](local-browser-verification.json)、[截图](local-screenshots/)。 |
| 线上首页 | Safari实际打开本次正式地址，封面、全十章标识与主菜单显示正常。[线上截图](online-evidence/safari-title.png)、[界面文字](online-evidence/safari-title-ax.txt)、[范围说明](online-verification.json)。 |
| 发布状态 | 本次release为finished，发布commit与已推送commit相同。[发布收据](deployment.json)。 |

本地浏览器由独立本地服务把妙搭资源URL映射到正式原图，平台监测请求单独隔离；其结果不代表妙搭线上存储全量验收。线上复验仅确认首页和封面，未在用户Safari中开始游戏或写入存档；完整Safari路线、全部线上资源遍历与实体手机仍待验。

首轮本地监听遇到沙箱权限限制，允许环境下重跑通过。内置浏览器两次读取超时，随后使用Safari完成线上首页检查；未因此重复发布。原项目剧情、运行文件、美术、Cloudflare站点和旧发布包保持原样，未上传原始照片、未采用素材或凭据。

## 后续更新

独立妙搭仓库位于 [app/](app/)，来源快照为 `app/game-source/`，资源映射为 `app/game-assets.json`。先在主项目正式源完成修改和验证，再同步来源快照与本应用的资源；使用同一应用继续更新，避免重复创建。

仓库内执行 `npm run check:game`、`npm run lint`、`MIAODA_APP_ID=app_17gm4z6t27j npm run build`。发布前提交并推送 `sprint/default`，再创建release并查询同一发布ID到终态。macOS当前系统Git入口受Xcode许可限制，本次使用已安装的 `/Library/Developer/CommandLineTools/usr/bin/git`，未修改系统许可或配置。

各站点存档按浏览器来源隔离，不会自动与Cloudflare版或本地版同步。

[当前待办](../../TODO与多窗口提示词-v0.4.md) · [项目总览](../../总览.md)
