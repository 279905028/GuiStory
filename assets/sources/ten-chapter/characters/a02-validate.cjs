'use strict';
// 仅转换/校验 A02 交付。使用提供 sharp 的 Node 环境；不修改游戏或来源图。
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const sharp = require('sharp');
const root = path.resolve(__dirname, '../../..');
const rel = f => path.relative(root, f).split(path.sep).join('/');
const read = f => JSON.parse(fs.readFileSync(f, 'utf8'));
const write = (f, v) => fs.writeFileSync(f, JSON.stringify(v, null, 2) + '\n');
const hash = f => crypto.createHash('sha256').update(fs.readFileSync(f)).digest('hex');
const partial = process.argv.includes('--partial');
const plan = read(path.join(root, '任务拆分/全十章/美术清单.json'));
const jobs = read(path.join(__dirname, 'generation-jobs.json'));
const reuse = read(path.join(__dirname, 'reuse-map.json'));
const requirements = plan.assets.filter(a => a.owner === 'A02');
const names = { wenwen: '文文', xiaoman: '罗小满', zhouzhi: '周栀', mengyao: '孟遥', yelan: '叶岚', maolang: '毛狼', shijiang: '师匠', piao: '飘' };
function alphaInfo(data, width, height) {
  let clear = 0, soft = 0, solid = 0, min = 255, max = 0, left = width, right = -1, top = height, bottom = -1;
  for (let i = 3; i < data.length; i += 4) {
    const a = data[i]; min = Math.min(min, a); max = Math.max(max, a);
    if (a === 0) clear++; else if (a >= 250) solid++; else soft++;
    if (a >= 16) { const p = (i - 3) / 4, x = p % width, y = Math.floor(p / width); left = Math.min(left, x); right = Math.max(right, x); top = Math.min(top, y); bottom = Math.max(bottom, y); }
  }
  return { min, max, fullyTransparent: clear, partial: soft, nearOpaque: solid, visibleBBox: { left, top, right, bottom }, transparentRatio: clear / (width * height) };
}
async function validateImage(source, target, generated) {
  const originalMeta = await sharp(source).metadata();
  assert.equal(originalMeta.width, 1024, source); assert.equal(originalMeta.height, 1536, source); assert(originalMeta.hasAlpha, source);
  if (generated && !fs.existsSync(target)) await sharp(source).webp({ lossless: true, effort: 6 }).toFile(target);
  const bytes = fs.readFileSync(target), metadata = await sharp(bytes).metadata();
  assert.equal(bytes.toString('ascii', 0, 4), 'RIFF'); assert.equal(bytes.toString('ascii', 8, 12), 'WEBP');
  assert.equal(metadata.format, 'webp'); assert.equal(metadata.width, 1024); assert.equal(metadata.height, 1536); assert(metadata.hasAlpha);
  const a = await sharp(source).ensureAlpha().raw().toBuffer();
  const b = await sharp(target).ensureAlpha().raw().toBuffer();
  assert.equal(a.length, b.length);
  let invisibleRgbDifferences = 0;
  for (let i = 0; i < a.length; i += 4) {
    assert.equal(a[i + 3], b[i + 3], target + ': alpha');
    for (let k = 0; k < 3; k++) if (a[i + k] !== b[i + k]) { assert.equal(a[i + 3], 0, target + ': visible RGB'); invisibleRgbDifferences++; }
  }
  const alpha = alphaInfo(b, metadata.width, metadata.height);
  assert(alpha.fullyTransparent > 10000 && alpha.nearOpaque > 10000, target + ': cutout');
  return { source: { path: rel(source), sha256: hash(source), bytes: fs.statSync(source).size }, delivery: { path: rel(target), sha256: hash(target), bytes: bytes.length, format: metadata.format, width: metadata.width, height: metadata.height, hasAlpha: true }, validation: { decodes: true, dimensionsEqual: true, alphaEqual: true, visiblePixelsEqual: true, invisibleRgbDifferences, comparison: generated ? 'PNG→无损WebP逐像素' : '既有WebP原样复用', alpha } };
}
async function previews(character, entries) {
  const dir = path.join(__dirname, character, 'qa'); fs.mkdirSync(dir, { recursive: true });
  const batches = [];
  for (let start = 0; start < entries.length; start += 4) {
    const batch = entries.slice(start, start + 4), inputs = [];
    for (let i = 0; i < batch.length; i++) {
      const e = batch[i], source = path.join(root, e.delivery.path);
      for (let row = 0; row < 2; row++) inputs.push({ input: await sharp(source).resize(256, 384).flatten({ background: row ? '#20252e' : '#f4f4ef' }).png().toBuffer(), left: i * 256, top: row * 384 });
      const label = e.id.replace('tc-char-' + character + '-human-', '').replace('tc-look-' + character + '-', 'look:');
      inputs.push({ input: Buffer.from('<svg width="256" height="32"><rect width="256" height="32" fill="white"/><text x="8" y="22" font-family="sans-serif" font-size="14">' + label + '</text></svg>'), left: i * 256, top: 768 });
    }
    const file = path.join(dir, 'light-dark-' + (batches.length + 1) + '.png');
    await sharp({ create: { width: batch.length * 256, height: 800, channels: 3, background: '#fff' } }).composite(inputs).png().toFile(file);
    batches.push({ path: rel(file), resourceIds: batch.map(e => e.id) });
  }
  const faces = [];
  for (let i = 0; i < entries.length; i++) {
    // 原尺寸头部区域，只用于审图，交付立绘不裁切、不缩放。
    const source = path.join(root, entries[i].delivery.path);
    const thumb = await sharp(source).extract({ left: 220, top: 0, width: 560, height: 560 }).resize(280, 280).flatten({ background: '#deded8' }).png().toBuffer();
    faces.push({ input: thumb, left: (i % 4) * 280, top: Math.floor(i / 4) * 280 });
  }
  const faceFile = path.join(dir, 'faces.png');
  await sharp({ create: { width: Math.min(4, entries.length) * 280, height: Math.ceil(entries.length / 4) * 280, channels: 3, background: '#fff' } }).composite(faces).png().toFile(faceFile);
  return { fullFigureLightDark: batches, faceDetail: rel(faceFile) };
}
async function main() {
  const assets = [], missing = [], sourceFiles = [];
  for (const req of requirements) {
    const reused = reuse.find(x => x.id === req.id);
    const job = jobs.jobs.find(j => path.basename(req.proposedPath || '', '.webp') === j.file);
    if (!reused && !job) throw new Error('没有处理方案 ' + req.id);
    const attempt = job?.selectedAttempt || 1;
    const source = reused ? path.join(root, reused.sourcePaths[0]) : path.join(__dirname, job.character, 'originals', job.file + '-v' + attempt + '.png');
    const target = reused ? source : path.join(__dirname, job.character, job.file + (attempt > 1 ? '-v' + attempt : '') + '.webp');
    if (!fs.existsSync(source)) { missing.push(req.id); continue; }
    const checked = await validateImage(source, target, !reused);
    assets.push({ id: req.id, character: req.character, kind: req.kind, expression: req.expression || 'base', cueIds: req.cueIds, method: reused ? 'reuse' : 'imagegen-edit', ...checked, promptKey: job?.key || null, adoptionStatus: 'awaiting-A06', runtimeNodeIds: [], bindingStatus: 'awaiting-E09' });
    sourceFiles.push(source);
  }
  if (!partial) assert.equal(missing.length, 0, 'A02缺图: ' + missing.join(','));
  assert.equal(new Set(assets.map(a => a.id)).size, assets.length);
  const characterManifests = [];
  for (const [character, name] of Object.entries(names)) {
    const entries = assets.filter(a => a.character === character); if (!entries.length) continue;
    const dir = path.join(__dirname, character); fs.mkdirSync(dir, { recursive: true });
    const base = entries.find(a => a.expression === 'base' && a.kind === 'character');
    const evidence = await previews(character, entries);
    const manifest = { character, name, contractVersion: plan.contractVersion, contentRevision: plan.contentRevision, baseline: base?.delivery.path || null, assets: entries, evidence, status: missing.some(id => requirements.find(a => a.id === id).character === character) ? 'in-progress' : 'delivered-awaiting-A06' };
    write(path.join(dir, 'manifest.json'), manifest); characterManifests.push({ character, name, path: rel(path.join(dir, 'manifest.json')), ...evidence });
  }
  const alignment = [];
  for (const a of assets.filter(a => a.method === 'imagegen-edit' && a.kind === 'character' && a.expression !== 'base')) {
    const base = assets.find(b => b.character === a.character && b.kind === 'character' && b.expression === 'base');
    const x = await sharp(path.join(root, base.delivery.path)).ensureAlpha().raw().toBuffer();
    const y = await sharp(path.join(root, a.delivery.path)).ensureAlpha().raw().toBuffer();
    let intersection = 0, union = 0;
    for (let i = 3; i < x.length; i += 4) { if (x[i] >= 16 || y[i] >= 16) union++; if (x[i] >= 16 && y[i] >= 16) intersection++; }
    alignment.push({ id: a.id, reference: base.delivery.path, path: a.delivery.path, silhouetteIoU: intersection / union });
  }
  write(path.join(__dirname, 'alignment-check.json'), { method: '相同画布alpha>=16轮廓交并比；配合脸部审阅，不代替实际游戏切图测试。', entries: alignment });
  const validation = { generatedAt: new Date().toISOString(), contractVersion: plan.contractVersion, contentRevision: plan.contentRevision, a01Version: plan.version, a01Sha256: hash(path.join(root, '任务拆分/全十章/美术清单.json')), encoder: { sharp: sharp.versions.sharp, webp: sharp.versions.webp, lossless: true, effort: 6 }, expected: requirements.length, delivered: assets.length, generated: assets.filter(a => a.method === 'imagegen-edit').length, reused: assets.filter(a => a.method === 'reuse').length, missing, pass: missing.length === 0, characters: characterManifests, assets, evidenceBoundary: '格式/透明/像素检查和静态审图；未登记A06正式采用，未接入/运行游戏。' };
  write(path.join(__dirname, 'a02-delivery.json'), validation);
  console.log(JSON.stringify({ expected: validation.expected, delivered: validation.delivered, generated: validation.generated, reused: validation.reused, missing, pass: validation.pass }, null, 2));
}
main().catch(e => { console.error(e); process.exitCode = 1; });
