# 验收与历史证据总索引

> 既有报告为继承证据。本次[项目隔离检查](v1.1-isolation-20261027/README.md)独立记录，后续新验收另建批次。

> 2026-10-27资源目录整理已完成，新的[整理专项](folder-organization-20261027/README.md)记录路径、字节保护和Chrome检查。用户批准的A–D附件已清理，E组保留；查阅旧报告时以[删除回执](folder-organization-20261027/deletion-receipt.json)识别已清理附件，原报告结论未重写。

更新：2026-10-27｜区分运行版检查、v1.1文稿审校与各批历史证据。

[v1.1 GitHub同步记录](github-v1.1-20261027/README.md)单独记录仓库交付前的只读检查和远端分支核验，不代表新版游戏或线上站点验收。

保存的报告、截图和“通过”结论均绑定其记录的版本、文件指纹及执行范围。当前运行版仍是网吧夜班版全十章；后续本地美术修订和独立文稿各有专项记录，不能将旧批次结果视为当前版本全量验收。

## 当前检查入口

| 范围 | 入口与实际边界 |
| --- | --- |
| 十章运行版 | 当前源与采用图以[运行清单](../assets/manifests/runtime-ten-chapter-manifest.json)为准。[E10说明](ten-chapter/README.md)及[设备清单](ten-chapter/manual-acceptance.md)记录2026-10-23冻结版本的本机回归；早于文文B接入，不代表当前所有文件已重新全量验收。完整Safari／实体手机仍待验。 |
| 文文B方案本地接入 | [2026-10-26专项验证](wenwen-option-b-20261026/README.md)。33张采用图及当前注册中的7张文文图、2张封面换新已检查；Chrome桌面／手机尺寸为专项覆盖，不代替全设备回归。未同步线上或既有交付包。 |
| v1.1独立文稿 | [阅读入口](../项目文档/故事/v1.1润色稿/README.md)、[审校记录](../项目文档/故事/v1.1润色稿/审校记录.md)及[文稿检查入口](v1.1-text/audit.cjs)。`node qa/v1.1-text/audit.cjs` 检查文字条件与路径；各轮基线和结果保存在 `v1.1-text/` 的独立批次内。文字审校不代表游戏、存档、美术或发布验收。 |
| E11本地交付包 | [包验收](ten-chapter-delivery/README.md)及[交付入口](../交付/全十章-E11/README.md)。结论只对应记录的ZIP及包内指纹；不自动涵盖后续本地换图。 |
| 线上发布 | [Cloudflare十章发布](../deployment/cloudflare-ten-chapter/README.md)、[妙搭发布](../deployment/miaoda-ten-chapter/README.md)。线上文件／操作证据按各自发布批次解释；本轮导航整理未新增线上验证。 |

检查脚本可能写入同目录报告或重新生成检查材料。需要复跑时在独立副本执行并保存新的批次记录，保留原报告、截图与来源；依赖和完整命令见对应说明。

## v1.1文稿批次

| 批次与入口 | 状态与适用范围 |
| --- | --- |
| [根层历史报告](v1.1-text/report.json)、[兼容脚本入口](v1.1-text/audit.cjs) | 根报告与历史重写报告相同；当前脚本转调 `piao-maolang-20261027/audit.cjs`，不会同步刷新根报告。不能根据根层文件名认定旧报告对应当前文稿。 |
| [重写批次报告](v1.1-text/rewrite-20261027/report.json) | 双结局重写及当时40%—60%扩写核算的历史记录；后续正文已有变化。`baseline/` 保留上一轮稿，`rendered/` 保存该轮组合展开。 |
| [前三章修订交接](v1.1-text/first-three-revision-20261027/README.md)、[报告](v1.1-text/first-three-revision-20261027/report.json) | 局部修订通过，覆盖共通篇、选线入口和七线第三章；报告绑定 `reviewed/` 快照，不覆盖并行增补的整线与后日谈。`before/` 与清单保留修订前材料。 |
| [飘／毛狼增补报告](v1.1-text/piao-maolang-20261027/report.json)、[批次目录](v1.1-text/piao-maolang-20261027) | 当前整稿增补的结构、后日谈接续及逐路径篇幅记录；报告已落盘，源文件指纹与当前文件匹配。基线、保护记录与阅读样本独立保存；仍不代表游戏接入或浏览器验收。 |

## 阶段记录如何衔接

[E10阶段README](ten-chapter/README.md)的“不进入E11最终交付放行”是当时设备待验下的边界。后来用户单独确认“仅完成本地交付”，由[E11交接](../任务拆分/全十章/交接/E11.md)与包验收记录接续；再后来的公网部署另见上表发布记录。E11中的“未公网发布”仍是该次本地交付的事实。上述后续记录均未把Safari／实体手机改为通过，原阶段README保留原文。

## 历史批次与必要输入

| 材料 | 用途 |
| --- | --- |
| 十章规划、美术制作与采用 | [规划](ten-chapter-plan-20261022/audit.json)、[A01](a01-20261022/validation.json)、[A03](a03-20261022/report.md)、[A04](a04-20261022/report.md)、[A05](a05-20261023/validation.json)、[A06汇总](a06-20261023/verification.json)及[角色](a06-20261023/characters/report.md)／[背景](a06-20261023/backgrounds/report.md)／[CG](a06-20261023/cg/report.md)。正式接入见[E09交接](../任务拆分/全十章/交接/E09.md)，清单关系见[美术总索引](../assets/README.md)。 |
| 黄球球人形前置工作 | [文字与参考](huangqiuqiu-human-20261022/report.md)、[基础立绘](huangqiuqiu-human-art-20261022/report.md)；后续采用与接入见A06／E09，原报告不改写。 |
| 旧三章及阅读修订 | [第三章](chapter3-20261020)、[后续修订](chapter3-followup-20261021)、[阶段核查](progress-20261021)、根层 `chapter3-*` 脚本与报告；不能用旧节点数、路径数判定十章结果。 |
| 旧背景、封面、差分绑定 | [场景背景](scene-backgrounds-20261020)、[女主背景](heroine-background-20261020)、[封面B](cover-b-20261020)、[表情绑定](expression-binding-20261020)。 |
| 旧角色方案 | [飘修订](piao-20261020)、[飘A](piao-optionA-20261020)、[飘B](piao-optionB-20261020)、[毛狼D](maolang-optionD-20261020)、[师匠A](shijiang-optionA-20261020)。 |
| 旧存档兼容与WebP迁移 | [存档批次](save-compat-20261021)、[WebP批次](webp-20261021)。 |
| 根层早期记录 | `art-*` 为美术、布局与来源记录；`cg-*`、`e3-*`、`e5-*`、`ui-*` 及同名脚本为旧版功能检查。失败尝试与最终结果均保留，按报告版本与指纹查阅。 |
| 必要输入与快照 | `before/`、`baseline/`、[fixtures](fixtures)保护原文、复现历史或支持检查；其中[旧三章剧情](chapter3-20261020/before/story.js)仍被[约定构建入口](../任务拆分/三章扩展/build-story.cjs)读取，QA不能整体当缓存删除。 |

## 复跑入口与写入范围

命令均从项目根目录执行。当前源与资源可先做以下只读核验，结果不代替游戏／设备验收：

```sh
node 任务拆分/三章扩展/build-story.cjs --check
node deployment/cloudflare-ten-chapter/prepare.cjs --check
```

下表为既有版本的脚本入口，没有统一的新批次输出参数。**不要在当前主目录直接执行并覆盖留存证据**；历史复现应在独立项目副本中保留原相对路径及匹配的源／包。针对当前版本的新验收按下一节另建批次。`--static-only` 只缩小范围，不保证只读。

| 入口 | 检查与写入边界 |
| --- | --- |
| `node qa/ten-chapter/run.cjs`；加 `--static-only` 仅构建／正文／引擎 | E10冻结版本入口，固定校验当时的剧情／构建指纹；当前形象接入后的指纹差异不能直接判为游戏缺陷，也不能修改旧基线使其通过。写 `ten-chapter/` 下各套报告，完整模式还写截图与Safari探测；依赖及分套入口见[E10说明](ten-chapter/README.md#复跑与交接)。 |
| `node qa/ten-chapter/summarize.cjs` | 核对已有证据并**改写** `ten-chapter/report.json`，不执行测试，也不是只读命令。 |
| `node qa/wenwen-option-b-20261026/verify.cjs`；可加 `--static-only` | 完整模式写该批 `results.json` 与截图；静态模式写 `static-results.json`。使用固定接入前基线，浏览器依赖见[专项说明](wenwen-option-b-20261026/README.md)。 |
| `node qa/ten-chapter-delivery/package-test.cjs <原ZIP路径>`；浏览器及收尾入口见[E11说明](ten-chapter-delivery/README.md#复跑) | 写该批包／浏览器／保护报告及截图；须匹配原ZIP、解压目录和源版本，不能把旧包与当前改动混验。 |
| `node qa/v1.1-text/audit.cjs` | 当前转调飘／毛狼增补校验器，只写 `piao-maolang-20261027/` 的报告、后日谈接续表与阅读样本；每次复跑仍须对应实际输入与新结果，入口切换本身不是验收。 |
| `node qa/v1.1-text/rewrite-20261027/audit.cjs` | 历史重写校验器；正式模式写旧重写报告、`rendered/` **及根历史 `report.json`**，并在写入后检查当时40%—60%的篇幅限制。勿对当前增补稿直接正式运行；`--draft` 只输出部分计算，不写文件，也不等于完整验收。 |
| `node qa/v1.1-text/first-three-revision-20261027/audit.cjs` | 写该局部批次报告与 `reviewed/` 快照；仅复核前三章，不自动验收并行整线修改。 |
| [A06角色](a06-20261023/characters/check.cjs)、[背景](a06-20261023/backgrounds/audit.cjs)、[CG](a06-20261023/cg/audit.cjs) | 输出位置与分项命令见各分册，沿用当时的采用／保护指纹；复跑不自动产生新的人工目视结论。`package`、`ingest`、`build-delivery` 等还可能生成资产或交付材料，不是只读检查。 |

## 新批次约定

1. 新检查使用独立目录，例如 `qa/<专题>-YYYYMMDD/`；同日多轮加有意义的后缀，保留旧路径，不继续向根层堆放结果。
2. 记录源版本、输入／资源指纹、检查范围及基线来源；移植旧脚本时先调整根路径、输出目录与冻结断言，不只复制脚本或修改报告日期。
3. 报告、截图、失败尝试与复跑说明全部落入新目录，区分最终结果与过程诊断；原目录的报告、基线、截图、构建输入和发布快照不覆盖、不迁移。
4. 交接写明实际执行、未验设备与限制，再更新本索引和[当前待办](../TODO-v1.1.md)；专项通过不能替代整体验收。

本次仅补导航和证据边界说明；当前待验范围与后续接入顺序见[当前待办](../TODO-v1.1.md)。

[项目总览](../总览.md) · [运行维护](../任务拆分/总览.md) · [美术总索引](../assets/README.md)
