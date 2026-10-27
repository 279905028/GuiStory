'use strict';

// 保留历史记录原字节，通过独立映射定位整理后的资源。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const manifestPath = 'assets/manifests/path-migration.json';
const migration = JSON.parse(fs.readFileSync(path.join(root, manifestPath), 'utf8'));
assert.equal(migration.schemaVersion, 1);
const moves = new Map();
const targets = new Set();
function checked(file) {
  assert(typeof file === 'string' && file && !path.isAbsolute(file), '需要项目内相对路径');
  const full = path.resolve(root, file);
  assert(full.startsWith(root + path.sep), '路径越出工程：' + file);
  return file;
}
for (const row of migration.files) {
  checked(row.from); checked(row.to);
  assert(!moves.has(row.from) && !targets.has(row.to), '迁移路径重复');
  moves.set(row.from, row.to); targets.add(row.to);
}
function relativePath(file) { return moves.get(checked(file)) || file; }
function resolvePath(file) { return path.resolve(root, relativePath(file)); }
function rewritePaths(value) {
  if (typeof value === 'string') return moves.get(value) || value;
  if (Array.isArray(value)) return value.map(rewritePaths);
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, child]) => [key, rewritePaths(child)]));
  return value;
}
function readJSON(file) { return JSON.parse(fs.readFileSync(resolvePath(file), 'utf8')); }
module.exports = { root, manifestPath, relativePath, resolvePath, rewritePaths, readJSON };
if (require.main === module) {
  const file = process.argv[2];
  if (!file || process.argv.length !== 3) {
    console.error('用法：node scripts/art-paths.cjs <历史项目相对路径>');
    process.exitCode = 1;
  } else {
    const retired = migration.deleted.find(row => row.path === file);
    console.log(JSON.stringify(retired ? { retired: true, path: file, source: retired.retained_source } : { path: relativePath(file), exists: fs.existsSync(resolvePath(file)) }, null, 2));
  }
}
