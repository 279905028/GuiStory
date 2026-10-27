# 文文·B方案黄发牛仔形象

2026-10-26｜用户已确认采用｜内置 image_gen 编辑与生成。

[整组图库](index.html) · [表情对比](../../../archive/character-variants/wenwen-option-b-production-20261026/qa-faces.webp) · [全部立绘浅底](../../../archive/character-variants/wenwen-option-b-production-20261026/qa-sprites-light.webp)／[深底](../../../archive/character-variants/wenwen-option-b-production-20261026/qa-sprites-dark.webp) · [封面与旧CG对比](../../../archive/character-variants/wenwen-option-b-production-20261026/qa-scenes.webp)

![新版基础立绘](../../../current/characters/wenwen/tc-char-wenwen-human-base.webp)

## 交付范围

| 资源 | 数量与使用 |
| --- | --- |
| 基础立绘＋表情 | 1＋12张；金黄色短寸、黑眉、洗旧浅蓝牛仔夹克、米白T恤。十章沿用原来的6个表情键与基础图。 |
| 动作 | 6张：招手、思考、解释、低头检查、看手机、抱臂倾听；覆盖旧整组入口。 |
| 旧剧情CG | 10张；凡出现文文的头发、衣袖、背影及倒影均同步，其他角色与场景沿原图。仅补绘旧CG，不把旧职业情节加入当前十章。 |
| 游戏封面 | 横竖各1张，已接入首页及正式构建。 |
| 人物海报 | 2张新版；原发布海报与ZIP保留为历史输出。无文文的海报C不需修改。 |

共33张采用WebP。当前十章4张CG无文文出镜，经逐图核查保留；当前首页、人物档案与现行图库均使用新版。原[全身B方案](../../../archive/character-variants/wenwen-town-youth-options-20261026/yellow-hair-v2/b-denim.webp)作为衣装基准，运行立绘改为头顶至上大腿的构图，以维持原游戏头像与画面比例。

## 提示词与来源

- [基础、封面、海报提示词](generation-jobs.json) · [18张表情动作提示词](sprite-jobs.json) · [10张旧CG提示词](cg-jobs.json)。
- 雨中返乡CG首稿遗漏前景真人的旧夹克，先[补改真人](corrections.json)，再[明确前景发色](correction-final.json)；采用v3，前两稿PNG保留在 `originals/`，未登记为采用图。
- [采用、替代路径、源PNG与指纹](../../../manifests/wenwen-option-b-adoption.json)。保留35张生成PNG（33张采用＋2张修订前稿），各工具返回路径记录于 `results/` 与修订记录。
- 33张均通过WebP真实编码、解码、原尺寸、alpha逐值及所有可见RGB一致校验；无损编码 `lossless: true, effort: 6`。完全透明像素下的部分不可见RGB可由编码器归零，未改变可见内容或透明度。
- 立绘均为1024×1536；横封面1672×941，竖封面与海报941×1672。CG01工具最终输出实际1670×942，按原样保留、等比显示；其余9张旧CG为1672×941，未借转码改变尺寸。

## 接入与验证

- 当前形象通过 `任务拆分/全十章/build/art-revision.cjs` 覆盖历史采用路径；A06采用清单、原图、原差分来源和历史验收记录保持原样。重建旧三章时也读取相同覆盖层。
- 已重新生成演出绑定，并执行正式构建；注册仍为138项，其中7张文文图、2张封面换为新版。正文、场景、选择、状态与存档规则不改。头像沿游戏原有裁切显示，未另造独立头像文件。
- 已目视检查13种面部状态、6个动作及明暗底边缘；两张封面的标题、两张海报的文案与人物、10张旧CG逐图核对完成。游戏中的加载与裁切结果见[专项验证](../../../../qa/wenwen-option-b-20261026/README.md)。
- 仅完成本地接入；未改写旧发布目录、历史快照或交付包，未执行公网部署。Safari及实体手机仍待验。

## 复现

在可使用 `sharp` 的Node环境中，`process-results.cjs` 可从生成原件复现无损WebP，`gallery.cjs` 可重建现行图库与检查图。游戏接入顺序：先执行演出准备器，再运行 `node 任务拆分/三章扩展/build-story.cjs`；只读核对使用该构建命令的 `--check`。
