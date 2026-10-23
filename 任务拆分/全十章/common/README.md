# E03 共通正文与路由

2026-10-22｜**共通源模块已完成**｜契约 `1.0.0`｜正文 `nightshift-20261022-r1`

十份 JSON 共389节点、53场景、361段原文、6处选择／17个选项，覆盖第一、二章全文及第三至第十章共通内容。正式游戏接入由 E09 完成。

## 模块

| 源文件 | 原文段数 | 节点 | 主要内容 |
| --- | ---: | ---: | --- |
| [ch01.json](ch01.json) | 158 | 161 | 返乡、夜班、人物前情；记录三拍与孟遥重逢选择 |
| [ch02.json](ch02.json) | 114 | 121 | 回应节奏、约局解释、叶岚初见；隐藏相识 |
| [ch03.json](ch03.json) | 4 | 6 | 共通开场与七线选择 |
| [ch04.json](ch04.json) | 8 | 10 | 发薪以后；转入已选路线 |
| [ch05.json](ch05.json) | 11 | 14 | 回声消息；第二章约局解释的两种回应 |
| [ch06.json](ch06.json) | 15 | 17 | 同一顿饭、当晚到岗、第31天凌晨与交班 |
| [ch07.json](ch07.json) | 6 | 8 | 休息日约局；转入已选路线 |
| [ch08.json](ch08.json) | 14 | 16 | 第52天试排；转入已选路线 |
| [ch09.json](ch09.json) | 10 | 12 | 第61天轮班；转入已选路线 |
| [ch10.json](ch10.json) | 21 | 24 | 两年后序言、唯一适用公共后日谈、返回所选路线 |

正文按段保留，只去掉第8天和第五章的四个读稿条件前缀，条件转为门禁。导航、读稿提示和纯结构标题列入 `exclusions`；章末正文为空，避免复述上一段。

## 接口

- 每章入口 `tc_cNN_common_entry`；第1—9章出口 `tc_cNN_common_exit`，路线末尾回到同章出口。
- 第三章 `tc_c03_common_route_choice` 写入 `route`；第4—10章 `tc_cNN_common_route_gate` 只读取既定路线。七个值全部显式列出，未知／缺失值报错。
- E05 在第三章读取 `reunion`、`yelanFirst`；E03 在第五章读取 `missedGame`，两种回应互斥。
- 隐藏入口同时要求 `qiuSignal=record`、`qiuReply=reply`、`qiuMet=true`。第8天未记录仍可敲门，但只播放未获回应段；第14天相识末行 `tc_c02_common_qiu_met` 自动写 `qiuMet=true`。
- `piaoRelationship` 仅由 E06 在第三章写入。第十章仅 `route=piao` 且关系为 `dating` 进入 `tc_c10_common_piao_dating`；其他合法路径进入 `tc_c10_common_piao_wedding`。随后进入本路线入口，路线不要再复制两段公共后日谈。

精确导入／导出、状态读写及资源语义见 [integration-map.json](qa/integration-map.json)。源文件／标题／段落／节点及 A01 场段对应见 [source-index.json](qa/source-index.json)；每份模块同时保留构建器使用的 `sourceMap` 和 `exclusions`。

## 演出接续

场景使用 A01 背景语义 ID，资产请求列出对应资源 ID。明确的直接对白标记说话者，叙述和多人转述保留旁白；`character:null` 清除上一段立绘，E09 再按场段绑定人物、头像、差分和 CG。线上语音／消息不摆实体立绘；门后声音在相识前不挂球球姓名／头像／立绘，推门看见后才可展示球形，婚宴没有球球。

`tc-bg-chapter-end` 是中性章末的待绑定语义，须由 E09 选择已采用背景，不是已采用图片。本轮没有改写 A01 清单。第六章共通已走到第31天06:00，E05 的孟遥／叶岚第30天补叙继续使用契约规定的 `flashback`。

## 验证与维护

从项目根目录执行：

```sh
node 任务拆分/全十章/common/assemble.cjs
node 任务拆分/全十章/common/verify.cjs
```

组装只写本目录十份 JSON，先核验冻结来源；原稿变更先升级契约。验证调用 E02 编译器，并执行正式构建入口的只检查模式：

```sh
node 任务拆分/三章扩展/build-story.cjs --ten-chapter --manifest 任务拆分/全十章/common/qa/fixtures/manifest.json --check
```

本轮38项检查通过，含8个反例；32种前情组合、232条带接口桩路径、13种结局条件上下文通过。共通门禁各分支有见证，每条测试路径恰好经过一个适用后日谈。40个保护文件指纹一致。见 [verification.json](qa/verification.json) 与 [路径见证](qa/path-witnesses.json)。

另已只读加载 E04 真实小满／周栀模块，与共通源合并检查通过，4个结局可达；其余五线仍为桩，见 [E03＋E04检查](qa/e04-common-integration.json)。这不替代真实引擎或完整十章验收。

基础测试的 `qa/fixtures/` 只提供外部进出、飘关系选择和变身事件的最小桩及 `sample://` 资源。447个组合节点中389个为真实共通源、58个为桩，在第十章七条路线入口停止，无终结节点。不得将测试桩接入游戏或当成路线交付。

E05—E07 真实路线、E06／E07 交叉复核、E08 播放器／存档、A06／E09 演出与集成、E10 实际验收继续待办。完整交接见 [E03.md](../交接/E03.md)。
