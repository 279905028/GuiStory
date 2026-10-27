# 美术资源

更新：2026-10-27｜当前采用图、制作资料、用户参考与历史资源已分开存放。

| 入口 | 内容 |
| --- | --- |
| [当前图库](index.html) · [采用清单](manifests/current-art.json) | 162张已采用图片，可按角色、背景、CG、封面、海报筛选；138张用于当前十章，24张文文B素材待后续接入。 |
| [current/](current/) | 当前成图；角色按人物归类，背景、CG、UI、海报分别存放。 |
| [sources/](sources/README.md) | 原始PNG/JPEG、提示词、生成结果、来源和制作资料，按批次保留。 |
| [references/](references/README.md) | 人物参考，以及从根目录归拢的毕节、贵阳实拍。 |
| [manifests/](manifests/README.md) | 当前运行清单、采用记录与旧路径映射。 |
| [archive/](archive/README.md) | 保留的旧WebP、上游输入和旧版清单。保留不等于当前游戏采用。 |

[正式运行清单](manifests/runtime-ten-chapter-manifest.json)用于判断游戏实际采用范围。[A06基线](manifests/baselines/a06-adoption.json)和[文文B采用记录](manifests/wenwen-option-b-adoption.json)保留原字节；历史路径通过[迁移映射](manifests/path-migration.json)定位，当前演出使用新路径。

[整理执行记录](../qa/folder-organization-20261027/README.md)记录A–D清理、E组保留及实际验证。历史记录中的旧路径可用 `node scripts/art-paths.cjs <旧相对路径>` 查询；退役WebP返回保留原图，已清理的验收截图不补造。

## 后续维护

- 按[美术规范](../项目文档/美术资源规范.md)制作，原始输出进入独立 `sources/<批次>/`，采用后登记到 `current/`。
- `node scripts/build-art-index.cjs` 重建图库与采用索引；加 `--check` 只读核验。
- 转换工具要求明确输入批次、全新输出目录与独立清单，先运行 `node scripts/convert-art-webp.cjs --help`。
- 修改正式绑定后运行 `node 任务拆分/三章扩展/build-story.cjs`，不要直接改生成的 `story.js`。

[当前待办](../TODO-v1.1.md) · [项目首页](../README.md) · [验收索引](../qa/README.md)
