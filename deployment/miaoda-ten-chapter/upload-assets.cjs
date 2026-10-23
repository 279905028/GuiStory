'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const appId = 'app_17gm4z6t27j';
const file = path.join(__dirname, 'uploaded-assets.json');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'assets/runtime-ten-chapter-manifest.json')));
const record = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file)) : { appId, assets: [] };
assert.equal(record.appId, appId);
const save = () => fs.writeFileSync(file, JSON.stringify(record, null, 2) + '\n');
// 首张封面已通过同一应用的 file-upload 成功上传，避免重复写入。
if (!record.assets.some(row => row.source === 'assets/ten-chapter/ui/cover-desktop.webp')) {
  const row = manifest.assets.find(row => row.path === 'assets/ten-chapter/ui/cover-desktop.webp');
  record.assets.push({ source: row.path, bytes: row.bytes, sha256: row.sha256, path: '/1879821599156391.webp', url: '/spark/app/app_17gm4z6t27j/runtime/api/v1/storage/object/bucket_aadk3maq6euds/1879821599156391.webp' });
  save();
}
for (const row of manifest.assets) {
  const content = fs.readFileSync(path.join(root, row.path));
  assert.equal(crypto.createHash('sha256').update(content).digest('hex'), row.sha256);
  const old = record.assets.find(item => item.source === row.path);
  if (old) { assert.equal(old.sha256, row.sha256); continue; }
  const result = JSON.parse(execFileSync('lark-cli', ['apps', '+file-upload', '--as', 'user', '--app-id', appId, '--file', './' + row.path], { cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024, timeout: 120000 }));
  assert.equal(result.ok, true);
  const data = result.data;
  assert.equal(data.size_bytes, row.bytes);
  assert(data.download_url.startsWith('/spark/app/' + appId + '/runtime/api/v1/storage/object/'));
  record.assets.push({ source: row.path, bytes: row.bytes, sha256: row.sha256, path: data.path, url: data.download_url });
  save();
  console.log(`已上传 ${record.assets.length}/${manifest.assets.length}：${path.basename(row.path)}`);
}
record.completedAt = new Date().toISOString();
save();
console.log('UPLOAD_PASS ' + record.assets.length);
