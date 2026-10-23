# 全十章 Cloudflare 发布

2026-10-23｜**已发布并完成线上复验**｜正文 `nightshift-20261022-r1`

- [在线游玩](https://galagame.ambd.site/)；沿用账号 `ambd` 下的 Worker `cjb-rain` 和原域名。
- [Workers 地址](https://cjb-rain.279905028.workers.dev)由本次发布返回；完整线上检查针对上面的自定义域名。
- 发布版本：`ad4b0799-2f0b-4d5b-8215-04ef58cad5a0`，Cloudflare 已确认承接100%流量。
- 运行包：146份文件、138张WebP，共180,066,046字节。只复制正式运行清单白名单，包含新增播放器 `player-runtime.js`；未上传草稿、原始照片、测试或凭据文件。

## 本次实际验证

| 项目 | 结果与证据 |
| --- | --- |
| 正式版本 | 只读重建四份产物与当前正式文件逐字一致；205项输入／资源指纹通过；构建图2612节点、19处选择、736终态路径。[预检](preflight.json) |
| 发布包 | 146份构建输出逐份指纹一致，无额外或缺失文件；Cloudflare部署预检通过。[构建检查](build-assets-check.json) |
| HTTPS文件 | 146/146均为HTTP200，字节数与SHA-256一致；未跟随重定向，未重试。[线上文件报告](http-verification.json) |
| Chrome线上操作 | 6/6组通过；桌面1440×900与390×844模拟视口；真实开始并各自然推进28次至首选项、手动slot3保存／刷新读取、自动刷新继续、可见图片与横向布局均通过。0脚本异常、0HTTP错误、0失败请求。[浏览器报告](browser-verification.json) |
| 截图 | 8张最终截图；已目视桌面首选项及手机首页／开局／首选项，文字与控件可见。[截图目录](screenshots/) |
| 旧部署保护 | 对照E11基线核对6022份旧部署文件，无变化。[保护记录](historical-deployments-check.json) |
| 线上状态 | 同一域名绑定仍启用，新版本100%流量。[Cloudflare回读](remote-deployment.json) |

发布收据：[deployment.json](deployment.json)。本次没有改动剧情、播放器、美术或旧交付包；没有读取玩家浏览器存档。

首轮布局检查误将裁切的雨幕和1px无障碍标题判为溢出，已按实际CSS与几何修正。第二轮交互均通过，但快速推进取消了1次图片请求；加入图片加载等待后最终6组全部通过。前两轮记录保留在[attempts/](attempts/)，不作为最终通过证据。

## 复用与回退

在本目录执行：

```sh
# 当前机器复用已安装依赖；独立副本可依据package.json安装依赖
npm run check:site
npm run deploy:check
# 仅在授权发布时执行；使用刚通过预检的同一构建包
node_modules/.bin/cf deploy --prebuilt --profile ambd
node verify-http.cjs https://galagame.ambd.site/
node verify-browser.cjs https://galagame.ambd.site/
```

本机 `node_modules` 链接到 `../cloudflare/node_modules`；浏览器检查使用本机已安装的Playwright和Chrome。项目部署方式依据[Cloudflare构建与发布文档](https://developers.cloudflare.com/cf/projects/)。

上一线上版本为 `16a2cfe8-bd29-4d4e-932f-a4e7560d2b34`，见[发布前记录](deployment-before.json)。如需回退，在Cloudflare该Worker的部署历史选择此版本；**本次未执行回退**。旧本地发布快照仍位于 `../cloudflare-ambd/`，不要覆盖它来生成十章版本。

## 未覆盖范围

本次是部署及线上冒烟复验，没有重新执行全十章全部路线的浏览器通关。E10的Safari与实体手机仍待验；390px截图是桌面浏览器模拟。旧版存档、本地包存档与当前线上十章存档不会自动互相迁移或同步。

[当前待办](../../TODO与多窗口提示词-v0.4.md) · [项目总览](../../总览.md)
