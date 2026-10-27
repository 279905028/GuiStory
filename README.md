# 毕节，雨停之前 · v1.1 开发工程

独立开发目录：`/Users/yipin/Desktop/cjb-v1.1`。旧工程保留在 `/Users/yipin/Desktop/cjb`。

目录隔离与美术资源整理已完成，运行内容仍继承旧版基线。开发入口见 [v1.1待办](TODO-v1.1.md) 与 [版本说明](版本说明-v1.1.md)。新工程关联 [GuiStory](https://github.com/279905028/GuiStory)，使用独立分支 `codex/v1.1-development`；同步范围与实际核验见 [GitHub同步记录](qa/github-v1.1-20261027/README.md)。

浏览器视觉小说。当前运行内容为网吧夜班版全十章，正文基线为 `nightshift-20261022-r1`；v1.1是尚未接入游戏的独立文稿。

- [项目总索引](总览.md)：区分运行版、v1.1文稿与历史材料，解释阶段文档的当时状态。
- [运行版正文](项目文档/故事/全十章审阅稿/README.md) · [v1.1文稿](项目文档/故事/v1.1润色稿/README.md)：分别阅读，设定与结局不混用。
- [试玩说明](试玩说明.md)：操作与存档说明；本地可直接打开 `index.html`。
- [当前待办](TODO-v1.1.md)：已完成事项和待验范围。
- [v1.1完整开发计划](项目文档/v1.1开发计划/README.md)：六女主A／B方案、100选60的CG、实拍场景、服装表情绑定、工程验收与并行提示词。
- [美术总索引](assets/README.md)：当前采用资源、制作与验收批次、原件及历史方案。
- [当前美术图库](assets/index.html)：集中查看162张采用图；目录迁移与清理结果见[整理记录](qa/folder-organization-20261027/README.md)。
- [QA总索引](qa/README.md)：当前验收口径、历史证据、复跑入口与新批次约定。
- [协作约定](AGENTS.md)：修改与交接要求。

## 构建与检查

需要 Node.js；根目录游戏无需安装依赖。

```sh
# 只读检查正式故事
node 任务拆分/三章扩展/build-story.cjs --check

# 校验正式运行文件和采用资源的指纹
node deployment/cloudflare-ten-chapter/prepare.cjs --check

# 修改章节源或构建规则后，重新生成正式产物
node 任务拆分/三章扩展/build-story.cjs
```

`story.js` 为生成文件，请修改章节源后构建。旧部署资料保留在 `deployment/`；v1.1 发布目标未配置，继承的旧发布入口已停用，见[发布说明](deployment/README.md)。

## 仓库范围

仓库包含游戏源码、章节与构建源、项目文档、美术资源及保留的验收记录。依赖、工具缓存、环境凭证及可重新生成的发布产物由 `.gitignore` 排除，本机原件保留。

E11 的 `dist/`（ZIP和已解压包）不入库；需要时按[交付说明](交付/全十章-E11/README.md)运行 `node 交付/全十章-E11/build-package.cjs` 生成。历史文档中的本机产物链接需先生成对应产物才能打开。

本次项目分离不代表完成 v1.1 游戏或设备验收；后续范围见[待办](TODO-v1.1.md)。
