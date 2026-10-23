'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const hash = data => crypto.createHash('sha256').update(data).digest('hex');

function filesIn(root, relative = '') {
  const files = [];
  for (const entry of fs.readdirSync(path.join(root, relative), { withFileTypes: true })) {
    const name = relative ? relative + '/' + entry.name : entry.name;
    assert(!entry.isSymbolicLink(), '包内不允许软链接：' + name);
    if (entry.isDirectory()) files.push(...filesIn(root, name));
    else if (entry.isFile()) files.push(name);
    else throw Error('包内不是普通文件：' + name);
  }
  return files.sort();
}

function verify(root = path.resolve(__dirname, '..')) {
  root = fs.realpathSync(root);
  const manifest = JSON.parse(fs.readFileSync(path.join(root, 'package-manifest.json')));
  assert.equal(manifest.schemaVersion, 1);
  assert.equal(manifest.task, 'E11');
  const names = manifest.files.map(row => row.path);
  assert.equal(new Set(names).size, names.length, '清单有重复路径');
  for (const row of manifest.files) {
    assert(typeof row.path === 'string' && row.path.length > 0 && !row.path.includes('\\') && !row.path.split('/').some(p => !p || p === '.' || p === '..'), '非法包路径');
    const file = path.resolve(root, row.path);
    assert(file.startsWith(root + path.sep), '包路径越界');
    assert(fs.realpathSync(file).startsWith(root + path.sep), '文件指向包外');
    const bytes = fs.readFileSync(file);
    assert.equal(bytes.length, row.bytes, '文件大小不符：' + row.path);
    assert.equal(hash(bytes), row.sha256, '文件指纹不符：' + row.path);
  }
  // Finder会自行写入这些元数据；它们从不被游戏服务器提供。
  const actual = filesIn(root).filter(f => f !== 'package-manifest.json' && !f.split('/').some(p => p === '.DS_Store' || p.startsWith('._')));
  assert.deepEqual(actual, names.slice().sort(), '包内有缺失或未登记文件');
  const contentHash = hash(JSON.stringify(manifest.files));
  assert.equal(contentHash, manifest.contentSha256, '总清单指纹不符');
  const runtime = JSON.parse(fs.readFileSync(path.join(root, 'game/assets/runtime-ten-chapter-manifest.json')));
  for (const row of [runtime.story, ...runtime.runtimeFiles, ...runtime.assets]) {
    const item = manifest.files.find(f => f.path === 'game/' + row.path);
    assert(item && item.sha256 === row.sha256 && item.bytes === row.bytes, '正式运行清单不一致：' + row.path);
  }
  assert.equal(runtime.assets.length, 138);
  assert.equal(runtime.contentRevision, manifest.contentRevision);
  assert.equal(runtime.story.sha256, manifest.storySha256);
  for (const row of [...runtime.inputFiles, ...runtime.builderFiles]) {
    const item = manifest.files.find(f => f.path === 'materials/source/' + row.path);
    assert(item && item.sha256 === row.sha256 && item.bytes === row.bytes, '正式来源清单不一致：' + row.path);
  }
  const provenance = JSON.parse(fs.readFileSync(path.join(root, 'materials/provenance.json')));
  for (const row of provenance.origins) {
    const item = manifest.files.find(f => f.path === row.packaged);
    assert(item && item.sha256 === row.sha256 && item.bytes === row.bytes, '来源映射不一致：' + row.packaged);
  }
  const e10 = JSON.parse(fs.readFileSync(path.join(root, 'materials/e10/report.json')));
  assert.equal(e10.storySha256, runtime.story.sha256);
  for (const row of e10.evidenceFingerprints) {
    const item = manifest.files.find(f => f.path === 'materials/e10/' + row.file.slice('qa/ten-chapter/'.length));
    assert(item && item.sha256 === row.sha256, 'E10证据副本不一致：' + row.file);
  }
  return { passed: true, files: manifest.files.length, registeredAssets: runtime.assets.length, contentSha256: contentHash, storySha256: runtime.story.sha256 };
}

module.exports = { verify, filesIn, hash };
if (require.main === module) {
  try { console.log(JSON.stringify(verify(process.argv[2]), null, 2)); }
  catch (error) { console.error('交付包校验失败：' + error.message); process.exitCode = 1; }
}
