# v1.1 发布边界

本目录继承旧版发布源码与记录，供追溯和后续适配。v1.1 尚未配置独立站点或应用，本轮没有上传、发布或修改线上服务。

- `cloudflare/`、`cloudflare-ambd/`、`cloudflare-ten-chapter/` 的 `cloudflare.config.ts` 已加入立即停止提示，防止新副本继续沿用旧 Worker／域名。原配置正文保留为历史参考；本地 `prepare.cjs --check` 可正常使用。
- `miaoda-ten-chapter/upload-assets.cjs` 在读取、写入或上传前立即停止，旧应用绑定 `.spark/meta.json` 未复制。旧应用 ID、资源地址和发布证据仍在历史材料中保留。
- 各层部署缓存、依赖及环境凭证未继承。配置新发布目标时同时更新站点／应用绑定、上传链路和验证脚本，再形成新的发布记录。
- 旧发布状态按对应子目录的批次报告解释，不代表 v1.1 已部署。旧工程的配置和线上服务保持原状。

[开发首页](../README.md) · [v1.1待办](../TODO-v1.1.md)
