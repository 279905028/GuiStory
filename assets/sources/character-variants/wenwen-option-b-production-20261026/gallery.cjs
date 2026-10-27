'use strict';

// 历史图库与 QA 拼图保持冻结；本入口只检查图片并给出统一美术索引位置。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');

function main() {
  const args = process.argv.slice(2);
  if (args.length === 1 && args[0] === '--help') {
    console.log('用法：node ' + path.relative(process.cwd(), __filename) + ' [--check]\n只读校验文文 B 批次，并返回 assets/index.html 统一预览入口。\n不会生成或覆盖历史图库、adoption 和 QA 拼图。\n更新统一索引请从工程根目录运行 node scripts/build-art-index.cjs。');
    return;
  }
  assert(args.length === 0 || (args.length === 1 && args[0] === '--check'), '仅支持 --check 或 --help；本入口不再生成历史图库和拼图');
  const { root } = require('../../../../scripts/art-paths.cjs');
  const { checkBatch } = require('./process-results.cjs');
  const result = checkBatch();
  const preview = 'assets/index.html', index = 'assets/manifests/current-art.json';
  console.log(JSON.stringify({
    status: result.status, checkedAssets: result.checkedAssets, checkedFiles: result.checkedFiles,
    filesWritten: 0, preview: path.join(root, preview), previewExists: fs.existsSync(path.join(root, preview)),
    index: path.join(root, index), indexExists: fs.existsSync(path.join(root, index)),
    rebuildCommand: 'node scripts/build-art-index.cjs',
    boundary: result.boundary + '历史图库与 QA 拼图未改动。'
  }, null, 2));
}

try { main(); }
catch (error) { console.error(error.message); process.exitCode = 1; }
