'use strict';
// 用法：node scripts/convert-art-webp.cjs；需要当前环境提供 sharp。
// 原图保留供生成溯源、历史验收和后续编辑。只在像素核对通过后写入 WebP。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const manifestFile = path.join(root, 'assets/webp-manifest.json');
const hash = data => crypto.createHash('sha256').update(data).digest('hex');
const relative = file => path.relative(root, file).split(path.sep).join('/');
function scan(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    if (entry.name.startsWith('.')) return [];
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? scan(file) : /\.(png|jpe?g)$/i.test(file) ? [file] : [];
  }).sort();
}
function exclusion(file) {
  const name = path.basename(file), rel = relative(file);
  if (rel.startsWith('assets/references/') || /(?:^|[-_])reference-photo\./i.test(name)) return '原始参考照片';
  if (/^qa[-_]/i.test(name)) return '历史验收拼图';
  return null;
}
async function convert(file) {
  const source = fs.readFileSync(file), meta = await sharp(source).metadata();
  assert((meta.pages || 1) === 1, '动图需要单独审核：' + file);
  assert(meta.width <= 16383 && meta.height <= 16383, '超出 WebP 尺寸限制：' + file);
  assert.equal(meta.depth, 'uchar', '高位深原图需要单独审核：' + file);
  const output = file.replace(/\.(png|jpe?g)$/i, '.webp');
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
  fs.writeFileSync(output, encoded);
  return {
    source: { path: relative(file), bytes: source.length, sha256: hash(source) },
    webp: { path: relative(output), bytes: encoded.length, sha256: hash(encoded),
      width: actual.width, height: actual.height, hasAlpha: actual.hasAlpha },
    validation: { dimensionsEqual: true, visiblePixelsEqual: true, alphaEqual: true,
      transparentRgbDifferences, note: '仅完全透明像素下不可见 RGB 允许编码器归零；所有 alpha 和可见 RGB 逐值一致。' }
  };
}
async function main() {
  const files = scan(path.join(root, 'assets')), assets = [], excluded = [];
  const targets = files.filter(file => {
    const reason = exclusion(file);
    if (reason) excluded.push({ path: relative(file), reason });
    return !reason;
  });
  const outputNames = targets.map(file => file.replace(/\.(png|jpe?g)$/i, '.webp'));
  assert.equal(new Set(outputNames).size, outputNames.length, '存在同名 PNG/JPEG，需人工选择目标名');
  const previous = fs.existsSync(manifestFile) ? JSON.parse(fs.readFileSync(manifestFile, 'utf8')) : null;
  const tracked = new Map((previous?.assets || []).map(item => [item.webp.path, item.webp.sha256]));
  for (const output of outputNames) if (fs.existsSync(output)) {
    assert.equal(hash(fs.readFileSync(output)), tracked.get(relative(output)), '拒绝覆盖未登记或已另行编辑的 WebP：' + output);
  }
  let next = 0;
  await Promise.all(Array.from({ length: 3 }, async () => {
    while (next < targets.length) {
      const file = targets[next++];
      assets.push(await convert(file));
      if (assets.length % 20 === 0) console.log(`已转换并验证 ${assets.length}/${targets.length}`);
    }
  }));
  assets.sort((a, b) => a.source.path.localeCompare(b.source.path, 'en'));
  const sourceBytes = assets.reduce((sum, item) => sum + item.source.bytes, 0);
  const webpBytes = assets.reduce((sum, item) => sum + item.webp.bytes, 0);
  const manifest = { schemaVersion: 1, generatedAt: new Date().toISOString(),
    policy: '无损 WebP；保留原始 PNG/JPEG；参考照片与验收拼图保持原样。',
    encoder: { sharp: sharp.versions.sharp, webp: sharp.versions.webp, lossless: true, effort: 6 },
    summary: { converted: assets.length, excluded: excluded.length, sourceBytes, webpBytes,
      savedBytes: sourceBytes - webpBytes }, assets, excluded };
  fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2) + '\n');
  console.log(JSON.stringify(manifest.summary));
}
main().catch(error => { console.error(error); process.exitCode = 1; });
