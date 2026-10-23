const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const root = path.resolve(__dirname, '../..');
process.chdir(root);
const read = p => JSON.parse(fs.readFileSync(p, 'utf8'));
const sha = p => crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const data = read('任务拆分/全十章/美术清单.json');
const failures = [];
const check = (v, message) => { if (!v) failures.push(message); };
const unique = (rows, name) => { const ids = rows.map(x => x.id); check(new Set(ids).size === ids.length, name + ' ID重复'); return new Set(ids); };
const assetIds = unique(data.assets, '资源');
const cues = data.chapters.flatMap(c => c.sections);
const cueIds = unique(cues, '原文锚点');
unique(data.storyboards, '分镜');
check(data.chapters.length === 10, '不是十章');
const expectedRoutes = ['xiaoman','zhouzhi','mengyao','yelan','piao','friends','huangqiuqiu'];
for (const chapter of data.chapters) {
  check(sha(chapter.source) === chapter.sourceSha256, '原文指纹变化：' + chapter.source);
  const lines = fs.readFileSync(chapter.source, 'utf8').split('\n');
  check(chapter.sections.some(s => s.route === 'common'), '缺共通：' + chapter.chapter);
  if (chapter.chapter >= 3) for (const route of expectedRoutes) check(chapter.sections.some(s => s.route === route), `缺路线：${chapter.chapter}/${route}`);
  for (const section of chapter.sections) {
    check(section.sourceLineStart >= 1 && section.sourceLineEnd <= lines.length && section.sourceLineEnd >= section.sourceLineStart, '源行范围错误：' + section.id);
    check(lines.slice(section.sourceLineStart - 1, section.sourceLineEnd).some(l => l.includes(section.heading)), '源标题不匹配：' + section.id);
    check(section.runtimeNodeIds.length === 0 && section.bindingStatus === 'awaiting-runtime-source-map', '误声明正式节点：' + section.id);
    check(section.scenes.every(s => s.assetIds.length > 0 && s.assetIds.every(id => assetIds.has(id))), '场景映射悬空：' + section.id);
    check(section.characterAssetIds.every(id => assetIds.has(id)), '角色映射悬空：' + section.id);
    if (chapter.chapter <= 2 && section.characters.some(c=>c.id==='huangqiuqiu' && c.appearanceMode==='unidentified-offscreen-voice')) check(!section.characterAssetIds.some(id=>id.includes('huangqiuqiu')), '隐藏身份提前请求图像：'+section.id);
    check((section.lookAssetIds||[]).every(id=>assetIds.has(id)), '衣装映射悬空：'+section.id);
  }
}
for (const asset of data.assets) {
  for (const p of asset.sourcePaths || []) check(fs.existsSync(p), '源资源缺失：' + p);
  check(['reuse','revise','new','pending'].includes(asset.action), '未知资源动作：' + asset.id);
  for (const id of asset.cueIds || []) check(cueIds.has(id), '资源锚点悬空：' + asset.id + '/' + id);
  check(asset.adoptionStatus !== 'adopted', 'A01误声明正式采用：' + asset.id);
}
for (const board of data.storyboards) {
  check(board.cueIds.every(id => cueIds.has(id)) && board.cueIds.length > 0, '分镜来源悬空：' + board.id);
  check(board.assetIds.every(id => assetIds.has(id)), '分镜资源悬空：' + board.id);
}
check(data.endings.length === 13, '结局数量不为13');
unique(data.endings, '结局');
for (const ending of data.endings) check(ending.cueIds.length > 0 && ending.cueIds.every(id => cueIds.has(id)), '结局来源悬空：' + ending.id);
check(data.productionFreeze === false && data.mappingContract.runtimeNodeIds.length === 0, '未采用/未运行绑定边界丢失');
const protection = read('qa/a01-20261022/protected-before.json').files.map(f => ({path:f.path, unchanged:fs.existsSync(f.path) && sha(f.path) === f.sha256}));
const concurrentChanges = protection.filter(f => !f.unchanged);
for (const f of concurrentChanges) check(f.path === '项目文档/故事/全十章审阅稿/README.md', '非预期保护文件变化：' + f.path);
const contract = read('任务拆分/全十章/contract.json');
check(data.contractVersion === contract.contractVersion && data.contentRevision === contract.contentRevision && data.contractDependency.sha256 === sha('任务拆分/全十章/contract.json'), '契约版本或指纹不一致');
for (const chapter of data.chapters) check(chapter.sourceSha256 === contract.baseline.sourceManifest.find(f=>f.chapter===chapter.chapter).sha256, '契约正文指纹不一致');
check(data.sourceCoverage.every(c=>c.uncoveredNarrativeLines.length===0), '存在未映射正文行');
const choiceIds = new Set(cues.flatMap(c=>c.contractTargets.choices.map(x=>x.id)));
check(contract.choices.every(c=>choiceIds.has(c.id)), '未覆盖契约全部选择');
check(data.endings.every(e=>contract.endings.some(x=>x.id===e.contractNodeId)), '结局契约ID不一致');
check(cues.flatMap(c=>c.contractTargets.automaticEvents).length===2, '自动事件映射缺失');
const integrity = read('qa/a01-20261022/runtime-integrity.json');
check(integrity.pass && integrity.count === 93, '旧运行清单核对失败');
const docs = ['任务拆分/全十章/美术清单.md','任务拆分/全十章/交接/A01.md','TODO与多窗口提示词-v0.4.md'];
let localLinks = 0;
for (const file of docs) {
  const content = fs.readFileSync(file, 'utf8');
  for (const match of content.matchAll(/\]\(([^)]+)\)/g)) {
    const target = match[1].replace(/^<|>$/g, '').split('#')[0];
    if (!target || /^https?:/.test(target)) continue;
    localLinks++;
    check(fs.existsSync(path.resolve(path.dirname(file), decodeURIComponent(target))), '文档链接断链：' + file + ' → ' + target);
  }
}
const count = key => Object.fromEntries([...new Set(data.assets.map(a=>a[key]))].map(v=>[v,data.assets.filter(a=>a[key]===v).length]));
const result = {date:'2026-10-22',scope:'A01清单结构、源文稿指纹、来源与映射、旧文件保护、文档链接检查；非A06或游戏验收',pass:failures.length===0,failures,counts:{chapters:data.chapters.length,routeChapterPairs:data.chapters.filter(c=>c.chapter>=3).reduce((n,c)=>n+new Set(c.sections.filter(s=>s.route!=='common').map(s=>s.route)).size,0),cues:cues.length,assets:data.assets.length,byKind:count('kind'),byAction:count('action'),storyboards:data.storyboards.length,endings:data.endings.length,localLinks,protectedFiles:protection.length,existingRuntimeAssets:integrity.count},protectedFilesUnchanged:protection.every(f=>f.unchanged),unchangedProtectedFiles:protection.filter(f=>f.unchanged).length,concurrentChanges:concurrentChanges.map(f=>({...f,attributionEvidence:'任务拆分/全十章/交接/E01.md：更新十章README基线状态；A01未改写'})),contract:{version:data.contractVersion,contentRevision:data.contentRevision,choicesMapped:choiceIds.size,endingsMapped:data.endings.length},notExecuted:['生图与图片编辑','WebP重新转换与逐像素复验','正式构建与节点绑定','游戏/浏览器/设备验收','发布'],environmentNote:'系统git因Xcode许可不可用；采用本轮开始时570个文件SHA256快照对比，未宣称Git差异检查通过'};
fs.writeFileSync('qa/a01-20261022/validation.json', JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
process.exitCode = failures.length ? 1 : 0;
