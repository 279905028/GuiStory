# 美术资源总索引

更新：2026-10-27｜当前采用范围以正式十章运行清单为准；制作批次和历史清单保留各自记录。

## 当前运行资源

| 入口 | 用途与边界 |
| --- | --- |
| [十章运行清单](runtime-ten-chapter-manifest.json) | 正式构建生成的当前运行文件、138张注册WebP及来源指纹；判断游戏实际采用范围的入口。采用图分布在多个目录，不能按目录名或 `candidate` 文件名判断是否仍在使用。 |
| [十章画廊](ten-chapter/index.html) | 查看当前画廊与分类；正式引用仍以运行清单及[演出绑定](../任务拆分/全十章/presentation/README.md)为准。 |
| [文文B方案](character-variants/wenwen-option-b-production-20261026/README.md)／[采用与替代清单](character-variants/wenwen-option-b-production-20261026/adoption.json) | 共33张采用图；当前十章注册中的7张文文图、2张封面已在本地换新。通过形象修订层保留原A06采用及来源记录；线上版本和既有交付包尚未同步。 |
| [A06全局采用](ten-chapter/a06-adoption.json)／[场景节点映射](ten-chapter/a06-scene-node-map.json) | 十章首次正式集成的采用基线与映射；后续形象修订另行记录，当前路径以运行清单为准。 |

## 制作、来源与历史清单

| 入口 | 保存内容 |
| --- | --- |
| [A01美术清单与分镜](../任务拆分/全十章/美术清单.md)／[交接](../任务拆分/全十章/交接/A01.md) | 十章美术需求与场段锚点，不是当前运行采用范围。 |
| [A02常规角色](ten-chapter/characters/README.md)、[A03黄球球双形态](ten-chapter/huangqiuqiu/README.md)、[A04背景](ten-chapter/backgrounds/README.md)、[A05 CG](ten-chapter/cg/README.md)／[封面](ten-chapter/ui/README.md) | 各批制作清单、原件、提示词、差分和局部检查；不是当前完整运行注册表。 |
| [WebP转换清单](webp-manifest.json) | 对应批次的原图／衍生WebP及格式、像素、尺寸和指纹记录；不据此推断全部当前采用图。 |
| [v0.3运行清单](runtime-v0.3-manifest.json)、[v0.4运行清单](runtime-v0.4-manifest.json) | 旧版运行范围与历史复现记录，不作为十章发布白名单。 |
| [v1.0发布海报](release-posters-v1.0-20261023/README.md) | 当时三方案、PNG原件及来源保留，选用待定；新版文文海报见B方案。 |
| [角色变体](character-variants/)、[新增角色变体](new-character-variants/)、[背景变体](background-variants/)、[旧CG](cg/)／[CG变体](cg-variants/)、[封面候选](cover-options/20261020/) | 制作原件、候选与历史修订并存，部分仍被运行版复用；不按目录名称清理。 |
| [参考图与来源](references/) | 用户原件及衍生参考；项目根层[毕节实拍](../毕节场景参考/)／[贵阳实拍](../贵阳场景参考/)同样原样保留。 |

A02—A05阶段README中的“待A06采用／E09接入”“未接入正式游戏”说明交付当时状态。后续已由[A06采用](../任务拆分/全十章/交接/A06.md)和[E09正式集成](../任务拆分/全十章/交接/E09.md)接续，游戏验收范围见[E10](../任务拆分/全十章/交接/E10.md)及[专项验证](../qa/wenwen-option-b-20261026/README.md)。保留这些原文与历史清单，不将后来的接入或替代结果倒写为当时已完成。

[v1.1文稿](../项目文档/故事/v1.1润色稿/README.md)尚未接入游戏，也未据此完成新一轮美术绑定。制作与迁移遵循[美术资源规范](../项目文档/美术资源规范.md)；原件、历史截图、来源及发布快照原样保留。

## 核验与复跑入口

以下命令从项目根目录执行，只读核验当前构建输入、运行文件与采用图，不写资源／报告，也不执行部署：

```sh
node 任务拆分/三章扩展/build-story.cjs --check
node deployment/cloudflare-ten-chapter/prepare.cjs --check
```

格式／像素／画廊与游戏专项的复跑入口、版本和写入范围见[QA总索引](../qa/README.md#复跑入口与写入范围)。历史脚本可能读取冻结清单、固定写回原目录，须在独立副本匹配原版本复现，保留原证据。

`scripts/convert-art-webp.cjs` 会写WebP及转换清单；文文批次的 `process-results.cjs` 会重建WebP，`gallery.cjs` 会重建图库与检查拼图。它们属于制作／重建工具，不是只读核验。修改接入源后按[协作约定](../AGENTS.md)正式重建 `story.js`，不能只改生成物。

## 新批次约定

- 新图、候选、原件、提示词与来源放入独立目录，例如 `assets/character-variants/<主题>-YYYYMMDD/`；同日新轮加批次后缀，对应证据放入独立 `qa/<主题>-YYYYMMDD/`，并在两处总索引登记。
- 依美术规范优先WebP；工具原始PNG／JPEG和来源保留，透明立绘／差分优先无损并保留alpha，转码校验后再接入。
- 所有旧路径、原始输出、历史来源、QA截图及发布快照保留；新增索引不伴随搬迁、改名、重编码历史证据或删除候选。交接写清采用范围、实际验证和未完成项。

[项目总览](../总览.md) · [验收总索引](../qa/README.md) · [当前待办](../TODO与多窗口提示词-v0.4.md)
