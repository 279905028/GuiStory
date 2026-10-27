'use strict';

// 此批次已冻结。只校验迁移后的原图和成图，不重编码、不改写 adoption。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const adoptionPath = 'assets/character-variants/wenwen-option-b-production-20261026/adoption.json';
const hash = data => crypto.createHash('sha256').update(data).digest('hex');

function checkBatch() {
  const { root, manifestPath, relativePath, resolvePath, readJSON } = require('../../../../scripts/art-paths.cjs');
  const adoptionFile = resolvePath(adoptionPath);
  const bytes = fs.readFileSync(adoptionFile);
  const migration = readJSON(manifestPath);
  const originalRecord = migration.files.find(row => row.from === adoptionPath);
  assert(originalRecord, '迁移清单缺少文文 B 采用记录');
  assert.equal(bytes.length, originalRecord.bytes, '冻结 adoption 字节数变化');
  assert.equal(hash(bytes), originalRecord.sha256, '冻结 adoption 指纹变化');
  const adoption = JSON.parse(bytes);
  assert.equal(adoption.status, 'adopted', '此入口只校验已经采用的冻结批次');
  assert.equal(adoption.assets.length, 33, '冻结批次应包含 33 张采用图');
  assert.equal(new Set(adoption.assets.map(row => row.id)).size, 33, '采用图 ID 重复');
  assert.deepEqual(adoption.pending, [], '冻结批次仍存在待生成项');
  const checked = [], checkedPaths = new Set();
  let sourceBytes = 0, deliveryBytes = 0;
  for (const asset of adoption.assets) {
    for (const kind of ['source', 'delivery']) {
      const recorded = asset[kind];
      assert(recorded && typeof recorded.path === 'string', '缺少文件记录：' + asset.id + '/' + kind);
      const file = resolvePath(recorded.path);
      const relative = path.relative(root, file).split(path.sep).join('/');
      assert(!checkedPaths.has(relative), '采用记录文件重复：' + relative);
      checkedPaths.add(relative);
      assert(fs.statSync(file).isFile(), '文件不存在：' + relative);
      const data = fs.readFileSync(file);
      assert.equal(data.length, recorded.bytes, '字节数变化：' + relative);
      assert.equal(hash(data), recorded.sha256, 'SHA-256 变化：' + relative);
      if (kind === 'source') sourceBytes += data.length;
      else deliveryBytes += data.length;
      checked.push({ id: asset.id, kind, recordedPath: recorded.path, path: relative, bytes: data.length });
    }
  }
  return {
    status: 'passed-read-only', adoption: relativePath(adoptionPath),
    checkedAssets: adoption.assets.length, checkedFiles: checked.length,
    sourceBytes, deliveryBytes, filesWritten: 0, pixelDecodePerformed: false,
    boundary: '校验文件存在、字节数及 SHA-256；没有重新解码像素、转换图片或进行浏览器验收。',
    files: checked
  };
}

function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--help') {
    console.log('用法：node ' + path.relative(process.cwd(), __filename) + ' --check\n只读校验冻结批次的 33 张原图和 33 张 WebP；不需要 sharp，不写入 adoption 或图片。\n新批次转换请使用 node scripts/convert-art-webp.cjs --help。');
    return;
  }
  assert(args.length === 1 && args[0] === '--check', '冻结批次仅支持 --check；无参数及旧 --partial 已停用。新图转换请使用 node scripts/convert-art-webp.cjs --help。');
  const { files, ...summary } = checkBatch();
  console.log(JSON.stringify(summary, null, 2));
}

module.exports = { checkBatch };
if (require.main === module) {
  try { main(); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
