# A03 黄球球双形态资源

2026-10-22｜`a03-20261022-r1`｜**美术制作完成，待 A06 登记采用、E09 接入。**

[打开画廊](index.html) · [双形态索引](forms-index.json) · [逐图校验与来源](manifest.json) · [交接](../../../任务拆分/全十章/交接/A03.md)

## 本次交付

| 形态 | 立绘／差分 | 规格 |
| --- | --- | --- |
| 人形 | 基础、微笑、犹豫、认真、低落、挥手、托腮，共 7 项 | 1024×1536，透明腰部截幅 |
| 球形 | 基础、认真、微笑、犹豫、轻搭手，共 5 项 | 1254×1254，透明完整球体 |
| 头像 | 上述每项均独立导出，共 12 张 | 512×512，透明无损 WebP |

新增 7 张成图：人形 6 张、球形轻搭手 1 张；基础人形及球形 4 项复用。微笑、低落、挥手和托腮经二次构图修订；首版与最终 PNG 均保留在 `originals/`。所有 WebP 均由原件真实无损编码，转换不附带裁切或缩放。头像裁切是单独的衍生流程，参数逐项保存在清单中。

用户本次已确认采用原有人形基础图，见[基准确认](baseline-approval.json)。保留棕色齐刘海、浅米灰外套、白色印花上衣、黑色颈饰、画面右侧白色眼部遮片及圆脸玩偶棒；不补下装，不添加伤病或施法设定。

## 工程调用

`forms-index.json` 是供合并的资源片段，不是完整角色注册表或故事文件。路径均相对项目根目录。

- `characters.huangqiuqiu.forms.sphere`：`presentation="orb"`；基础图与 `expression-serious / expression-smile / expression-hesitant / action-hand`。
- `characters.huangqiuqiu.forms.human`：`presentation="human"`；基础图与 `expression-smile / expression-hesitant / expression-serious / expression-downcast / action-wave / action-thinking`。
- 每个形态均提供 `image`、`expressions`、`avatarImage`、`avatarExpressions`、`presentation`。`assetBindings` 对齐 A01 的 12 个资源 ID 和原文美术锚点。
- 人形头像使用源画布 `(200,40,650,650)` 方形裁切；球形用整个方形画布等比缩至 512。不能将球形套用人形裁切。

形态由 `qiuForm=sphere/human` 选择。第55天先搭手、松开并腾出空间，到 `tc_c08_huangqiuqiu_human_reveal` 才换为人形；第9章及两种结局继续人形。轻搭手图仅画球球的一只小手，对方手指与接触由对白／后续演出承担，不附带变身特效。

人形差分保持同一画布与身份，重绘的发丝、衣褶和主体边界仍有细微差别，不是逐像素锁定的动画帧。E08／E09 应统一等比显示和底部锚点，E10 复核实际切换时的视觉跳动、小头像表情与手机裁切；不要跨形态回退或全局替换旧球形。

## 证据与边界

[本轮报告](../../../qa/a03-20261022/report.md)包含格式／像素核验、明暗底、手部细节、小头像与浏览器画廊检查。来源及提示词见[初次生成](prompts.json)、[构图修订](reframe-prompts.json)、[选用输入](production-inputs.json)。使用内置 image_gen，未调用外部 CLI 生图。

未改正式故事、播放器、旧美术或玩家存档，未构建或发布。A06 全局采用、E07 真实节点映射、E08 形态恢复、E09 集成及 E10 游戏验收尚待完成。旧文档中的“人形基础图待审”是本次确认前的记录，以本目录基准确认和交接为最新状态。
