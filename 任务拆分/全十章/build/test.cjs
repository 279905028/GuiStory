'use strict';

// E02 的隔离编译器回归。所有破坏样本只在内存中生成，不改样例、正式模块或玩家存档。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { loadProject, compileProject } = require('./compiler.cjs');
const { parseJSON } = require('./json.cjs');
const { validate } = require('../verify-contract.cjs');

const base = path.resolve(__dirname, '..');
const project = loadProject(path.join(base, 'samples/e02/manifest.json'));
const clone = value => JSON.parse(JSON.stringify(value));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const moduleOf = (p, id) => p.modules.find(m => m.moduleId === id);
const nodeOf = (p, id) => p.modules.find(m => Object.hasOwn(m.nodes, id)).nodes[id];
const mapOf = (p, id) => p.modules.flatMap(m => m.sourceMap).find(row => row.kind !== 'control' && row.nodeIds.includes(id));
const results = [];
const filesBefore = new Map(project.inputFiles.map(input => {
  const file = path.resolve(base, '../..', input.file);
  return [file, hash(fs.readFileSync(file))];
}));
const e01Report = path.join(base, '校验/E01/verification.json');
filesBefore.set(e01Report, hash(fs.readFileSync(e01Report)));

function run(name, kind, action) {
  try {
    const details = action() || {};
    results.push({ name, kind, status: 'passed', ...details });
  } catch (error) {
    results.push({ name, kind, status: 'failed', actualError: error.message, details: error.details || null });
  }
}

function reject(name, mutate, expected) {
  run(name, 'negative', () => {
    const candidate = clone(project);
    mutate(candidate);
    let thrown;
    try { compileProject(candidate); } catch (error) { thrown = error; }
    assert(thrown, '破坏样本被错误接受');
    if (expected) assert.match(thrown.message, expected, '虽被拒绝，但不是预期校验失败');
    return { actualError: thrown.message, details: thrown.details || null };
  });
}

function rejectJSON(name, text, expected) {
  run(name, 'negative-json', () => {
    let thrown;
    try { parseJSON(text, name); } catch (error) { thrown = error; }
    assert(thrown, '非法 JSON 被错误接受');
    if (expected) assert.match(thrown.message, expected);
    return { actualError: thrown.message };
  });
}

run('基线样例编译与输入不可变', 'positive', () => {
  const before = JSON.stringify(project);
  const result = compileProject(project);
  assert.equal(JSON.stringify(project), before);
  assert.equal(result.report.mode, 'sample');
  assert.equal(result.report.formalIntegration, false);
  assert.equal(result.story.version, 1);
  assert.deepEqual(result.story.initialFlags, { qiuMet: false, qiuForm: 'sphere' });
  assert.deepEqual(result.story.requiredCapabilities, project.contract.interface.requiredCapabilities);
  assert.equal(result.report.graph.coverage.reachableNodes, Object.keys(result.story.nodes).length);
  assert.equal(Object.keys(result.report.graph.witnesses.hiddenQualification).length, 4);
  assert(result.report.graph.coverage.reachedEvents.includes('tc_c02_common_qiu_met'));
  assert.deepEqual(result.report.graph.coverage.unreachableNodes, []);
  assert.deepEqual(result.report.graph.coverage.unreachableOptions, []);
  return { statistics: result.report.graph.statistics };
});

run('重复编译与重新加载输出确定一致', 'positive', () => {
  const first = compileProject(project);
  const second = compileProject(clone(project));
  const third = compileProject(loadProject(path.join(base, 'samples/e02/manifest.json')));
  assert.deepEqual(first, second);
  assert.deepEqual(first, third);
  return { outputSha256: hash(JSON.stringify(first)) };
});

run('E01 契约仅调用只读 validate', 'positive', () => {
  const before = JSON.stringify(project.contract);
  const result = validate(project.contract);
  assert.equal(JSON.stringify(project.contract), before);
  assert.equal(result.routeSections, 56);
  assert.equal(hash(fs.readFileSync(e01Report)), filesBefore.get(e01Report));
  return result;
});

run('严格 JSON 保留转义与合法标量', 'positive', () => {
  const text = '{"中文":"引号\\\"和斜线\\\\","n":-1.25e2,"values":[true,false,null],"nested":{"a":1}}';
  assert.deepEqual(parseJSON(text), JSON.parse(text));
});

run('登记的第六章孟遥回叙场景合法', 'positive', () => {
  const candidate = clone(project);
  const m = moduleOf(candidate, 'routes/mengyao');
  m.scenes.ts_c06_mengyao_flashback_test = {
    chapter: 6, title: '饭后各有一段路', bg: 'sample-bg', time: '19:20',
    chronology: { domain: 'story-day', mode: 'flashback', day: 30, clock: '19:20' },
    location: '饭店外', day: 30, dayLabel: '第30天'
  };
  const output = compileProject(candidate);
  assert.equal(output.story.scenes.ts_c06_mengyao_flashback_test.chronology.mode, 'flashback');
});

rejectJSON('JSON 根对象重复键', '{"nodes":{},"nodes":{}}', /重复 JSON 键/);
rejectJSON('JSON 深层节点重复键', '{"nodes":{"tc_c01_common_entry":{"id":"a","id":"b"}}}', /重复 JSON 键/);
rejectJSON('JSON 转义后同名键', '{"a":1,"\\u0061":2}', /重复 JSON 键/);
rejectJSON('JSON 原型污染键', '{"__proto__":{"polluted":true}}', /禁止原型键/);
rejectJSON('JSON 缺逗号', '{"a":1 "b":2}');
rejectJSON('JSON 尾随内容', '{"a":1} false', /多余内容/);
rejectJSON('JSON 对象尾随逗号', '{"a":1,}');
rejectJSON('JSON 非法数值', '{"a":NaN}');

reject('模块 schemaVersion 不一致', p => { p.modules[0].schemaVersion = 2; }, /schemaVersion/);
reject('模块 contractVersion 不一致', p => { p.modules[0].contractVersion = '2.0.0'; }, /contractVersion/);
reject('模块 contentRevision 不一致', p => { p.modules[0].contentRevision = 'other'; }, /contentRevision/);
reject('空模块清单', p => { p.manifest.modules = []; p.modules = []; }, /不能为空/);
reject('单个空模块', p => { p.modules[0].nodes = {}; }, /禁止空模块/);
reject('重复模块与节点', p => { p.modules.push(clone(p.modules[0])); p.manifest.modules.push('duplicate.json'); }, /重复模块/);
reject('伪造模块 owner', p => { moduleOf(p, 'routes/xiaoman').owner = 'E05'; }, /所有者/);
reject('未知 moduleId', p => { p.modules[0].moduleId = 'common/ch11'; }, /未知 moduleId/);
reject('节点字典键与 id 不同', p => { nodeOf(p, 'tc_c01_common_entry').id = 'tc_c01_common_other'; }, /键与node.id/);
reject('跨模块重复节点 ID', p => {
  moduleOf(p, 'routes/zhouzhi').nodes.tc_c03_xiaoman_entry = clone(nodeOf(p, 'tc_c03_xiaoman_entry'));
}, /越权节点|重复节点/);
reject('跨模块重复场景 ID', p => {
  const source = moduleOf(p, 'routes/xiaoman');
  const [id, scene] = Object.entries(source.scenes)[0];
  moduleOf(p, 'routes/zhouzhi').scenes[id] = clone(scene);
}, /越权场景|重复场景/);
reject('节点未知字段不能被静默忽略', p => { nodeOf(p, 'tc_c01_common_entry').requires = []; }, /未知字段/);
reject('节点使用其他模块场景', p => { nodeOf(p, 'tc_c01_common_entry').scene = Object.keys(moduleOf(p, 'common/ch02').scenes)[0]; }, /场景必须属于/);
reject('场景显示日序与 chronology 不一致', p => { Object.values(p.modules[0].scenes)[0].day = 2; }, / day/);
reject('场景日序超出本章', p => { const s = Object.values(p.modules[0].scenes)[0]; s.day = s.chronology.day = 99; s.dayLabel = '第99天'; }, /日序越界/);
reject('章末冒用路线时间地点', p => { moduleOf(p, 'common/ch01').scenes.ts_c01_common_end.location = '网吧'; }, /章末显示/);
reject('未登记路线回叙', p => { Object.values(moduleOf(p, 'routes/xiaoman').scenes)[0].chronology.mode = 'flashback'; }, /未经契约声明/);

reject('同负责人跨路线读取状态', p => {
  const m = moduleOf(p, 'routes/xiaoman'), old = m.nodes.tc_c03_xiaoman_entry;
  m.nodes[old.id] = { id: old.id, type: 'gate', scene: old.scene, cases: [{flag:'zhouzhiOuting', value:'river', next:old.next}], default:old.next };
  m.sourceMap.forEach(row => { if (row.nodeIds.includes(old.id)) row.kind = 'control'; });
}, /跨路线读取/);
reject('共通负责人越权读取球球形态', p => { nodeOf(p, 'tc_c02_common_reply_record_gate').cases[0] = {flag:'qiuForm', value:'sphere', next:'tc_c02_common_rhythm_reply_recorded'}; }, /越权读取/);
reject('未知状态字段', p => { nodeOf(p, 'tc_c02_common_reply_record_gate').cases[0].flag = 'affection'; }, /状态或枚举值非法/);
reject('错误状态枚举', p => { nodeOf(p, 'tc_c02_common_reply_record_gate').cases[0].value = 'wrong'; }, /状态或枚举值非法/);
reject('选择不能写形态', p => { nodeOf(p, 'tc_c01_common_rhythm_record_choice').flag = 'qiuForm'; }, /不是契约选择/);
reject('选择顺序不能互换', p => { nodeOf(p, 'tc_c01_common_rhythm_record_choice').choices.reverse(); }, /选项顺序/);
reject('选择标签不得编造', p => { nodeOf(p, 'tc_c01_common_rhythm_record_choice').choices[0].label = '新文案'; }, /选项顺序/);
reject('隐藏选项不得删除资格', p => { nodeOf(p, 'tc_c03_common_route_choice').choices.at(-1).requires = []; }, /条件/);
reject('第八天回应不能添加隐藏前提', p => { nodeOf(p, 'tc_c02_common_rhythm_reply_choice').choices[0].requires = [{flag:'qiuSignal',value:'record'}]; }, /条件/);
reject('选择提示必须为字符串', p => { nodeOf(p, 'tc_c01_common_rhythm_record_choice').text = null; }, /text必须为字符串/);
reject('非登记行自动赋值', p => { nodeOf(p, 'tc_c01_common_entry').onEnter = {requires:[],setFlags:{qiuMet:true}}; }, /未经登记的自动事件/);
reject('自动事件前提缺一条', p => { nodeOf(p, 'tc_c02_common_qiu_met').onEnter.requires.pop(); }, /自动事件必须原样匹配/);
reject('自动事件前提误放行顶层', p => { const n = nodeOf(p, 'tc_c02_common_qiu_met'); n.requires = n.onEnter.requires; delete n.onEnter.requires; }, /未知字段|自动事件/);
reject('自动事件不得增加关系写入', p => { nodeOf(p, 'tc_c02_common_qiu_met').onEnter.setFlags.piaoRelationship = 'dating'; }, /自动事件必须原样匹配/);
reject('自动事件不得提前日期', p => { nodeOf(p, 'tc_c02_common_qiu_met').scene = 'ts_c02_common_rhythm'; }, /自动事件日时/);
reject('自动事件来源不得提前到另一行', p => { const row = mapOf(p, 'tc_c02_common_qiu_met'); row.startLine = row.endLine = 269; }, /来源|锚点/);
reject('合法图不得绕过事件前提', p => { nodeOf(p, 'tc_c02_common_hidden_reply_gate').default = 'tc_c02_common_qiu_met'; }, /onEnter.requires/);

reject('普通 gate 不得 default:null', p => { nodeOf(p, 'tc_c02_common_reply_record_gate').default = null; }, /default:null/);
reject('穷尽 gate 未覆盖可达合法值', p => { const n = nodeOf(p, 'tc_c02_common_reply_record_gate'); n.exhaustive = true; n.default = null; }, /穷尽门禁/);
reject('gate 相同条件重复', p => { const n = nodeOf(p, 'tc_c02_common_reply_record_gate'); n.cases.push(clone(n.cases[0])); }, /gate条件重复/);
reject('line.next 悬空', p => { nodeOf(p, 'tc_c01_common_entry').next = 'tc_c01_common_missing'; }, /悬空引用/);
reject('option.next 悬空', p => { nodeOf(p, 'tc_c01_common_rhythm_record_choice').choices[0].next = 'tc_c01_common_missing'; }, /悬空引用/);
reject('gate.case.next 悬空', p => { nodeOf(p, 'tc_c02_common_reply_record_gate').cases[0].next = 'tc_c02_common_missing'; }, /悬空引用/);
reject('gate.default 悬空', p => { nodeOf(p, 'tc_c02_common_reply_record_gate').default = 'tc_c02_common_missing'; }, /悬空引用/);
reject('漏报 imports', p => { moduleOf(p, 'common/ch01').imports = []; }, /imports必须精确/);
reject('imports 额外列本地节点', p => { moduleOf(p, 'common/ch01').imports.push('tc_c01_common_entry'); }, /imports必须精确/);
reject('imports 重复', p => { const m = moduleOf(p, 'common/ch01'); m.imports.push(m.imports[0]); }, /imports重复/);
reject('公开入口未导出', p => { delete moduleOf(p, 'common/ch01').exports.tc_c01_common_entry; }, /公开接口未导出/);
reject('跨模块引用非导出节点', p => { delete moduleOf(p, 'common/ch02').exports.tc_c02_common_entry; }, /引用未导出的节点/);
reject('导出别名不是真实同名节点', p => { moduleOf(p, 'common/ch01').exports.tc_c01_common_alias = 'tc_c01_common_entry'; }, /exports必须指向同名/);
reject('同章路线跨线跳转', p => { nodeOf(p, 'tc_c03_xiaoman_entry').next = 'tc_c03_zhouzhi_entry'; }, /路线越界跳转/);
reject('路线直接越章', p => { nodeOf(p, 'tc_c03_xiaoman_entry').next = 'tc_c04_common_entry'; }, /路线越界跳转/);
reject('共通非章末越章', p => { nodeOf(p, 'tc_c01_common_entry').next = 'tc_c02_common_entry'; }, /非法跨章跳转/);
reject('章末跳到错误章节', p => { nodeOf(p, 'tc_c01_common_exit').next = 'tc_c03_common_entry'; }, /下一章入口/);
reject('章末保留旧预告标题', p => { nodeOf(p, 'tc_c01_common_exit').nextChapter = '旧三章预告'; }, /下一章标题/);
reject('静态自环', p => { nodeOf(p, 'tc_c01_common_entry').next = 'tc_c01_common_entry'; }, /静态图存在环/);
reject('存在不可达正文节点', p => {
  const m = moduleOf(p, 'common/ch01');
  const n = clone(m.nodes.tc_c01_common_entry); n.id = 'tc_c01_common_unreachable'; n.next = 'tc_c01_common_exit'; m.nodes[n.id] = n;
  m.sourceMap.push({file:m.sourceMap[0].file,startLine:89,endLine:89,nodeIds:[n.id],kind:'narration'});
}, /不可达节点/);
reject('路线分流值与真实路线入口不符', p => {
  const options = nodeOf(p, 'tc_c03_common_route_choice').choices;
  [options[0].next,options[1].next] = [options[1].next,options[0].next];
}, /路线串线/);

reject('来源不在正文基线', p => { p.modules[0].sourceMap[0].file = 'story.js'; }, /来源不在基线/);
reject('来源行号越界', p => { p.modules[0].sourceMap[0].startLine = 0; }, /来源范围非法/);
reject('来源反向行范围', p => { p.modules[0].sourceMap[0].endLine = p.modules[0].sourceMap[0].startLine - 1; }, /来源范围非法/);
reject('来源映射到不存在节点', p => { p.modules[0].sourceMap[0].nodeIds = ['tc_c01_common_missing']; }, /来源指向非本章节点/);
reject('来源跨章认领', p => { p.modules[0].sourceMap[0].file = p.contract.baseline.sourceManifest[1].file; }, /来源章节越权/);
reject('同负责人来源跨路线认领', p => {
  const x = moduleOf(p, 'routes/xiaoman').sourceMap[0], z = moduleOf(p, 'routes/zhouzhi').sourceMap[0];
  x.startLine = z.startLine; x.endLine = z.endLine;
}, /来源段越权/);
reject('正文节点缺少来源', p => { p.modules[0].sourceMap = p.modules[0].sourceMap.filter(row => !row.nodeIds.includes('tc_c01_common_entry')); }, /缺少来源映射/);
reject('同段正文重复映射到不同播放节点', p => {
  const m = moduleOf(p, 'common/ch01'), row = clone(m.sourceMap[0]);
  row.nodeIds = ['tc_c01_common_rhythm_record']; m.sourceMap.push(row);
}, /重复.*来源|来源.*重复|重复.*正文|正文.*重复/);
reject('排除项不允许任意理由', p => { p.modules[0].exclusions.push({file:p.modules[0].sourceMap[0].file,startLine:1,endLine:1,reason:'skip-story'}); }, /exclusion.reason/);
reject('资产语义请求越章', p => { p.modules[0].assetRequests.push('e01-art-ch10'); }, /越权资产语义/);
reject('正文缺齐不能伪装完整候选', p => { p.manifest.mode = 'candidate'; delete p.manifest.sample; }, /line.next缺失|完整候选/);

reject('绑定不得覆盖正文 text', p => { p.bindings[0].nodes.tc_c01_common_entry.text = '替换正文'; }, /未知字段 text/);
reject('绑定不得改变 next', p => { p.bindings[0].nodes.tc_c01_common_entry.next = 'tc_c01_common_exit'; }, /未知字段 next/);
reject('绑定节点不存在', p => { p.bindings[0].nodes.tc_c01_common_missing = {bg:'sample-bg'}; }, /绑定目标不存在/);
reject('同字段重复绑定', p => { const b = clone(p.bindings[0]); b.backgrounds = {}; p.bindings.push(b); p.manifest.bindings.push('duplicate-binding.json'); }, /重复演出覆盖/);
reject('背景绑定缺失', p => { p.bindings[0].backgrounds = {}; }, /缺少背景绑定/);
reject('绑定资源重名', p => { const b = clone(p.bindings[0]); b.nodes = {}; p.bindings.push(b); p.manifest.bindings.push('duplicate-resource.json'); }, /重复资源绑定/);
reject('角色演出引用缺失', p => { p.bindings[0].nodes.tc_c01_common_entry.character = 'xiaoman'; }, /角色绑定悬空/);
reject('样例起点不存在', p => { p.manifest.sample.start = 'tc_c01_common_missing'; }, /入口不存在/);
reject('样例停止边界不是空后继行', p => { p.manifest.sample.stops = ['tc_c01_common_entry']; }, /line.next缺失|样例截点/);

run('全部测试后输入与 E01 历史报告指纹不变', 'protection', () => {
  for (const [file, before] of filesBefore) assert.equal(hash(fs.readFileSync(file)), before, '只读文件发生变化 ' + file);
  return { filesChecked: filesBefore.size };
});

const failures = results.filter(test => test.status !== 'passed');
const report = {
  status: failures.length ? 'failed' : 'passed',
  scope: 'E02 in-memory compiler regression; isolated sample only',
  runAt: new Date().toISOString(),
  contractVersion: project.contract.contractVersion,
  contentRevision: project.contract.contentRevision,
  tests: results.length,
  passed: results.length - failures.length,
  failed: failures.length,
  negativeTests: results.filter(test => test.kind.startsWith('negative')).length,
  inputFiles: project.inputFiles,
  cases: results,
  notValidated: ['正式十章正文', 'E08 播放器与存读档', '浏览器与设备', '资源采用', '发布']
};
const output = path.join(base, '校验/E02/tests.json');
fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ status: report.status, tests: report.tests, passed: report.passed, failed: report.failed, negativeTests: report.negativeTests, failures: failures.map(test => ({name:test.name,error:test.actualError})), output:path.relative(path.resolve(base,'../..'),output) }, null, 2));
if (failures.length) process.exitCode = 1;
