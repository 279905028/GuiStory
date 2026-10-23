'use strict';
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const { execFileSync, spawn } = require('node:child_process');
const { hash, filesIn, verify } = require('../../交付/全十章-E11/templates/tools/verify.cjs');
const root = path.resolve(__dirname, '../..');
const zip = path.resolve(process.argv[2]);
const report = { task: 'E11', scope: '实际ZIP独立解压、资源闭包、来源重建、离线服务、回退基线与损坏拒绝；不覆盖E10设备结果', checks: [], startedAt: new Date().toISOString(), zip, zipSha256: hash(fs.readFileSync(zip)), playerStorageAccessed: false, deployed: false };
const temp = fs.mkdtempSync(path.join(os.tmpdir(), 'bijie-e11-打包检查 空格-'));
let server, extracted;
const test = async (name, fn) => { const details = await fn(); report.checks.push({ name, passed: true, details }); };
function command(args, cwd = extracted) { return execFileSync(process.execPath, args, { cwd, encoding: 'utf8', maxBuffer: 4 * 1024 * 1024 }); }
function launch() {
  return new Promise((resolve, reject) => {
    server = spawn(process.execPath, ['tools/serve.cjs', '--port', '0'], { cwd: extracted, stdio: ['ignore', 'pipe', 'pipe'] });
    let output = '', error = '';
    const timeout = setTimeout(() => reject(Error('服务启动超时：' + error)), 15000);
    server.stdout.on('data', chunk => { output += chunk; const match = output.match(/http:\/\/127\.0\.0\.1:\d+\//); if (match) { clearTimeout(timeout); resolve(match[0]); } });
    server.stderr.on('data', chunk => error += chunk);
    server.once('error', reject);
    server.once('exit', code => { clearTimeout(timeout); if (!output.includes('http://')) reject(Error('服务退出：' + code + ' ' + error)); });
  });
}
(async () => {
  await test('ZIP CRC、路径与独立中文空格目录解压', () => {
    const text = execFileSync('/usr/bin/unzip', ['-t', zip], { encoding: 'utf8', maxBuffer: 1024 * 1024 });
    assert.match(text, /No errors detected/);
    const names = execFileSync('/usr/bin/unzip', ['-Z1', zip], { encoding: 'utf8' }).trim().split('\n');
    for (const name of names) assert(!name.startsWith('/') && !name.split('/').includes('..'));
    assert.equal(new Set(names).size, names.length);
    execFileSync('/usr/bin/unzip', ['-q', zip, '-d', temp]);
    extracted = path.join(temp, names[0].split('/')[0]);
    return { entries: names.length, extracted };
  });
  let manifest, runtime;
  await test('229份文件完整性与正式工程逐字一致', () => {
    const result = verify(extracted);
    manifest = JSON.parse(fs.readFileSync(path.join(extracted, 'package-manifest.json')));
    runtime = JSON.parse(fs.readFileSync(path.join(extracted, 'game/assets/runtime-ten-chapter-manifest.json')));
    assert.equal(filesIn(extracted).length, manifest.fileCount + 1);
    const game = manifest.files.filter(r => r.path.startsWith('game/'));
    assert.equal(game.length, 146);
    for (const item of game) assert.equal(hash(fs.readFileSync(path.join(root, item.path.slice(5)))), item.sha256, item.path);
    return { ...result, entriesIncludingManifest: manifest.fileCount + 1, formalFilesMatched: game.length };
  });
  await test('138张真实WebP与剧情和首页资源闭包', () => {
    const scope = { window: {} };
    const storyText = fs.readFileSync(path.join(extracted, 'game/story.js'), 'utf8');
    vm.runInNewContext(storyText, scope);
    const refs = new Set();
    function scan(value) { if (typeof value === 'string' && value.startsWith('assets/')) refs.add(value); else if (value && typeof value === 'object') for (const v of Object.values(value)) scan(v); }
    scan(scope.window.RAIN_STORY);
    const html = fs.readFileSync(path.join(extracted, 'game/index.html'), 'utf8');
    for (const match of html.matchAll(/(?:src|srcset)="(assets\/[^" ]+)"/g)) refs.add(match[1]);
    assert.deepEqual([...refs].sort(), runtime.assets.map(a => a.path).sort());
    for (const asset of runtime.assets) {
      const b = fs.readFileSync(path.join(extracted, 'game', asset.path));
      assert.equal(b.toString('ascii', 0, 4), 'RIFF'); assert.equal(b.toString('ascii', 8, 12), 'WEBP');
      assert.equal(hash(b), asset.sha256);
    }
    for (const file of ['index.html', 'styles.css', 'story.js', 'game.js', 'engine.js', 'save-compat.js', 'player-runtime.js']) assert(!/(?:https?:)?\/\//.test(fs.readFileSync(path.join(extracted, 'game', file), 'utf8').replace(/\/\/[^\n]*/g, '')), '检查潜在远端依赖：' + file);
    return { assetCount: refs.size, inheritedPathsOutsideTenChapter: [...refs].filter(f => !f.startsWith('assets/ten-chapter/')).length, audio: 'Web Audio程序生成，无外部音频文件' };
  });
  await test('包内源独立重建四份正式产物逐字一致', () => JSON.parse(command(['tools/rebuild-check.cjs']).trim()));
  await test('缺文件、内容篡改、未登记文件与软链接拒绝', () => {
    const file = path.join(extracted, 'game/player-runtime.js'), original = fs.readFileSync(file);
    const assertFails = () => assert.throws(() => verify(extracted));
    fs.unlinkSync(file); try { assertFails(); } finally { fs.writeFileSync(file, original); }
    fs.appendFileSync(file, '\n/* deliberate E11 corruption */'); try { assertFails(); } finally { fs.writeFileSync(file, original); }
    const extra = path.join(extracted, 'game/unlisted.txt');
    fs.writeFileSync(extra, 'E11 test'); try { assertFails(); } finally { fs.unlinkSync(extra); }
    const link = path.join(extracted, 'game/unlisted-link');
    fs.symlinkSync('index.html', link); try { assertFails(); } finally { fs.unlinkSync(link); }
    verify(extracted); return { rejectedCases: 4, restoredOriginalBytes: true };
  });
  await test('相同源第二次打包得到完全相同ZIP', () => {
    const target = path.join(temp, 'reproduced');
    const run = JSON.parse(command([path.join(root, '交付/全十章-E11/build-package.cjs'), '--out', target], root));
    assert.equal(run.sha256, report.zipSha256);
    return { sha256: run.sha256, reproducedBytes: run.bytes };
  });
  const origin = await launch();
  await test('本机服务146份文件内容、类型与禁缓存', async () => {
    for (const item of manifest.files.filter(f => f.path.startsWith('game/'))) {
      const result = await fetch(origin + item.path.slice(5));
      assert.equal(result.status, 200, item.path);
      assert.equal(hash(Buffer.from(await result.arrayBuffer())), item.sha256, item.path);
      assert.equal(result.headers.get('cache-control'), 'no-store');
      if (item.path.endsWith('.webp')) assert.equal(result.headers.get('content-type'), 'image/webp');
    }
    const head = await fetch(origin, { method: 'HEAD' }); assert.equal(head.status, 200); assert.equal((await head.text()).length, 0);
    return { served: 146, localhostOnly: true, head: 'passed' };
  });
  await test('服务拒绝资料目录、未登记资源、越界和写入', async () => {
    for (const route of ['package-manifest.json', 'materials/provenance.json', 'tools/serve.cjs', 'assets/unknown.webp', '%2e%2e%2fpackage-manifest.json']) assert.equal((await fetch(origin + route)).status, 404, route);
    assert.equal((await fetch(origin, { method: 'POST', body: 'test' })).status, 405);
    assert.equal((await fetch(origin + '%invalid')).status, 400);
    return { refusedCases: 7 };
  });
  await test('回退材料与设备待验保持真实状态', () => {
    assert.equal(manifest.finalAcceptance, false); assert.equal(manifest.deployed, false);
    assert.deepEqual(manifest.pending, ['safari', 'physical-phone']);
    const old = JSON.parse(fs.readFileSync(path.join(extracted, 'materials/legacy-snapshots.json')));
    for (const snapshot of old.snapshots) for (const f of snapshot.files) assert.equal(hash(fs.readFileSync(path.join(root, f.path))), f.sha256);
    return { baseline: path.basename(zip), unchangedHistoricalFiles: old.snapshots.reduce((n, s) => n + s.files.length, 0), oldGameNotRuntimeTested: true, playerStorageAccessed: false };
  });
  report.status = 'passed';
})().catch(error => { report.status = 'failed'; report.error = error.stack; process.exitCode = 1; console.error(error.stack); }).finally(async () => {
  if (server && server.exitCode === null) { server.kill('SIGTERM'); await new Promise(resolve => { server.once('exit', resolve); setTimeout(resolve, 3000).unref(); }); }
  report.completedAt = new Date().toISOString(); report.passed = report.checks.length;
  fs.writeFileSync(path.join(__dirname, 'package-results.json'), JSON.stringify(report, null, 2) + '\n');
  fs.rmSync(temp, { recursive: true, force: true });
  console.log(JSON.stringify({ status: report.status, passed: report.passed, zipSha256: report.zipSha256 }));
});
