# 《毕节，雨停之前》v1.0 正式版发布海报

2026-10-23｜三款独立竖版方案交付，均为 **941×1672**（约9:16），保持生成尺寸，不裁切、不放大。

| 方案 | 视觉方向 | 成品 |
| --- | --- | --- |
| A·雨后群像（推荐主海报） | 延续现有三位人物与桥上剪影，紫蓝暮色、金色灯火，电影群像感。 | [无损WebP](../../archive/release-posters-v1.0-20261023/poster-A-cinematic.webp) · [PNG原图](originals/poster-A-cinematic.png) |
| B·夜班灯火 | 文文在网吧柜台值夜班，雨窗与冷暖光突出项目的生活叙事。 | [无损WebP](../../archive/release-posters-v1.0-20261023/poster-B-nightshift.webp) · [PNG原图](originals/poster-B-nightshift.png) |
| C·雨停留白 | 米白纸感、深青标题、雨巷与伞，无人物的文艺海报。 | [无损WebP](../../archive/release-posters-v1.0-20261023/poster-C-literary.webp) · [PNG原图](originals/poster-C-literary.png) |

三款统一包含项目名、`v1.0 正式版发布`、`十章完整故事 · 七条路线 · 十三种结局`，未填写未经指定的发布日期、网址或二维码。场景是基于项目素材的艺术化表达，不是实景地点复刻。

## 制作与验证

- 使用内置 **image_gen** 制作，每个方案单独提示；以[正式竖版封面](../../archive/ten-chapter/ui/cover-mobile.webp)作为项目气质与人物参考。完整[提示词](prompts.json)及[生成来源](generation-record.json)随附。
- 工具实际输出PNG，已保留三张原件。WebP采用 `sharp` 无损编码，`lossless: true, effort: 6`；三张均通过真实格式、可解码性、尺寸一致与解码后RGBA逐像素相等校验，见[校验记录](validation.json)。
- 已逐张目视检查项目标题、版本发布文案、路线／结局数字、人物与文字布局；A、B的人物沿用已有形象，C无人物。未展示黄球球人形及结局CG。
- 交付范围为三款发布海报方案；选用方案待用户决定。未替换游戏封面、改动游戏与构建源，未改写历史发布包或执行部署。无需重建 `story.js`。

遵循[美术资源规范](../../../项目文档/美术资源规范.md)。
