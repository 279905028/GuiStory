'use strict';
// 只读正式资源；结果写入本检查目录。
const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const crypto = require('node:crypto'), assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const { story, StoryEngine, analyze, reach } = require('../heroine-background-20261020/story-test.cjs');
const game = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
const maps = vm.runInNewContext(game.slice(game.indexOf('  const MAOLANG_ART'), game.indexOf('  const own =')) +
  '\n({maolang:MAOLANG_ART, shijiang:SHIJIANG_ART})');
const inputFiles = ['story.js', 'game.js', 'engine.js', 'styles.css', 'index.html', 'assets/runtime-v0.4-manifest.json'];
const hashes = () => Object.fromEntries(inputFiles.map(file => [file,
  crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex')]));
const initialHashes = hashes();
const graph = analyze(story);
const runtimeManifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/runtime-v0.4-manifest.json')));
const packaged = new Set(runtimeManifest.assets.map(item => item.path));
const rows = [], bindings = [], issues = [], filesChecked = new Set();
const labels = {
  smile:'微笑', serious:'认真', hesitant:'犹豫', surprised:'惊讶', displeased:'不悦',
  downcast:'低落', determined:'坚定', embarrassed:'害羞', guilty:'愧疚',
  tired:'疲惫', wry:'苦笑', relieved:'释然',
  explaining:'解释', listening:'倾听', phone:'看手机', repairing:'维修', thinking:'思考', wave:'招手'
};
const label = key => labels[key.replace(/^(expression|action)-/, '')] || key;
function checkFile(file, packagedRequired = false) {
  filesChecked.add(file);
  if (!fs.existsSync(path.join(root, file))) issues.push({ type:'missing-file', file });
  if (packagedRequired && !packaged.has(file)) issues.push({ type:'not-in-runtime-manifest', file });
}
for (const [key, person] of Object.entries(story.characters)) {
  const folder = key === 'piao' ? 'assets/character-variants/piao-optionB-20261020' :
    key === 'shijiang' ? 'assets/character-variants/shijiang-optionA-20261020' :
    `assets/${['maolang', 'huangqiuqiu'].includes(key) ? 'new-character-variants' : 'character-variants'}/expressions-v01-20261019/${key}`;
  const available = fs.readdirSync(path.join(root, folder))
    .filter(file => new RegExp(`^char-${key}-(expression|action)-.+\\.png$`).test(file))
    .map(file => file.replace(`char-${key}-`, '').replace('.png', '')).sort();
  const used = new Set(), scenes = new Set();
  let explicitCount = 0, legacyCount = 0, stageNodes = 0;
  for (const node of Object.values(story.nodes).filter(node => node.character === key)) {
    stageNodes++;
    const legacy = maps[key]?.nodes[node.id];
    const variant = node.expression || legacy;
    if (!variant) continue;
    if (node.expression) explicitCount++; else legacyCount++;
    const source = person.expressions?.[variant] || maps[key]?.assets?.[variant] ||
      (maps[key]?.root ? `${maps[key].root}char-${key}-${variant}.png` : null);
    if (!source) { issues.push({ type:'invalid-variant', id:node.id, key, variant }); continue; }
    checkFile(source, true); used.add(variant); scenes.add(node.scene);
    // 当前正式引擎从开篇自然到达目标节点，再验证存档可恢复。
    const snapshot = reach(node.id, graph.witnesses.get(node.id)).snapshot();
    assert.equal(new StoryEngine(story, snapshot).current().id, node.id);
    bindings.push({ id:node.id, character:key, name:person.name, variant, label:label(variant),
      source, mapping:node.expression ? 'story' : 'player-legacy', scene:node.scene,
      sceneTitle:story.scenes[node.scene]?.title, chapter:story.scenes[node.scene]?.chapter,
      speaker:node.speaker, type:node.type, cg:node.cg || null, text:node.text });
  }
  checkFile(person.image, true);
  for (const file of Object.values(person.expressions || {})) checkFile(file, true);
  rows.push({ key, name:person.name, folder, available:available.length,
    availableExpressions:available.filter(v => v.startsWith('expression-')).length,
    used:used.size, usedExpressions:[...used].filter(v => v.startsWith('expression-')).length,
    registered:Object.keys(person.expressions || {}).length, explicitCount, legacyCount, stageNodes,
    baseNodes:stageNodes-explicitCount-legacyCount, scenes:[...scenes],
    usedVariants:[...used].sort().map(key => ({key,label:label(key)})),
    unused:available.filter(key => !used.has(key)).map(key => ({
      key,label:label(key),registered:Boolean(person.expressions?.[key])
    }))
  });
}
for (const node of Object.values(story.nodes)) {
  if (node.expression && !story.characters[node.character]) issues.push({type:'expression-without-character',id:node.id});
}
for (const [key, mapping] of Object.entries(maps)) for (const id of Object.keys(mapping.nodes)) {
  if (story.nodes[id]?.character !== key) issues.push({type:'stale-legacy-map',key,id});
}
const chapterCoverage = {};
for (const node of Object.values(story.nodes).filter(node => story.characters[node.character])) {
  const chapter = story.scenes[node.scene]?.chapter;
  const group = chapterCoverage[chapter] ||= {characterNodes:0,bound:0,base:0};
  group.characterNodes++;
  if (node.expression || maps[node.character]?.nodes[node.id]) group.bound++; else group.base++;
}
const unboundScenes = Object.entries(story.scenes).filter(([id]) =>
  !bindings.some(node => node.scene === id)).map(([id,scene]) => ({id,title:scene.title,chapter:scene.chapter}));
const continuityReturnsToBase = bindings.filter(binding => {
  const next = story.nodes[story.nodes[binding.id].next];
  return !binding.cg && next && !next.cg && next.character === binding.character &&
    !bindings.some(other => other.id === next.id);
}).map(binding => {
  const next = story.nodes[story.nodes[binding.id].next];
  return { from:binding.id, to:next.id, nextType:next.type, character:binding.character,
    variant:binding.variant, scene:binding.sceneTitle, text:next.text || next.prompt };
});
assert.deepEqual(hashes(), initialHashes, '检查期间正式文件发生变化');
const report = {
  checkedAt:new Date().toISOString(), scope:'本地 v0.4 背景补全版，正式配置及播放器映射；不代表公网部署',
  inputHashes:initialHashes, characters:rows, issues, bindings,
  summary:{characterCount:rows.length, scenes:Object.keys(story.scenes).length,
    nodes:Object.keys(story.nodes).length, explicitBindings:bindings.filter(n=>n.mapping==='story').length,
    legacyBindings:bindings.filter(n=>n.mapping==='player-legacy').length,
    totalBindings:bindings.length, usedVariants:rows.reduce((s,r)=>s+r.used,0),
    availableVariants:rows.reduce((s,r)=>s+r.available,0),
    unusedVariants:rows.reduce((s,r)=>s+r.unused.length,0),
    avatarExpressionBindings:Object.values(story.nodes).filter(n=>n.avatarExpression).length,
    cgOverlaps:bindings.filter(n=>n.cg).map(n=>n.id), filesChecked:filesChecked.size,
    naturallyReplayedAndRestored:bindings.length, graphReachableNodes:graph.reachableNodes,
    legalPathsByGraphAnalysis:graph.paths},
  chapterCoverage, unboundScenes, continuityReturnsToBase
};
fs.writeFileSync(path.join(__dirname,'results.json'), JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({summary:report.summary,issues,chapterCoverage,
  characters:rows.map(({name,available,used,explicitCount,legacyCount,baseNodes,unused})=>
    ({name,available,used,explicitCount,legacyCount,baseNodes,unused:unused.map(v=>v.label)})),unboundScenes},null,2));
module.exports = { root, story, StoryEngine, reach, graph, bindings, hashes, initialHashes };
