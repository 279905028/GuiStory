'use strict';
// E09 的正式接入层。E02 编译器仍只处理冻结模块和隔离产物。
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const { loadProject, compileProject, hash, base, root } = require('./compiler.cjs');
const { readJSON } = require('./json.cjs');
const { loadArtRevision } = require('./art-revision.cjs');
const artPaths = require('../../../scripts/art-paths.cjs');
const json = value => JSON.stringify(value, null, 2) + '\n';
const check = (ok, message) => { if (!ok) throw new Error(message); };
const relative = file => path.relative(root, file).split(path.sep).join('/');
const outputPaths = {
  story: 'story.js',
  runtime: 'assets/manifests/runtime-ten-chapter-manifest.json',
  sourceMap: '任务拆分/全十章/校验/E09/source-map.json',
  report: '任务拆分/全十章/校验/E09/build-report.json'
};
const runtimePaths = ['engine.js', 'save-compat.js', 'player-runtime.js', 'game.js', 'index.html', 'styles.css'];
const adoptionPath = 'assets/ten-chapter/a06-adoption.json';
const sceneMapPath = 'assets/ten-chapter/a06-scene-node-map.json';
const fadeOutNode = 'tc_c08_huangqiuqiu_her_decision_020';

function localFile(file) {
  check(typeof file === 'string' && !path.isAbsolute(file), '必须使用项目内相对文件路径');
  const full = artPaths.resolvePath(file);
  check(full.startsWith(root + path.sep), '文件路径越出项目：' + file);
  check(fs.realpathSync(full).startsWith(fs.realpathSync(root) + path.sep), '文件指向项目外：' + file);
  check(fs.statSync(full).isFile(), '路径不是文件：' + file);
  return full;
}

function fingerprint(file) {
  const bytes = fs.readFileSync(localFile(file));
  return { path: artPaths.relativePath(file), bytes: bytes.length, sha256: hash(bytes) };
}

function sameFingerprint(row, context) {
  const file = row.path || row.file;
  const actual = fingerprint(file);
  check(actual.sha256 === row.sha256, context + '指纹变化：' + file);
  return actual;
}

function validateAssets(story, adoption) {
  check(adoption.status === 'static-art-acceptance-complete', 'A06 尚未完成静态采用');
  check(adoption.contractVersion === story.contractVersion && adoption.contentRevision === story.contentRevision, 'A06 采用版本与故事不一致');
  check(Array.isArray(adoption.assets) && adoption.assets.length === 138 && adoption.counts.adoptedFiles === 138, 'A06 必须完整交付138项采用资源');
  const byPath = new Map(), byId = new Map();
  const assets = adoption.assets.map(asset => {
    check(asset.adoptionStatus === 'adopted-static', '资源尚未采用：' + asset.id);
    check(!byPath.has(asset.file) && !byId.has(asset.id), '采用资源路径或 ID 重复：' + asset.id);
    check(asset.format === 'webp' && /\.webp$/.test(asset.file), '采用资源不是 WebP：' + asset.id);
    const actual = sameFingerprint({ path: asset.file, sha256: asset.sha256 }, 'A06 资源');
    check(actual.bytes === asset.bytes, '采用资源字节数变化：' + asset.file);
    const bytes = fs.readFileSync(localFile(asset.file));
    check(bytes.length >= 12 && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP', '资源不是实际 WebP 编码：' + asset.file);
    byPath.set(asset.file, asset); byId.set(asset.id, asset);
    return { id: asset.id, kind: asset.kind, batch: asset.batch, ...actual, width: asset.width, height: asset.height };
  });
  story.covers = {};
  for (const kind of ['desktop', 'mobile']) {
    const asset = byId.get('tc-ui-cover-' + kind);
    check(asset && asset.kind === 'ui', '缺少已采用封面：' + kind);
    story.covers[kind] = asset.file;
  }
  const used = new Set();
  const use = (file, label, neutral = false) => {
    if (neutral && file === 'none') return;
    check(typeof file === 'string' && byPath.has(file), label + '未引用A06已采用资源：' + String(file));
    used.add(file);
  };
  for (const [id, value] of Object.entries(story.backgrounds)) use(value, '背景 ' + id, true);
  for (const [id, cg] of Object.entries(story.cgs)) use(cg.image, 'CG ' + id);
  for (const [id, person] of Object.entries(story.characters)) {
    const inspect = (entry, label) => {
      if (!entry.forms) use(entry.image, label + '基础立绘');
      if (entry.avatarImage != null) use(entry.avatarImage, label + '头像');
      for (const table of ['expressions', 'avatarExpressions']) {
        if (!entry[table]) continue;
        check(typeof entry[table] === 'object' && !Array.isArray(entry[table]), label + table + '不是字典');
        for (const [key, file] of Object.entries(entry[table])) use(file, label + table + '.' + key);
      }
      if (entry.forms) for (const [form, value] of Object.entries(entry.forms)) inspect(value, label + '/' + form);
    };
    inspect(person, '角色 ' + id);
  }
  for (const [kind, file] of Object.entries(story.covers)) use(file, '封面 ' + kind);
  // 同时检查扩展资源字段，避免非标准字段暗藏旧图或占位地址。
  const scan = (value, label) => {
    if (typeof value === 'string') {
      check(!/^(?:sample|audit-only):\/\//.test(value), '正式资源仍含占位地址：' + label);
      if (/^(?:assets\/|https?:\/\/|data:)|\.(?:webp|png|jpe?g|gif|svg)$/i.test(value)) use(value, label);
    } else if (value && typeof value === 'object') for (const [key, child] of Object.entries(value)) scan(child, label + '.' + key);
  };
  for (const kind of ['characters', 'backgrounds', 'cgs', 'covers']) scan(story[kind], kind);
  const missing = [...byPath.keys()].filter(file => !used.has(file));
  check(missing.length === 0, '采用资源尚未完整注册：' + missing.join(', '));
  return { assets, registeredFiles: used.size, neutralBackgroundIds: Object.keys(story.backgrounds).filter(id => story.backgrounds[id] === 'none') };
}

function validateRuntime(story) {
  // 纯内存启动检查，不创建播放器，也不读写任何浏览器存档。
  for (const file of ['engine.js', 'player-runtime.js', 'save-compat.js']) delete require.cache[require.resolve(path.join(root, file))];
  const core = require(path.join(root, 'engine.js'));
  const presentation = require(path.join(root, 'player-runtime.js'));
  const save = require(path.join(root, 'save-compat.js'));
  core.assertStoryCapabilities(story);
  presentation.validate(story);
  check(typeof presentation.canShowCG === 'function', '播放器缺少正式CG节点/条件/前序事件校验');
  const metadata = save.metadata(story);
  const html = fs.readFileSync(localFile('index.html'), 'utf8');
  const scripts = [...html.matchAll(/<script\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/g)].map(match => match[1].split('?')[0]);
  let previous = -1;
  for (const file of ['story.js', 'engine.js', 'save-compat.js', 'player-runtime.js', 'game.js']) {
    const index = scripts.indexOf(file);
    check(index > previous, '首页缺少配套脚本或加载顺序错误：' + file);
    previous = index;
  }
  for (const file of Object.values(story.covers)) check(html.includes(file), '首页尚未引用正式封面：' + file);
  return { capabilityCheck: true, dualFormCheck: true, cgGuardCapabilityCheck: true, scriptOrderCheck: true, coverReferencesCheck: true, saveMetadata: metadata, playerStorageAccessed: false };
}

function prepareFormal(options = {}) {
  const bindingCheck = spawnSync(process.execPath, [path.join(base, 'presentation/prepare-bindings.cjs'), '--check'], {
    cwd: root, encoding: 'utf8', maxBuffer: 1024 * 1024
  });
  check(bindingCheck.status === 0, '演出准备器校验失败，请先重新生成绑定：' + (bindingCheck.stderr || bindingCheck.error?.message || bindingCheck.stdout));
  const manifestPath = options.manifestPath || path.join(base, 'build-manifest.json');
  const project = loadProject(manifestPath);
  check(project.manifest.mode === 'candidate', '正式构建只接受完整 candidate 清单');
  const result = compileProject(project);
  const adoption = loadArtRevision().adopt(readJSON(localFile(adoptionPath)));
  const mapping = readJSON(localFile(sceneMapPath));
  check(mapping.contractVersion === result.story.contractVersion && mapping.contentRevision === result.story.contentRevision, 'A06 场景映射版本不一致');
  const evidenceInputs = [...(adoption.inputFingerprints || []), ...(mapping.sourceFingerprints || [])].map(row => sameFingerprint(row, 'A06 来源'));
  result.story.release = 'ten-chapter';
  check(result.story.nodes[fadeOutNode]?.type === 'line' && !result.story.nodes[fadeOutNode].onEnter, '球形淡出节点缺失或误用自动事件节点');
  result.story.presentation = { fadeOutNodes: [fadeOutNode] };
  const art = validateAssets(result.story, adoption);
  const runtime = validateRuntime(result.story);
  const presentationDirectory = path.join(base, 'presentation');
  const presentationFiles = fs.readdirSync(presentationDirectory).filter(name => /\.(?:json|cjs)$/.test(name)).map(name => relative(path.join(presentationDirectory, name)));
  check(presentationFiles.includes('任务拆分/全十章/presentation/prepare-bindings.cjs'), '正式演出缺少可复现绑定生成器');
  const inputPaths = [...new Set([...project.inputFiles.map(row => row.file), adoptionPath, sceneMapPath, artPaths.manifestPath, ...evidenceInputs.map(row => row.path), ...presentationFiles.filter(file => file.endsWith('.json'))].map(artPaths.relativePath))].sort();
  const inputs = inputPaths.map(fingerprint);
  const builderPaths = [...new Set([...result.report.builderFiles.map(row => row.file), relative(__filename), '任务拆分/全十章/build/art-revision.cjs', 'scripts/art-paths.cjs', ...presentationFiles.filter(file => file.endsWith('.cjs'))].map(artPaths.relativePath))].sort();
  const builders = builderPaths.map(fingerprint), runtimeFiles = runtimePaths.map(fingerprint);
  const storyText = '// E09 正式十章构建；请修改章节源或演出绑定后重新构建，勿手改。\nwindow.RAIN_STORY = ' + JSON.stringify(result.story, null, 2) + ';\n';
  const sourceMapText = json(result.sourceMap);
  const nodes = Object.values(result.story.nodes);
  const runtimeManifest = {
    schemaVersion: 1, release: result.story.release, scope: 'E09 正式十章正文、配套播放器及A06资源注册',
    contractVersion: result.story.contractVersion, contentRevision: result.story.contentRevision,
    formalIntegration: true, finalAcceptance: false,
    chapterCount: Object.keys(result.story.chapters).length, moduleCount: result.report.moduleCount,
    characterCount: Object.keys(result.story.characters).length, backgroundCount: Object.keys(result.story.backgrounds).length,
    sceneCount: result.report.sceneCount, nodeCount: result.report.nodeCount,
    choiceCount: nodes.filter(node => node.type === 'choice').length,
    terminalCount: nodes.filter(node => node.type === 'end' && node.endingId).length,
    chapterStopCount: nodes.filter(node => node.type === 'end' && node.next).length,
    registeredAssetCount: art.registeredFiles, assets: art.assets,
    proceduralBackgrounds: art.neutralBackgroundIds.map(id => ({ id, value: 'none', rendering: 'neutral-color-no-image', bitmap: false })),
    story: { path: outputPaths.story, bytes: Buffer.byteLength(storyText), sha256: hash(storyText) },
    runtimeFiles, inputFiles: inputs, builderFiles: builders,
    requiredCapabilities: result.story.requiredCapabilities
  };
  const runtimeText = json(runtimeManifest);
  const report = {
    ...result.report, scope: 'E09 formal integration, compiler/static graph, adopted resource fingerprints and runtime startup checks',
    formalIntegration: true, finalAcceptance: false,
    inputFiles: inputs, builderFiles: builders, runtimeFiles,
    validation: { adoptedAssets: art.registeredFiles, allAdoptedFilesRegistered: true, webpHeaderAndSha256: true, a06SourceFingerprints: true, ...runtime },
    postprocessing: [
      { field: 'release', value: 'ten-chapter', reason: 'E09正式接入版本标记；不改变契约、状态或正文' },
      { field: 'covers', value: result.story.covers, reason: 'A06采用的横竖封面；index.html引用同步检查' },
      { field: 'presentation.fadeOutNodes', value: [fadeOutNode], reason: 'A06/E07明确的第55天变化过程淡出球形；形态仍由后续契约自动事件提交' }
    ],
    writing: { deterministic: true, perFileAtomicRename: true, rollbackOnFailure: true, immutablePreviousOutputSnapshot: true, crashAtomicAcrossFiles: false },
    outputs: [
      { path: outputPaths.story, sha256: hash(storyText) },
      { path: outputPaths.runtime, sha256: hash(runtimeText) },
      { path: outputPaths.sourceMap, sha256: hash(sourceMapText) }
    ],
    notValidated: ['E10正式候选逐句阅读与演出验收', 'E10完整存读档/重选/浏览器回归', '实体手机、声音与真人阅读', 'E11交付包及公网发布']
  };
  const files = { [outputPaths.story]: storyText, [outputPaths.runtime]: runtimeText, [outputPaths.sourceMap]: sourceMapText, [outputPaths.report]: json(report) };
  return { story: result.story, sourceMap: result.sourceMap, report, runtimeManifest, files,
    watchedFiles: [...inputs, ...builders, ...runtimeFiles, ...art.assets.map(asset => ({ path: asset.path, sha256: asset.sha256 }))],
    contentHash: hash(Object.entries(files).map(([file, text]) => file + '\0' + text).join('\n')) };
}

function safeOutput(file) {
  const full = path.resolve(root, file);
  check(full.startsWith(root + path.sep), '输出越出项目');
  let current = root;
  for (const part of path.relative(root, full).split(path.sep)) {
    current = path.join(current, part);
    try { check(!fs.lstatSync(current).isSymbolicLink(), '输出路径不能含软链接：' + file); }
    catch (error) { if (error.code !== 'ENOENT') throw error; }
  }
  return full;
}

function writeFormal(prepared) {
  check(JSON.stringify(Object.keys(prepared.files).sort()) === JSON.stringify(Object.values(outputPaths).sort()), '正式输出集合不匹配');
  check(hash(Object.entries(prepared.files).map(([file, text]) => file + '\0' + text).join('\n')) === prepared.contentHash, '准备后的输出内容已变化，必须重新校验构建');
  const qa = safeOutput('任务拆分/全十章/校验/E09');
  fs.mkdirSync(qa, { recursive: true });
  const lock = safeOutput('任务拆分/全十章/校验/E09/.formal-build.lock');
  const lockFd = fs.openSync(lock, 'wx');
  let stage;
  const installed = [], old = new Map();
  try {
    for (const row of prepared.watchedFiles) sameFingerprint(row, '构建准备后输入');
    for (const file of Object.keys(prepared.files)) {
      const full = safeOutput(file);
      check(!fs.existsSync(full) || fs.statSync(full).isFile(), '输出不是普通文件：' + file);
      old.set(file, fs.existsSync(full) ? fs.readFileSync(full) : null);
    }
    if ([...old].every(([file, bytes]) => bytes !== null && bytes.equals(Buffer.from(prepared.files[file])))) {
      return { reused: true, contentHash: prepared.contentHash, snapshot: null, outputs: Object.keys(prepared.files) };
    }
    stage = fs.mkdtempSync(path.join(qa, '.formal-stage-'));
    for (const [file, text] of Object.entries(prepared.files)) {
      const staged = path.join(stage, 'new', file);
      fs.mkdirSync(path.dirname(staged), { recursive: true });
      fs.writeFileSync(staged, text, { flag: 'wx' });
      check(hash(fs.readFileSync(staged)) === hash(text), '暂存输出校验失败：' + file);
    }
    const previous = [...old].map(([file, bytes]) => ({ path: file, existed: bytes !== null, sha256: bytes === null ? null : hash(bytes) }));
    const snapshotId = hash(json(previous)).slice(0, 20);
    const snapshotRelative = '任务拆分/全十章/校验/E09/snapshots/' + snapshotId;
    const snapshot = safeOutput(snapshotRelative);
    if (fs.existsSync(snapshot)) {
      const manifest = readJSON(path.join(snapshot, 'snapshot.json'));
      check(JSON.stringify(manifest) === JSON.stringify(previous), '既有快照清单不同');
      for (const row of previous.filter(row => row.existed)) check(hash(fs.readFileSync(safeOutput(snapshotRelative + '/' + row.path))) === row.sha256, '既有快照内容变化：' + row.path);
    } else {
      const temporarySnapshot = path.join(stage, 'snapshot');
      fs.mkdirSync(temporarySnapshot);
      for (const [file, bytes] of old) if (bytes !== null) {
        const backup = path.join(temporarySnapshot, file);
        fs.mkdirSync(path.dirname(backup), { recursive: true }); fs.writeFileSync(backup, bytes, { flag: 'wx' });
      }
      fs.writeFileSync(path.join(temporarySnapshot, 'snapshot.json'), json(previous), { flag: 'wx' });
      fs.mkdirSync(path.dirname(snapshot), { recursive: true }); fs.renameSync(temporarySnapshot, snapshot);
    }
    // 写故事入口前先保存其他报告；每个文件原子替换，任一步失败回滚已替换文件。
    const order = [outputPaths.sourceMap, outputPaths.report, outputPaths.runtime, outputPaths.story];
    for (const file of order) {
      const full = safeOutput(file), before = old.get(file);
      check(before === null ? !fs.existsSync(full) : fs.existsSync(full) && fs.readFileSync(full).equals(before), '构建期间输出被其他窗口修改：' + file);
      fs.mkdirSync(path.dirname(full), { recursive: true });
      fs.renameSync(path.join(stage, 'new', file), full); installed.push(file);
    }
    return { reused: false, contentHash: prepared.contentHash, snapshot: snapshotRelative, outputs: Object.keys(prepared.files) };
  } catch (error) {
    for (const file of installed.reverse()) {
      const full = safeOutput(file), before = old.get(file);
      if (before === null) fs.unlinkSync(full);
      else {
        const restore = path.join(stage, 'restore-' + hash(file).slice(0, 12));
        fs.writeFileSync(restore, before, { flag: 'wx' }); fs.renameSync(restore, full);
      }
    }
    throw error;
  } finally {
    if (stage) fs.rmSync(stage, { recursive: true, force: true });
    fs.closeSync(lockFd); fs.unlinkSync(lock);
  }
}

function run(args = []) {
  if (args.length === 1 && args[0] === '--help') {
    console.log('正式十章：node 任务拆分/三章扩展/build-story.cjs\n只校验：同上 --check\n隔离构建：同上 --ten-chapter [--sample | --manifest <JSON>] [--check]\n旧三章复现：同上 --legacy-three-chapter');
    return;
  }
  check(args.length === 0 || (args.length === 1 && args[0] === '--check'), '正式构建仅支持 --check；隔离选项须使用 --ten-chapter');
  const prepared = prepareFormal();
  const written = args.includes('--check') ? null : writeFormal(prepared);
  console.log(json({ status: 'passed', mode: 'candidate', formalIntegration: written !== null, finalAcceptance: false,
    moduleCount: prepared.report.moduleCount, nodeCount: prepared.report.nodeCount, sceneCount: prepared.report.sceneCount,
    registeredAssets: prepared.runtimeManifest.registeredAssetCount, contentHash: prepared.contentHash, output: written, graph: prepared.report.graph.statistics }));
  return { prepared, written };
}

function main(args) {
  try { return run(args); }
  catch (error) { console.error('十章正式构建失败：' + error.message); process.exitCode = 1; }
}

if (require.main === module) main(process.argv.slice(2));
module.exports = { prepareFormal, writeFormal, validateAssets, validateRuntime, outputPaths, run, main };
