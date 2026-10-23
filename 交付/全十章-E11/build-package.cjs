'use strict';
// E11独立本地交付。只读正式工程，固定白名单；不执行旧部署脚本。
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { hash, filesIn, verify } = require('./templates/tools/verify.cjs');
const root = path.resolve(__dirname, '../..');
const packageName = 'bi-jie-ten-chapter-nightshift-20261022-r1-e11';
const args = process.argv.slice(2);
assert(args.length === 0 || (args.length === 2 && args[0] === '--out'), '用法：node build-package.cjs [--out 输出父目录]');
const output = args.length ? path.resolve(args[1]) : path.join(__dirname, 'dist');
const json = value => JSON.stringify(value, null, 2) + '\n';
const read = file => fs.readFileSync(path.join(root, file));
const readJSON = file => JSON.parse(read(file));
const fingerprint = file => { const data = read(file); return { path: file, bytes: data.length, sha256: hash(data) }; };
function checkRows(rows) {
  for (const row of rows) {
    const file = row.path || row.file;
    const current = fingerprint(file);
    assert.equal(current.sha256, row.sha256, '来源版本漂移：' + file);
    if (row.bytes !== undefined) assert.equal(current.bytes, row.bytes, '来源大小漂移：' + file);
  }
}
function sourceFile(file) {
  assert(!path.isAbsolute(file) && !file.split('/').some(p => p === '..' || !p), '不安全来源路径');
  const full = path.resolve(root, file);
  assert(fs.realpathSync(full).startsWith(fs.realpathSync(root) + path.sep), '来源超出工程');
  assert(fs.statSync(full).isFile(), '来源不是文件');
  return full;
}
function inspectLegacy() {
  return ['edgeone', 'cloudflare', 'cloudflare-ambd'].map(platform => {
    const prefix = 'deployment/' + platform;
    const manifestPath = prefix + '/runtime-manifest.json';
    const manifest = readJSON(manifestPath);
    const directory = prefix + (platform === 'edgeone' ? '/site' : '/public');
    const files = manifest.files.map(row => {
      const current = fingerprint(directory + '/' + row.path);
      assert.equal(current.sha256, row.sha256, '历史快照改变：' + current.path);
      return current;
    });
    return { platform, directory, manifest: fingerprint(manifestPath), fileCount: files.length, fingerprintVerified: true, currentPublicVersionVerified: false, runtimeTestedByE11: false, files };
  });
}

const runtime = readJSON('assets/runtime-ten-chapter-manifest.json');
const e10 = readJSON('qa/ten-chapter/report.json');
assert.equal(runtime.contentRevision, 'nightshift-20261022-r1');
assert.equal(e10.status, 'local-engineering-passed-device-acceptance-pending');
assert(e10.checks.every(c => c.passed));
assert.equal(runtime.story.sha256, e10.storySha256);
checkRows([runtime.story, ...runtime.runtimeFiles, ...runtime.assets, ...runtime.inputFiles, ...runtime.builderFiles, ...e10.evidenceFingerprints, ...e10.scriptFingerprints]);
for (const file of ['browser-results.json', 'firefox-results.json']) {
  const browser = readJSON('qa/ten-chapter/browser/' + file);
  assert.equal(browser.failed, 0);
  for (const [name, sha256] of Object.entries(browser.runtimeHashes)) checkRows([{ path: name, sha256 }]);
}
const formal = require(path.join(root, '任务拆分/全十章/build/formal.cjs')).prepareFormal();
for (const [file, content] of Object.entries(formal.files)) assert.equal(read(file).toString(), content, '正式产物不是当前源构建：' + file);
const legacy = inspectLegacy();
const runtimeFiles = [runtime.story.path, ...runtime.runtimeFiles.map(r => r.path), 'assets/runtime-ten-chapter-manifest.json', ...runtime.assets.map(r => r.path)].sort();
assert.equal(runtimeFiles.length, 146);
assert.equal(new Set(runtimeFiles).size, runtimeFiles.length);
const sources = [...new Set([...runtime.inputFiles, ...runtime.builderFiles].map(r => r.path).concat(Object.keys(formal.files).filter(f => !runtimeFiles.includes(f))))].sort();
const evidence = ['qa/ten-chapter/report.json', ...e10.evidenceFingerprints.map(r => r.file)].sort();
const frozen = new Map([runtime.story, ...runtime.runtimeFiles, ...runtime.assets, ...runtime.inputFiles, ...runtime.builderFiles, ...e10.evidenceFingerprints, fingerprint('assets/runtime-ten-chapter-manifest.json'), fingerprint('qa/ten-chapter/report.json')].map(row => [row.path || row.file, row.sha256]));
for (const [file, content] of Object.entries(formal.files)) frozen.set(file, hash(content));
const stage = fs.mkdtempSync(path.join(os.tmpdir(), 'bijie-e11-package-'));
const packageRoot = path.join(stage, packageName);
fs.mkdirSync(packageRoot);
const origins = [];
function copy(file, destination) {
  const target = path.join(packageRoot, destination);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  const data = fs.readFileSync(sourceFile(file));
  const sha256 = hash(data);
  if (frozen.has(file)) assert.equal(sha256, frozen.get(file), '打包前后来源发生变化：' + file);
  fs.writeFileSync(target, data);
  origins.push({ source: file, packaged: destination, path: file, bytes: data.length, sha256 });
}
function write(file, value) {
  const target = path.join(packageRoot, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, typeof value === 'string' ? value : json(value));
}
try {
  for (const file of runtimeFiles) copy(file, 'game/' + file);
  for (const file of sources) copy(file, 'materials/source/' + file);
  for (const file of evidence) copy(file, 'materials/e10/' + file.slice('qa/ten-chapter/'.length));
  for (const file of filesIn(path.join(__dirname, 'templates'))) copy('交付/全十章-E11/templates/' + file, file);
  write('materials/legacy-snapshots.json', { scope: '历史静态快照指纹；没有运行或发布验证，不是当前十章回退包', snapshots: legacy });
  write('materials/provenance.json', { task: 'E11', contractVersion: runtime.contractVersion, contentRevision: runtime.contentRevision, buildSha256: formal.contentHash, sourceSnapshotRebuild: 'tools/rebuild-check.cjs在临时目录合并game与materials/source后逐字比较四份产物', originalArtworkIncluded: false, origins });
  const fileRows = filesIn(packageRoot).map(file => {
    const data = fs.readFileSync(path.join(packageRoot, file));
    return { path: file, bytes: data.length, sha256: hash(data) };
  });
  const manifest = {
    schemaVersion: 1, task: 'E11', release: 'e11-local-20261023', packageName,
    contentRevision: runtime.contentRevision, contractVersion: runtime.contractVersion,
    scope: '用户确认仅本地交付，公网另行安排；E10设备项仍待验',
    finalAcceptance: false, deployed: false, pending: e10.pending.map(p => p.id), waivedByUser: e10.waivedByUser,
    storySha256: runtime.story.sha256, buildSha256: formal.contentHash,
    e10Evidence: { source: 'qa/ten-chapter/report.json', sha256: hash(read('qa/ten-chapter/report.json')), status: e10.status, isNewPackageTest: false },
    runtimeFileCount: runtimeFiles.length, registeredAssetCount: runtime.assets.length,
    sourceFileCount: sources.length, fileCount: fileRows.length,
    contentSha256: hash(JSON.stringify(fileRows)), totalBytes: fileRows.reduce((sum, r) => sum + r.bytes, 0), files: fileRows
  };
  write('package-manifest.json', manifest);
  const verified = verify(packageRoot);
  checkRows([...frozen].map(([path, sha256]) => ({ path, sha256 })));
  // ZIP记录统一为固定UTC日期，无环境路径、构建时间或随机值。
  const stamp = new Date('2026-10-23T00:00:00.000Z');
  const names = filesIn(packageRoot);
  for (const file of names) {
    const target = path.join(packageRoot, file);
    fs.chmodSync(target, file === 'start-macos.command' ? 0o755 : 0o644);
    fs.utimesSync(target, stamp, stamp);
  }
  const stagedZip = path.join(stage, packageName + '.zip');
  execFileSync('/usr/bin/zip', ['-q', '-X', '-9', stagedZip, '-@'], {
    cwd: stage, input: names.map(f => packageName + '/' + f).join('\n') + '\n', env: { ...process.env, TZ: 'UTC' }, maxBuffer: 1024 * 1024
  });
  const zipBytes = fs.readFileSync(stagedZip);
  const zipHash = hash(zipBytes);
  fs.mkdirSync(output, { recursive: true });
  const destination = path.join(output, packageName), zip = path.join(output, packageName + '.zip');
  const exists = [destination, zip].map(f => fs.existsSync(f));
  if (exists.some(Boolean)) {
    assert(exists.every(Boolean), '既有交付不完整，拒绝覆盖；请选择新输出目录检查');
    verify(destination);
    assert.equal(fs.readFileSync(path.join(destination, 'package-manifest.json'), 'utf8'), json(manifest), '同名交付内容已变化，拒绝覆盖；请升级交付版');
    assert.equal(hash(fs.readFileSync(zip)), zipHash, '同名ZIP不一致，拒绝覆盖');
  } else {
    fs.cpSync(packageRoot, destination, { recursive: true, preserveTimestamps: true, errorOnExist: true, force: false });
    fs.copyFileSync(stagedZip, zip, fs.constants.COPYFILE_EXCL);
  }
  const receipt = { task: 'E11', localPackage: path.basename(zip), sha256: zipHash, bytes: zipBytes.length, fileCount: names.length, ...verified, runtimeFileCount: runtimeFiles.length, sourceFileCount: sources.length, buildSha256: formal.contentHash, deterministicZipTimestamp: stamp.toISOString(), formalFilesModified: false, deployed: false, finalAcceptance: false };
  const sidecars = { [packageName + '.zip.sha256']: zipHash + '  ' + path.basename(zip) + '\n', 'delivery-receipt.json': json(receipt) };
  for (const [name, content] of Object.entries(sidecars)) {
    const target = path.join(output, name);
    if (fs.existsSync(target)) assert.equal(fs.readFileSync(target, 'utf8'), content, '已有清单不同，拒绝覆盖');
    else fs.writeFileSync(target, content, { flag: 'wx' });
  }
  console.log(JSON.stringify({ output: destination, zip, ...receipt }, null, 2));
} finally { fs.rmSync(stage, { recursive: true, force: true }); }
