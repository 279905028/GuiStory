# 黄球球人形基础立绘

日期：2026-10-22｜范围：一张基础透明立绘，不含表情差分或游戏接入

## 交付

- [无损WebP](../../assets/character-variants/huangqiuqiu-human-20261022/char-huangqiuqiu-human-base.webp)：1024×1536，透明腰部截幅，供后续制作使用。
- [生成PNG原件](../../assets/character-variants/huangqiuqiu-human-20261022/char-huangqiuqiu-human-base.png)：与最终内置生图输出逐字节相同。
- [制作与校验清单](../../assets/character-variants/huangqiuqiu-human-20261022/manifest.json)：来源、尺寸、指纹、透明度、转换参数与接入状态。
- [首次生成提示词](../../assets/character-variants/huangqiuqiu-human-20261022/prompt.txt) · [构图修订提示词](../../assets/character-variants/huangqiuqiu-human-20261022/framing-prompt.txt)。使用内置 image_gen，未使用外部API或CLI生成。

以[用户照片](../../assets/references/huangqiuqiu-human-20261022/user-reference.jpg)为形象参考，飘与小满基础立绘只作画风参考。保留棕色齐刘海中长发、浅米灰宽松外套、白色印花上衣、黑色颈饰、画面右侧单眼白色遮片与圆脸玩偶棒。没有添加照片未显示的下装。首版两侧袖子过近边缘，第二次生成扩大留白；首版保留为制作过程记录，交付采用第二版。

## 实际检查

| 项目 | 结果 |
| --- | --- |
| 格式与透明度 | PNG／WebP均可解码，1024×1536；alpha范围0—254，全透明像素575,841。主体alpha大于127的范围为x=40—999、y=85—1527，两侧无主体截断。 |
| 无损转换 | sharp，lossless=true，effort=6；尺寸、全部alpha与所有可见RGB逐值相同。完全透明像素下的不可见RGB允许编码器归零，与项目现有转换规则一致。 |
| 明暗底 | 已查看[明暗底合成](light-dark.png)：发丝、袖口及玩偶边缘未见明显背景块或光晕。 |
| 局部细节 | 已查看[脸部与握柄细节](face-hand-detail.png)：单眼遮片方向一致，持棒手指与连续直柄可辨；另一只手置于外套口袋。 |
| 文件边界 | [制作前指纹](before-hashes.json)中的17个游戏、构建源、运行清单与球形资源未变化。 |

以上为文件与图片检查，不是游戏画面验收。立绘外观待用户审阅；表情差分、头像、人形／球形节点切换、剧情接入和浏览器验收仍未完成。本轮未运行构建、修改存档或发布。

[人物档案](../../项目文档/人物/黄球球.md) · [当前待办](../../TODO与多窗口提示词-v0.4.md)
