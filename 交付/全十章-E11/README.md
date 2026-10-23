# E11 本地交付

2026-10-23｜用户确认本次仅完成本地交付，公网发布另行安排。E10的Safari／实体手机待验保持原状态。

- [完整ZIP](dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11.zip)：179,972,124字节（约180MB），完整解压后打开“开始游玩.html”。
- [已解压入口](dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11/开始游玩.html) · [操作说明](dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11/操作说明.md) · [回退说明](dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11/回退说明.md)。
- [ZIP指纹](dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11.zip.sha256) · [交付收据](dist/delivery-receipt.json) · [来源与维护说明](dist/bi-jie-ten-chapter-nightshift-20261022-r1-e11/维护说明.md)。

包内共229份文件：146份运行文件（七个页面／脚本／样式、一份运行清单、138张WebP）、62份来源与构建文件，以及操作／校验／历史证据材料。程序和采用图与正式版本逐字一致；37张沿用其他资源目录的图片也完整纳入。

长期游玩可运行包内启动器，使用固定本机地址 `http://127.0.0.1:4173/`；需要电脑已有Node.js，不安装依赖。直接打开HTML无需Node.js。浏览器进度与地址、端口、用户配置关联，切换启动方式不会自动迁移存档。

## 维护入口

```sh
node 交付/全十章-E11/build-package.cjs
```

打包器按当前正式清单冻结来源、只读复核构建与E10指纹、复制白名单并生成固定顺序／时间的ZIP。同名已存在时仅接受完全相同内容；变更版本不能静默覆盖。源构建逐字复核在macOS验证；Windows启动器随包提供但未实机验收，Windows不支持冻结构建器的逐字源重建。

本轮实际检查与复跑命令见[验收记录](../../qa/ten-chapter-delivery/README.md)，工作边界见[E11交接](../../任务拆分/全十章/交接/E11.md)。旧 `deployment/` 与E09／E10历史证据原样保留，未部署、未使用玩家存档。
