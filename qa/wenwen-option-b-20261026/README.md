# 文文B方案·专项验证

2026-10-26｜[实测结果](results.json)｜[现行图库与来源](../../assets/character-variants/wenwen-option-b-production-20261026/README.md)

- **33张采用图**：19张立绘／差分、10张旧CG、2张游戏封面、2张海报。生成PNG与无损WebP的格式、尺寸、解码、alpha和所有可见RGB核对通过；逐项参数和指纹见采用清单。
- **6项静态检查通过**：2612节点正文、状态与其他角色一致；186份原采用图与来源保护指纹一致；33图与76条替代路径有效；正式138项注册中7张文文图＋2张封面换新；旧三章资源可应用同一覆盖层；正式只读构建可复现。
- **6项Chrome页面检查通过**：1440×900与390×844各检查首页封面、真实节点文文头像、33图完整加载／分类筛选／明暗底切换／无横向溢出。零页面异常、零HTTP资源错误，保存10张真实截图；手机尺寸是模拟视口，未代替实体手机。
- **目视复核完成**：13种面部状态、6个动作、明暗底边缘、全部含文文的旧CG、两种封面及两张海报；游戏头像脸部和金黄短发裁切正常。CG01补改前景与倒影一致后采用v3。
- 浏览器使用独立临时Chrome与随机本机地址，结束后关闭；未连接现有浏览器、读取玩家存档或执行公网部署。Safari与实体手机待验保留。

## 真实画面

[电脑封面](screenshots/title-desktop.png) · [手机尺寸封面](screenshots/title-phone.png) · [电脑文文头像](screenshots/avatar-crop-desktop.png) · [手机尺寸游戏](screenshots/avatar-phone.png) · [浅底图库](screenshots/gallery-light-desktop.png) · [深底图库](screenshots/gallery-dark-desktop.png)

复核命令：`node qa/wenwen-option-b-20261026/verify.cjs`；仅读静态检查可加 `--static-only`，该模式不等同浏览器结果。验收记录不会重写旧E10报告或旧QA截图。
