'use strict';
// 只处理显式指定的新批次；不扫描整个 assets，不覆盖既有图片或清单。
// --help / --check 不加载 sharp，也不写文件。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const sourcesRoot = path.join(root, 'assets/sources');
const migrationFile = path.join(root, 'assets/manifests/path-migration.json');
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const relative = file => path.relative(root, file).split(path.sep).join('/');
const inside = (parent, child) => child.startsWith(parent + path.sep);

function help() {
  console.log(`用法：
  node scripts/convert-art-webp.cjs --input assets/sources/<输入批次> --output assets/sources/<新输出批次> --manifest assets/sources/<新输出批次>/webp-manifest.json [--check]

三个路径参数均必填，也可使用工程内的绝对路径。
  --input     assets/sources 下的具体目录；不能选择整个 sources。
  --output    assets/sources 下尚不存在的新目录；不能与输入目录互相包含。
  --manifest  新输出目录内的 JSON 清单；不能使用已有清单或运行/迁移清单。
  --check     只检查路径、退役记录及待转换文件，不加载 sharp、不生成文件。
  --help      显示此说明。

实际转换需要当前 Node.js 环境提供 sharp。必须先有 assets/manifests/path-migration.json。
已批准退役的 WebP 对应原图拒绝再次转换；参考照片与 qa-* 验收拼图跳过。
原图和历史文件始终保留，新 WebP 只写入指定的新批次；本工具不修改运行采用清单。
转换中途失败会保留新输出目录供检查，不允许用相同输出目录覆盖重试。`);
}

function parseArgs(argv) {
  const result = {};
  for (let i = 0; i < argv.length; i++) {
    const key = argv[i];
    assert(['--input', '--output', '--manifest', '--check', '--help'].includes(key), '未知参数：' + key);
    assert(!(key in result), '重复参数：' + key);
    if (key === '--check' || key === '--help') result[key] = true;
    else {
      const value = argv[++i];
      assert(value && !value.startsWith('--'), key + ' 缺少路径');
      result[key] = path.resolve(root, value);
    }
  }
  return result;
}

function noSymlinks(file) {
  assert(file === root || inside(root, file), '路径必须位于本工程：' + file);
  let current = root;
  for (const segment of path.relative(root, file).split(path.sep).filter(Boolean)) {
    current = path.join(current, segment);
    try { assert(!fs.lstatSync(current).isSymbolicLink(), '拒绝软链接路径：' + current); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
}

function scan(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.')) return [];
    const file = path.join(directory, entry.name);
    assert(!entry.isSymbolicLink(), '拒绝输入批次中的软链接：' + file);
    return entry.isDirectory() ? scan(file) : entry.isFile() && /\.(png|jpe?g)$/i.test(file) ? [file] : [];
  }).sort();
}
function exclusion(file) {
  const name = path.basename(file), rel = relative(file);
  if (/(?:^|\/)(?:references|scene-references)(?:\/|$)/.test(rel) || /(?:^|[-_])reference-photo\./i.test(name)) return '原始参考照片';
  if (/^qa[-_]/i.test(name)) return '历史验收拼图';
  return null;
}

function plan(args) {
  for (const key of ['--input', '--output', '--manifest']) assert(args[key], '必须显式指定 ' + key + '；使用 --help 查看用法');
  const input = args['--input'], output = args['--output'], manifestFile = args['--manifest'];
  assert(inside(sourcesRoot, input), '输入必须是 assets/sources 下的具体批次目录');
  assert(inside(sourcesRoot, output), '输出必须位于 assets/sources 下的新批次目录');
  assert(input !== output && !inside(input, output) && !inside(output, input), '输入与输出目录不能重合或互相包含');
  assert(inside(output, manifestFile) && /\.json$/i.test(manifestFile), '独立 JSON 清单必须位于新输出目录内');
  for (const file of [input, output, manifestFile, migrationFile]) noSymlinks(file);
  assert(fs.statSync(input).isDirectory(), '输入不是目录');
  assert(fs.statSync(path.dirname(output)).isDirectory(), '输出的父目录必须已存在');
  assert(!fs.existsSync(output), '拒绝覆盖已有输出目录：' + relative(output));
  assert(!fs.existsSync(manifestFile), '拒绝覆盖已有清单：' + relative(manifestFile));
  assert(fs.existsSync(migrationFile), '缺少退役与迁移清单，拒绝转换：' + relative(migrationFile));
  const migration = JSON.parse(fs.readFileSync(migrationFile, 'utf8'));
  assert(Array.isArray(migration.files) && Array.isArray(migration.deleted), '迁移清单必须包含 files 和 deleted 数组');
  const moves = new Map(migration.files.map(row => [row.from, row.to]));
  const previousPaths = new Map(migration.files.map(row => [row.to, row.from]));
  const retiredPaths = new Set(), retiredStems = new Set(), retiredSourceHashes = new Set();
  for (const row of migration.deleted) {
    if (!/\.webp$/i.test(row.path || '')) continue;
    retiredStems.add(row.path.replace(/\.webp$/i, '').toLowerCase());
    const retained = Array.isArray(row.retained_source) ? row.retained_source : [row.retained_source];
    for (const entry of retained) {
      const oldPath = typeof entry === 'string' ? entry : entry?.path;
      if (!oldPath) continue;
      const sourcePath = moves.get(oldPath) || oldPath;
      retiredPaths.add(sourcePath);
      retiredPaths.add(oldPath);
      const absolute = path.resolve(root, sourcePath);
      assert(inside(root, absolute), '退役记录包含工程外路径');
      noSymlinks(absolute);
      if (fs.existsSync(absolute) && fs.statSync(absolute).isFile()) retiredSourceHashes.add(hash(fs.readFileSync(absolute)));
    }
  }
  const targets = [], excluded = [], rejected = [], seen = new Set();
  for (const file of scan(input)) {
    const rel = relative(file), oldPath = previousPaths.get(rel) || rel;
    const oldStem = oldPath.replace(/\.(png|jpe?g)$/i, '').toLowerCase();
    if (retiredPaths.has(rel) || retiredPaths.has(oldPath) || retiredStems.has(oldStem) || retiredSourceHashes.has(hash(fs.readFileSync(file)))) {
      rejected.push(rel);
      continue;
    }
    const reason = exclusion(file);
    if (reason) { excluded.push({ path: rel, reason }); continue; }
    const target = path.join(output, path.relative(input, file).replace(/\.(png|jpe?g)$/i, '.webp'));
    const key = target.normalize('NFD').toLowerCase();
    assert(!seen.has(key), '存在同名 PNG/JPEG 或大小写冲突，需人工选择目标名：' + relative(target));
    seen.add(key);
    targets.push({ file, output: target, sourceSha256: hash(fs.readFileSync(file)) });
  }
  assert(rejected.length === 0, '拒绝重新生成已批准退役的 WebP；请选择不含这些原件的批次：\n' + rejected.join('\n'));
  assert(targets.length > 0, '批次中没有可转换的 PNG/JPEG');
  return { input, output, manifestFile, targets, excluded, migrationSha256: hash(fs.readFileSync(migrationFile)) };
}

async function convert(file, output, sourceSha256, sharp) {
  const source = fs.readFileSync(file), meta = await sharp(source).metadata();
  assert.equal(hash(source), sourceSha256, '检查后原图发生变化，已停止：' + file);
  assert((meta.pages || 1) === 1, '动图需要单独审核：' + file);
  assert(meta.width <= 16383 && meta.height <= 16383, '超出 WebP 尺寸限制：' + file);
  assert.equal(meta.depth, 'uchar', '高位深原图需要单独审核：' + file);
  const encoded = await sharp(source).keepMetadata().webp({ lossless: true, effort: 6 }).toBuffer();
  const actual = await sharp(encoded).metadata();
  assert.equal(actual.format, 'webp');
  assert.equal(actual.width, meta.width);
  assert.equal(actual.height, meta.height);
  assert.equal(actual.hasAlpha, meta.hasAlpha);
  const original = await sharp(source).ensureAlpha().raw().toBuffer();
  const decoded = await sharp(encoded).ensureAlpha().raw().toBuffer();
  assert.equal(original.length, decoded.length);
  let transparentRgbDifferences = 0;
  for (let i = 0; i < original.length; i += 4) {
    assert.equal(decoded[i + 3], original[i + 3], '透明通道变化：' + file);
    for (let channel = 0; channel < 3; channel++) {
      if (original[i + channel] === decoded[i + channel]) continue;
      assert.equal(original[i + 3], 0, '可见像素变化：' + file);
      transparentRgbDifferences++;
    }
  }
  noSymlinks(output);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, encoded, { flag: 'wx' });
  return {
    source: { path: relative(file), bytes: source.length, sha256: hash(source) },
    webp: { path: relative(output), bytes: encoded.length, sha256: hash(encoded),
      width: actual.width, height: actual.height, hasAlpha: actual.hasAlpha },
    validation: { dimensionsEqual: true, visiblePixelsEqual: true, alphaEqual: true,
      transparentRgbDifferences, note: '仅完全透明像素下不可见 RGB 允许编码器归零；所有 alpha 和可见 RGB 逐值一致。' }
  };
}
async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (args['--help']) { help(); return; }
  const batch = plan(args), { input, output, manifestFile, targets, excluded } = batch;
  if (args['--check']) {
    console.log(JSON.stringify({ status: 'checked-no-files-written', input: relative(input), output: relative(output),
      manifest: relative(manifestFile), conversionCount: targets.length, excluded,
      files: targets.map(row => ({ source: relative(row.file), webp: relative(row.output) })) }, null, 2));
    return;
  }
  const sharp = require('sharp');
  assert.equal(hash(fs.readFileSync(migrationFile)), batch.migrationSha256, '检查后退役清单发生变化，已停止');
  noSymlinks(output);
  fs.mkdirSync(output); // 不使用 recursive，已有目录或并发占用会直接失败。
  const assets = [];
  for (const row of targets) {
    assert.equal(hash(fs.readFileSync(migrationFile)), batch.migrationSha256, '转换期间退役清单发生变化，已停止');
    assets.push(await convert(row.file, row.output, row.sourceSha256, sharp));
    if (assets.length % 20 === 0) console.log(`已转换并验证 ${assets.length}/${targets.length}`);
  }
  assets.sort((a, b) => a.source.path.localeCompare(b.source.path, 'en'));
  const sourceBytes = assets.reduce((sum, item) => sum + item.source.bytes, 0);
  const webpBytes = assets.reduce((sum, item) => sum + item.webp.bytes, 0);
  const manifest = { schemaVersion: 1, generatedAt: new Date().toISOString(),
    inputDirectory: relative(input), outputDirectory: relative(output),
    migration: { path: relative(migrationFile), sha256: batch.migrationSha256 },
    policy: '无损 WebP；保留原始 PNG/JPEG；参考照片与验收拼图保持原样。',
    encoder: { sharp: sharp.versions.sharp, webp: sharp.versions.webp, lossless: true, effort: 6 },
    summary: { converted: assets.length, excluded: excluded.length, sourceBytes, webpBytes,
      savedBytes: sourceBytes - webpBytes }, assets, excluded };
  noSymlinks(manifestFile);
  fs.mkdirSync(path.dirname(manifestFile), { recursive: true });
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n', { flag: 'wx' });
  console.log(JSON.stringify(manifest.summary));
}
main().catch(error => { console.error(error.message); process.exitCode = 1; });
