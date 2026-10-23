'use strict';

// E09 演出准备器。只写本目录；正文/日序/状态/跳转仍由各来源模块拥有。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../../..');
const read = file => JSON.parse(fs.readFileSync(path.join(root, file), 'utf8'));
const hash = file => crypto.createHash('sha256').update(fs.readFileSync(path.join(root, file))).digest('hex');
const checkOnly = process.argv.slice(2).includes('--check');
assert(process.argv.slice(2).every(x => x === '--check'), '仅支持 --check 参数');
const write = (name, value) => {
  const target = path.join(__dirname, name), text = JSON.stringify(value, null, 2) + '\n';
  if (checkOnly) assert.equal(fs.readFileSync(target, 'utf8'), text, name + ' 与准备器结果不一致，请重新生成');
  else fs.writeFileSync(target, text);
};
const adoption = read('assets/ten-chapter/a06-adoption.json');
const map = read('assets/ten-chapter/a06-scene-node-map.json');
const contract = read('任务拆分/全十章/contract.json');
const qiu = read('任务拆分/全十章/校验/E07/presentation.json');
const decisions = read('任务拆分/全十章/presentation/decisions.json');
assert.equal(decisions.unspecifiedLocations.status, 'confirmed-by-user', '18个未点名场景尚未经用户确认');
for (const item of map.sourceFingerprints) assert.equal(hash(item.path), item.sha256, 'A06源指纹已变：' + item.path);
for (const item of adoption.assets) {
  assert.equal(item.adoptionStatus, 'adopted-static', '资源未通过A06：' + item.id);
  assert.equal(hash(item.file), item.sha256, '采用图指纹已变：' + item.file);
  const bytes = fs.readFileSync(path.join(root, item.file));
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF');
  assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
}
assert.equal(hash(qiu.formsIndex), qiu.formsIndexSha256, 'E07双形态来源已变');
const moduleFiles = [...contract.chapters.map(x => x.commonModule), ...contract.routes.map(x => x.file)];
const modules = moduleFiles.map(file => read('任务拆分/全十章/' + file));
const nodes = Object.assign({}, ...modules.map(x => x.nodes));
const scenes = Object.assign({}, ...modules.map(x => x.scenes));
const assets = Object.fromEntries(adoption.assets.map(x => [x.id, x]));
const bindings = {
  schemaVersion: 1, contractVersion: contract.contractVersion, contentRevision: contract.contentRevision,
  characters: {}, backgrounds: {}, cgs: {}, scenes: {}, nodes: {}
};
const colors = {wenwen:'#99b7cb',xiaoman:'#d48768',zhouzhi:'#69b9b1',mengyao:'#d2b693',yelan:'#9ba7bc',maolang:'#9ba471',shijiang:'#7391b4',huangqiuqiu:'#e5bf45',piao:'#c69c91'};
for (const person of contract.characters) {
  if (person.id === 'huangqiuqiu') {
    bindings.characters[person.id] = {name:person.name,age:person.age,color:colors[person.id],forms:map.qiuqiuForms};
    continue;
  }
  const base = assets['tc-char-' + person.id + '-human-base'];
  const expressions = {};
  for (const item of adoption.assets.filter(x => x.batch === 'A02' && x.character === person.id)) {
    if (item.kind === 'look') expressions['outfit-' + item.id.replace('tc-look-' + person.id + '-', '')] = item.file;
    else if (item.expression !== 'base') expressions[item.expression] = item.file;
  }
  bindings.characters[person.id] = {name:person.name,age:person.age,color:colors[person.id],image:base.file,presentation:'human',expressions};
}
for (const asset of adoption.assets.filter(x => x.kind === 'background')) bindings.backgrounds[asset.id] = asset.file;
bindings.backgrounds['tc-bg-chapter-end'] = 'none';
const decisionsApplied = [];
for (const scene of map.scenes) {
  const bg = scene.suggestedBgId || scene.candidateBgId || (scene.requestedBgId === 'tc-bg-chapter-end' ? 'tc-bg-chapter-end' : null);
  assert(bg && Object.hasOwn(bindings.backgrounds, bg), '场景未绑定：' + scene.id);
  bindings.scenes[scene.id] = {bg};
  if (scene.candidateBgId) decisionsApplied.push({sceneId:scene.id,bg,location:scenes[scene.id].location});
  for (const override of scene.nodeOverrides) {
    if (override.application === 'scene-context-only-do-not-bind-gate-bg') continue;
    assert.notEqual(nodes[override.nodeId].type, 'gate');
    bindings.nodes[override.nodeId] = {bg:override.assetId};
  }
}
const mutable = node => contract.interface.nodeFields[node.type].optional.includes('character');
const set = (id, change) => {
  assert(nodes[id], '演出节点不存在：' + id);
  assert(mutable(nodes[id]), '控制节点不可覆盖：' + id);
  bindings.nodes[id] = {...bindings.nodes[id], ...change};
};
const clear = id => set(id, {character:null});
for (const node of Object.values(nodes)) if (mutable(node)) set(node.id, {character:node.character || null});

// 明确在场人物名单。单人舞台只切换当前镜头，不把整段候选名单同时摆上画面。
const commonCast = {
  ts_c01_common_arrival_slope:['maolang'], ts_c01_common_first_shift_talk:['shijiang','maolang'],
  ts_c01_common_first_shift:['shijiang'], ts_c01_common_breakfast:['maolang'],
  ts_c01_common_salon:['xiaoman'], ts_c01_common_reunion:['mengyao'], ts_c01_common_reunion_fork:['mengyao'],
  ts_c01_common_noodles:['zhouzhi','maolang'], ts_c01_common_piao_meal:['piao','maolang'], ts_c01_common_two_umbrellas:['piao','maolang'],
  ts_c02_common_yelan_first:['yelan'], ts_c02_common_yelan_walk:['yelan'],
  ts_c02_common_friends_meal:['maolang','xiaoman','piao'], ts_c02_common_qiu_meeting:['huangqiuqiu'],
  ts_c06_common_last_night_meal:['zhouzhi','maolang','xiaoman'], ts_c06_common_meal_goodbye:['zhouzhi'],
  ts_c08_common_trial_roster:['shijiang'], ts_c09_common_confirmed_roster:['shijiang','maolang'],
  ts_c10_common_piao_dating_meal:['piao','maolang'], ts_c10_common_piao_wedding:['maolang','piao']
};
const friendsCast = {
  ts_c03_friends_tailoring_shop:['maolang'], ts_c04_friends_show:['maolang'], ts_c04_friends_walk:['maolang'],
  ts_c04_friends_walk_stool:['maolang'], ts_c04_friends_walk_wall:['maolang'], ts_c04_friends_crossroad:['maolang'],
  ts_c05_friends_job_name:['maolang'], ts_c05_friends_job_name_door:['maolang'], ts_c05_friends_say_it_counter:['shijiang'],
  ts_c06_friends_quiet_company:['maolang'], ts_c06_friends_quiet_company_eaves:['maolang'],
  ts_c08_friends_boundaries_glasses:['shijiang'], ts_c09_friends_birthday:['maolang','shijiang'],
  ts_c10_friends_late_host:['piao','maolang'], ts_c10_friends_friends_table:['shijiang','maolang','piao'], ts_c10_friends_rain_walk:['maolang']
};
const names = Object.fromEntries(contract.characters.map(x => [x.id, x.name]));
names.xiaoman = '小满';
function choosePhysical(node, cast) {
  if (cast.includes(node.speaker)) return node.speaker;
  const named = cast.find(id => (node.text || '').startsWith(names[id]));
  return named || cast[0];
}
for (const node of Object.values(nodes)) {
  if (!mutable(node)) continue;
  const cast = commonCast[node.scene] || friendsCast[node.scene];
  if (cast) set(node.id, {character:choosePhysical(node, cast)});
}
// 飘路线的电话、照片、消息及独处均不摆实体。其他镜头已有明确同场正文。
const piaoEmptyScenes = new Set([
  'ts_c03_piao_sweet_jelly','ts_c03_piao_say_clearly','ts_c03_piao_friends_message',
  'ts_c06_piao_closed_echo','ts_c06_piao_friends_home','ts_c07_piao_dating_laundry','ts_c07_piao_dating_message'
]);
for (const node of Object.values(nodes)) if (node.id.match(/^tc_c\d\d_piao_/) && mutable(node)) {
  set(node.id, {character:piaoEmptyScenes.has(node.scene) ? null : 'piao'});
}
// 到场、离场、消息段落和回叙边界按正文精确裁定。
const emptyNodes = [
  'tc_c01_common_job_talk_01','tc_c01_common_reunion_01','tc_c01_common_noodles_16',
  'tc_c01_common_two_umbrellas_04','tc_c01_common_two_umbrellas_05',
  'tc_c01_common_reunion_message_01','tc_c01_common_reunion_message_02','tc_c01_common_reunion_message_03',
  'tc_c02_common_friends_meal_01','tc_c02_common_friends_meal_13','tc_c02_common_friends_meal_14',
  'tc_c08_common_trial_roster_14','tc_c09_common_confirmed_roster_09','tc_c09_common_confirmed_roster_10',
  'tc_c09_piao_entry','tc_c07_piao_entry','tc_c08_piao_entry',
  'tc_c05_xiaoman_entry','tc_c05_xiaoman_new_coat_001','tc_c06_xiaoman_entry','tc_c09_xiaoman_entry',
  'tc_c05_zhouzhi_entry','tc_c05_zhouzhi_two_seats_001','tc_c05_zhouzhi_two_seats_002',
  'tc_c06_zhouzhi_entry','tc_c06_zhouzhi_after_closing_002','tc_c07_zhouzhi_entry','tc_c07_zhouzhi_her_plans_002',
  'tc_c08_zhouzhi_entry','tc_c09_zhouzhi_entry',
  'tc_c10_zhouzhi_dating_001','tc_c10_zhouzhi_dating_002','tc_c10_zhouzhi_dating_003','tc_c10_zhouzhi_dating_004',
  'tc_c05_friends_entry','tc_c08_friends_boundaries_010','tc_c08_friends_boundaries_011',
  'tc_c09_friends_entry','tc_c10_friends_entry','tc_c10_friends_rain_walk_004','tc_c10_friends_rain_walk_005',
  'tc_c10_common_piao_wedding_09'
];
for (const id of emptyNodes) clear(id);
set('tc_c01_common_rhythm_ignore_02',{character:'shijiang'});
set('tc_c02_common_friends_meal_09',{character:'zhouzhi'});
set('tc_c01_common_piao_meal_01',{character:'piao'});
set('tc_c10_common_piao_dating',{character:'maolang'});
set('tc_c09_common_confirmed_roster_04',{character:'maolang'});
set('tc_c09_common_confirmed_roster_08',{character:'maolang'});
set('tc_c05_zhouzhi_unexpected_company_002',{character:'maolang'});
set('tc_c05_zhouzhi_unexpected_company_003',{character:'maolang'});
// 婚宴前的毛狼电话只留头像；他实际来接飘以后才允许现场镜头。
set('tc_c09_piao_friends_009',{character:'maolang'});
set('tc_c09_piao_friends_010',{character:'piao'});
set('tc_c09_piao_friends_011',{character:'maolang'});
// 同一概述包含饭局和饭后路口。候选街道不能覆盖明确夹菜的两拍。
set('tc_c07_piao_friends_005',{bg:'tc-bg-food-day',character:'maolang'});
set('tc_c07_piao_friends_006',{bg:'tc-bg-food-day',character:'piao'});
set('tc_c07_piao_friends_007',{bg:'tc-bg-street-day',character:'maolang'});

// 常规衣装只有基础图。用独立表情键保持衣装，头像使用同一个已采用图。
function outfitNodes(predicate, who, outfit) {
  const key = 'outfit-' + outfit;
  assert(bindings.characters[who].expressions[key]);
  for (const node of Object.values(nodes)) if (mutable(node) && predicate(node) && bindings.nodes[node.id].character === who) {
    set(node.id, {expression:key});
    if (node.speaker === who) set(node.id, {avatarExpression:key});
  }
}
const cueNodes = ids => new Set(map.sections.filter(x => ids.includes(x.cueId)).flatMap(x => x.nodeIds));
outfitNodes(n => n.scene === 'ts_c01_common_salon' || n.scene === 'ts_c03_xiaoman_salon_visit', 'xiaoman', 'work-apron');
outfitNodes(n => n.id.startsWith('tc_c05_xiaoman_new_coat_') || (n.id.startsWith('tc_c06_xiaoman_') && n.id !== 'tc_c06_xiaoman_entry'), 'xiaoman', 'new-coat');
outfitNodes(n => n.id.startsWith('tc_c03_mengyao_flatbread_') || n.id.startsWith('tc_c05_mengyao_hurt_joke_'), 'mengyao', 'teacher-bag');
const mengCasual = cueNodes(assets['tc-look-mengyao-casual-jacket'].cueIds);
outfitNodes(n => mengCasual.has(n.id), 'mengyao', 'casual-jacket');
const yelanCasual = cueNodes(assets['tc-look-yelan-casual'].cueIds);
outfitNodes(n => yelanCasual.has(n.id), 'yelan', 'casual');
outfitNodes(n => n.id.startsWith('tc_c06_zhouzhi_'), 'zhouzhi', 'light-blue-shirt');
outfitNodes(n => n.id.startsWith('tc_c10_zhouzhi_dating_') || n.id === 'tc_c10_zhouzhi_end_dating', 'zhouzhi', 'tied-hair');
outfitNodes(n => n.scene === 'ts_c10_common_piao_wedding', 'piao', 'wedding');
outfitNodes(n => n.scene === 'ts_c10_common_piao_wedding', 'maolang', 'wedding');

// 有直接措辞依据才加常规表情；无依据时保留基础，不把第一人称心情套给对方。
for (const node of Object.values(nodes)) {
  const b = bindings.nodes[node.id], who = b?.character;
  if (!who || who === 'huangqiuqiu' || b.expression || node.type !== 'line') continue;
  const text = node.text || '', directName = text.startsWith(names[who]);
  let expression;
  if ((directName || text.startsWith('她笑') || text.startsWith('他笑')) && /笑/.test(text)) expression = 'expression-smile';
  if (directName && /皱眉|认真地看|收起笑/.test(text)) expression = 'expression-serious';
  if (expression && bindings.characters[who].expressions[expression]) {
    set(node.id, {expression});
    if (node.speaker === who) set(node.id, {avatarExpression:expression});
  }
}
// E07逐拍请求优先；基础没有 expression 键，避免引用不存在的 expressions.base。
for (const request of [...qiu.nodeRequests, ...qiu.controlRequests]) {
  set(request.nodeId,{character:request.character});
  if (request.character && request.expression !== 'base') set(request.nodeId,{expression:request.expression});
  if (request.avatarExpression && request.avatarExpression !== 'base') set(request.nodeId,{avatarExpression:request.avatarExpression});
}
for (const rule of map.cgRules.items.filter(x => x.kind !== 'cover')) {
  assert(assets[rule.id] && rule.file === assets[rule.id].file);
  bindings.cgs[rule.id] = {
    image:rule.file, name:assets[rule.id].label, alt:assets[rule.id].label, allowedNodeIds:rule.allowedNodeIds,
    conditions:rule.conditions, ...(rule.requiresEventPreviouslyExecuted ? {requiresEventPreviouslyExecuted:rule.requiresEventPreviouslyExecuted} : {}),
    fit:'contain', hideRegularSprites:true
  };
  for (const id of rule.allowedNodeIds) set(id,{cg:rule.id});
}
const assetFiles = new Set(adoption.assets.map(x => x.file));
const registeredFiles = new Set();
function checkFiles(value) {
  if (typeof value === 'string' && value.startsWith('assets/')) {
    assert(assetFiles.has(value),'运行图不在A06采用清单：'+value); registeredFiles.add(value);
  } else if (Array.isArray(value)) value.forEach(checkFiles);
  else if (value && typeof value === 'object') Object.values(value).forEach(checkFiles);
}
checkFiles(bindings);
for (const [id,b] of Object.entries(bindings.nodes)) {
  assert.notEqual(nodes[id].type,'gate');
  assert(!b.expression || b.character, '差分无人物：'+id);
  if (b.character && b.character !== 'huangqiuqiu' && b.expression) assert(bindings.characters[b.character].expressions[b.expression],'立绘差分缺图：'+id);
  if (b.avatarExpression && nodes[id].speaker !== 'huangqiuqiu') assert(bindings.characters[nodes[id].speaker]?.expressions[b.avatarExpression],'头像差分缺图：'+id);
}
const covers = map.cgRules.items.filter(x => x.kind === 'cover').map(x => ({id:x.id,file:x.file,orientation:x.orientation}));
assert.equal(decisionsApplied.length,18);
assert.equal(Object.keys(bindings.characters).length,9);
assert.equal(Object.keys(bindings.backgrounds).length,56);
assert.equal(Object.keys(bindings.cgs).length,4);
assert.equal(registeredFiles.size,136);
write('bindings.json',bindings);
write('integration-metadata.json', {
  schemaVersion:1,task:'E09',contractVersion:contract.contractVersion,contentRevision:contract.contentRevision,
  inputFingerprints:[...map.sourceFingerprints,{path:'assets/ten-chapter/a06-adoption.json',sha256:hash('assets/ten-chapter/a06-adoption.json')},{path:'assets/ten-chapter/a06-scene-node-map.json',sha256:hash('assets/ten-chapter/a06-scene-node-map.json')},{path:'任务拆分/全十章/presentation/decisions.json',sha256:hash('任务拆分/全十章/presentation/decisions.json')},{path:'任务拆分/全十章/presentation/prepare-bindings.cjs',sha256:hash('任务拆分/全十章/presentation/prepare-bindings.cjs')}],
  counts:{characters:9,regularCharacterImages:53,qiuqiuMainAndAvatarImages:24,backgroundImages:55,programmaticBackgrounds:1,cgs:4,covers:2,registeredStoryImages:registeredFiles.size,scenes:Object.keys(bindings.scenes).length,nodeBindings:Object.keys(bindings.nodes).length,sourceFingerprintChecks:map.sourceFingerprints.length,assetFingerprintChecks:adoption.assets.length},
  covers,unspecifiedLocations:decisionsApplied,
  conditionalCgRules:map.cgRules.items.filter(x=>x.kind!=='cover'),
  transitions:[{nodeId:'tc_c08_huangqiuqiu_her_decision_020',request:'fade-sphere-before-human-reveal',form:'sphere',nextHumanEvent:'tc_c08_huangqiuqiu_human_reveal'}],
  boundaries:['不更改正文、日序、地点或故事状态','A06静态采用与运行绑定分开保留','程序底色不是第56张已采用背景','浏览器与E10验收另行执行']
});
console.log(JSON.stringify({ok:true,mode:checkOnly?'check':'write',output:'任务拆分/全十章/presentation/bindings.json',assets:registeredFiles.size,scenes:Object.keys(bindings.scenes).length,nodes:Object.keys(bindings.nodes).length,pendingLocations:0}));
