'use strict';
// 正式构建的只读与拒绝路径测试。只写本脚本旁的 build-tests.json。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '../../../..');
const formal = require('../../build/formal.cjs');
const clone = value => JSON.parse(JSON.stringify(value));
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const read = file => fs.readFileSync(path.join(root, file));
const adoption = JSON.parse(read('assets/ten-chapter/a06-adoption.json'));
const watched = [...new Set([
  'story.js', 'assets/runtime-v0.4-manifest.json', 'assets/runtime-ten-chapter-manifest.json',
  ...adoption.assets.map(asset => asset.file),
  ...adoption.inputFingerprints.map(row => row.path || row.file)
])].sort();
function fingerprints() {
  return watched.map(file => {
    const full = path.join(root, file);
    return { path: file, existed: fs.existsSync(full), sha256: fs.existsSync(full) ? hash(read(file)) : null };
  });
}
const before = fingerprints();
const results = [];
function test(name, fn) {
  try { fn(); results.push({ name, status: 'passed' }); }
  catch (error) { results.push({ name, status: 'failed', error: error.message }); }
}
function rejectsWithoutWriting(prepared, pattern) {
  // 即使以后写入层的校验顺序回归，这两个反例也不能触及正式产物。
  const methods = ['mkdirSync', 'openSync', 'writeFileSync', 'renameSync', 'rmSync', 'unlinkSync'];
  const originals = Object.fromEntries(methods.map(method => [method, fs[method]]));
  try {
    for (const method of methods) fs[method] = () => { throw new Error('拒绝检查发生文件写入：' + method); };
    assert.throws(() => formal.writeFormal(prepared), pattern);
  } finally {
    for (const method of methods) fs[method] = originals[method];
  }
}

let first;
try {
  first = formal.prepareFormal();
  const second = formal.prepareFormal();
  test('相同正式输入两次prepare内容指纹一致', () => assert.equal(first.contentHash, second.contentHash));
  test('四份准备产物逐字一致', () => assert.deepEqual(first.files, second.files));
  test('正式版本含完整17模块138采用图13终结', () => {
    assert.equal(first.story.release, 'ten-chapter');
    assert.equal(first.report.moduleCount, 17);
    assert.equal(first.runtimeManifest.registeredAssetCount, 138);
    assert.equal(first.runtimeManifest.terminalCount, 13);
  });
  test('完整静态图736终态无边界截停', () => {
    assert.equal(first.report.graph.statistics.terminalStates, 736);
    assert.equal(first.report.graph.statistics.stoppedStates, 0);
  });
  test('绑定生成器与决定/映射进入来源指纹', () => {
    assert(first.report.builderFiles.some(row => row.path.endsWith('/presentation/prepare-bindings.cjs')));
    assert(first.report.inputFiles.some(row => row.path.endsWith('/presentation/decisions.json')));
    assert(first.report.inputFiles.some(row => row.path.endsWith('/presentation/integration-metadata.json')));
  });
  test('程序中性底色有独立非位图登记', () => {
    assert(first.runtimeManifest.proceduralBackgrounds.length);
    assert(first.runtimeManifest.proceduralBackgrounds.every(item => item.value === 'none' && !item.bitmap));
  });
  test('占位背景被拒绝', () => {
    const story = clone(first.story);
    story.backgrounds[Object.keys(story.backgrounds)[0]] = 'sample://background';
    assert.throws(() => formal.validateAssets(story, clone(adoption)), /未引用A06/);
  });
  test('未采用旧图被拒绝', () => {
    const story = clone(first.story);
    story.characters.xiaoman.image = 'assets/not-adopted.webp';
    assert.throws(() => formal.validateAssets(story, clone(adoption)), /未引用A06/);
  });
  test('采用资源SHA不符被拒绝', () => {
    const changed = clone(adoption);
    changed.assets[0].sha256 = '0'.repeat(64);
    assert.throws(() => formal.validateAssets(clone(first.story), changed), /指纹变化/);
  });
  test('采用版本不符被拒绝', () => {
    const changed = clone(adoption);
    changed.contentRevision = 'different';
    assert.throws(() => formal.validateAssets(clone(first.story), changed), /版本/);
  });
  test('全量注册缺一张背景被拒绝', () => {
    const story = clone(first.story);
    const key = Object.keys(story.backgrounds).find(id => story.backgrounds[id] !== 'none');
    delete story.backgrounds[key];
    assert.throws(() => formal.validateAssets(story, clone(adoption)), /尚未完整注册/);
  });
  test('人形头像缺失被启动检查拒绝', () => {
    const story = clone(first.story);
    delete story.characters.huangqiuqiu.forms.human.avatarImage;
    assert.throws(() => formal.validateRuntime(story), /资料不完整/);
  });
  test('prepare后篡改产物在写入前被拒绝', () => {
    const changed = { ...first, files: { ...first.files, 'story.js': first.files['story.js'] + '\n' } };
    rejectsWithoutWriting(changed, /准备后的输出内容已变化/);
  });
  test('输出集合不完整在写入前被拒绝', () => {
    const changed = { ...first, files: { 'story.js': first.files['story.js'] } };
    rejectsWithoutWriting(changed, /输出集合不匹配/);
  });
} catch (error) {
  results.push({ name: '正式构建准备', status: 'failed', error: error.stack || error.message });
}
test('只读检查前后正式产物、采用资源与来源文件未变化', () => assert.deepEqual(fingerprints(), before));
const failed = results.filter(result => result.status === 'failed');
const report = {
  status: failed.length === 0 ? 'passed' : 'failed', task: 'E09',
  scope: '正式构建只读准备、资源拒绝路径、确定性与文件保护；不执行正式写入',
  runAt: new Date().toISOString(),
  passed: results.length - failed.length, failed: failed.length, results,
  contentHash: first?.contentHash || null,
  formalWriteExecuted: false, playerStorageAccessed: false,
  protectedFiles: before,
  runtimeFiles: first?.report.runtimeFiles || [],
  builderFiles: first?.report.builderFiles || [],
  inputFiles: first?.report.inputFiles || [],
  testFile: { path: path.relative(root, __filename).split(path.sep).join('/'), sha256: hash(fs.readFileSync(__filename)) },
  notValidated: ['正式写入/快照/回滚的实际执行', 'E10浏览器、设备、声音及真人阅读', '公网发布']
};
fs.writeFileSync(path.join(__dirname, 'build-tests.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ status: report.status, passed: report.passed, failed: report.failed, protectedFiles: before.length, contentHash: report.contentHash, formalWriteExecuted: false }, null, 2));
if (failed.length) process.exitCode = 1;
