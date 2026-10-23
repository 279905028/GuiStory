'use strict';

// E09 只读根目录正式 story.js，报告只写入本目录；不执行 E08 入口、不接触玩家存储。
// 借用 E08 的 walk/finish 辅助，不调用其 createStory/createBundle 或历史报告写入器。
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { root, base, contract, moduleFiles, finish, reach } = require('../E08/fixture.cjs');
const { StoryEngine } = require(path.join(root, 'engine.js'));
const presentation = require(path.join(root, 'player-runtime.js'));
const { validateGraph } = require(path.join(base, 'build/graph.cjs'));
const read = file => fs.readFileSync(path.join(root, file));
const json = file => JSON.parse(read(file));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const clone = value => JSON.parse(JSON.stringify(value));
const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const fingerprint = file => ({ file, sha256: hash(read(file)) });
const source = read('story.js').toString('utf8');
const context = { window: {} };
vm.runInNewContext(source, context, { filename: 'story.js', timeout: 10000 });
const story = clone(context.window.RAIN_STORY);
const adoption = json('assets/ten-chapter/a06-adoption.json');
const map = json('assets/ten-chapter/a06-scene-node-map.json');
const byFile = new Map(adoption.assets.map(asset => [asset.file, asset]));
const byId = new Map(adoption.assets.map(asset => [asset.id, asset]));
const modules = moduleFiles.map(file => json('任务拆分/全十章/' + file));
const sourceNodes = Object.assign({}, ...modules.map(module => module.nodes));
const sourceScenes = Object.assign({}, ...modules.map(module => module.scenes));
const cgRules = map.cgRules.items.filter(item => item.allowedNodeIds);
const results = [];
function test(name, run) {
  try { results.push({ name, status: 'passed', detail: run() }); }
  catch (error) { results.push({ name, status: 'failed', error: error.stack }); }
}
function without(object, fields) {
  return Object.fromEntries(Object.entries(object).filter(([key]) => !fields.includes(key)));
}
function conditionsHold(condition, flags) {
  if (Array.isArray(condition)) return condition.every(item => conditionsHold(item, flags));
  if (condition.all) return condition.all.every(item => conditionsHold(item, flags));
  if (condition.any) return condition.any.some(item => conditionsHold(item, flags));
  return own(flags, condition.flag) && (condition.in ? condition.in.includes(flags[condition.flag]) : flags[condition.flag] === condition.value);
}
function assetFile(file, label) {
  assert.equal(typeof file, 'string', label + '缺少资源路径');
  assert(byFile.has(file), label + '未采用资源：' + file);
  assert(file.endsWith('.webp'), label + '未使用 WebP：' + file);
  assert(fs.existsSync(path.join(root, file)), label + '资源不存在：' + file);
  return file;
}
function effectiveBg(node) { return node.bg ?? story.scenes[node.scene].bg; }

test('根正式故事和17份真实源的正文、场景语义、跳转与状态写入逐字段一致', () => {
  assert.equal(modules.length, 17);
  assert.deepEqual(Object.keys(story.nodes).sort(), Object.keys(sourceNodes).sort());
  assert.deepEqual(Object.keys(story.scenes).sort(), Object.keys(sourceScenes).sort());
  const presentationFields = ['character', 'expression', 'avatarExpression', 'bg', 'cg'];
  for (const [id, original] of Object.entries(sourceNodes)) {
    assert.deepEqual(without(story.nodes[id], presentationFields), without(original, presentationFields), id + '改写了正文或控制字段');
  }
  for (const [id, original] of Object.entries(sourceScenes)) {
    assert.deepEqual(without(story.scenes[id], ['bg']), without(original, ['bg']), id + '改写了原文场景语义');
  }
  const sourceFiles = new Set(['任务拆分/全十章/contract.json', ...moduleFiles.map(file => '任务拆分/全十章/' + file), ...contract.baseline.sourceManifest.map(row => row.file)]);
  for (const entry of map.sourceFingerprints.filter(entry => sourceFiles.has(entry.path))) {
    assert.equal(hash(read(entry.path)), entry.sha256, entry.path + '偏离A06映射来源');
    sourceFiles.delete(entry.path);
  }
  assert.equal(sourceFiles.size, 0, 'A06缺少来源指纹：' + [...sourceFiles].join(', '));
  return { modules: 17, nodes: Object.keys(sourceNodes).length, scenes: Object.keys(sourceScenes).length, allowedPresentationFields: presentationFields, sourceFingerprints: 28 };
});

test('正式十章协议、静态图、19处选择/43选项/13结局完整闭合', () => {
  assert.equal(story.release, 'ten-chapter');
  assert.equal(story.version, contract.interface.storyVersion);
  assert.equal(story.contractVersion, contract.contractVersion);
  assert.equal(story.contentRevision, contract.contentRevision);
  assert.equal(story.start, contract.interface.start);
  assert.equal(story.routeChoice, contract.interface.routeChoice);
  assert.deepEqual(story.requiredCapabilities, contract.interface.requiredCapabilities);
  assert.deepEqual(story.initialFlags, contract.interface.initialFlags);
  assert.deepEqual(Object.keys(story.chapters).map(Number).sort((a, b) => a - b), [1,2,3,4,5,6,7,8,9,10]);
  assert.equal(Object.keys(story.nodes).length, 2612);
  assert.equal(Object.keys(story.scenes).length, 360);
  const graph = validateGraph(story, contract, { mode: 'candidate', stops: [] });
  assert.equal(graph.statistics.choices, 19);
  assert.equal(graph.statistics.options, 43);
  assert.equal(graph.coverage.reachedEndings.length, 13);
  assert.deepEqual(graph.coverage.unreachableNodes, []);
  assert.equal(presentation.validate(story), true);
  return { chapters: 10, nodes: 2612, scenes: 360, ...graph.statistics, reachedEndings: 13, unreachableNodes: [] };
});

test('正式运行清单绑定当前story、六个配套运行文件、构建输入与138张采用资源', () => {
  const manifest = json('assets/runtime-ten-chapter-manifest.json');
  assert.equal(manifest.release, 'ten-chapter');
  assert.equal(manifest.formalIntegration, true); assert.equal(manifest.finalAcceptance, false);
  assert.equal(manifest.chapterCount, 10); assert.equal(manifest.moduleCount, 17);
  assert.equal(manifest.nodeCount, 2612); assert.equal(manifest.sceneCount, 360);
  assert.equal(manifest.choiceCount, 19); assert.equal(manifest.terminalCount, 13); assert.equal(manifest.chapterStopCount, 9);
  assert.equal(manifest.registeredAssetCount, 138);
  assert.equal(manifest.story.path, 'story.js'); assert.equal(manifest.story.sha256, hash(Buffer.from(source)));
  const runtimeFiles = ['engine.js', 'save-compat.js', 'player-runtime.js', 'game.js', 'index.html', 'styles.css'];
  assert.deepEqual(manifest.runtimeFiles.map(row => row.path).sort(), runtimeFiles.sort());
  assert.deepEqual(manifest.assets.map(row => row.path).sort(), [...byFile.keys()].sort());
  let verified = 0;
  for (const entry of [manifest.story, ...manifest.runtimeFiles, ...manifest.inputFiles, ...manifest.builderFiles, ...manifest.assets]) {
    const bytes = read(entry.path);
    assert.equal(hash(bytes), entry.sha256, entry.path + '与运行清单指纹不一致');
    if (entry.bytes != null) assert.equal(bytes.length, entry.bytes, entry.path + '与运行清单字节数不一致');
    verified++;
  }
  return { story: manifest.story.sha256, runtimeFiles: 6, assets: 138, verifiedManifestEntries: verified, finalAcceptance: false };
});

test('138张采用图的文件、WebP编码与SHA256一致；正式注册无sample和未采用图片', () => {
  assert.equal(adoption.assets.length, 138);
  assert.equal(byFile.size, 138);
  for (const asset of adoption.assets) {
    assetFile(asset.file, asset.id);
    const bytes = read(asset.file);
    assert.equal(bytes.toString('ascii', 0, 4), 'RIFF', asset.file);
    assert.equal(bytes.toString('ascii', 8, 12), 'WEBP', asset.file);
    assert.equal(bytes.length, asset.bytes, asset.file + '字节数');
    assert.equal(hash(bytes), asset.sha256, asset.file + '指纹');
  }
  assert(!/sample:\/\//i.test(source), '正式故事包含sample占位');
  const registered = new Set();
  function scan(value, label) {
    if (Array.isArray(value)) return value.forEach((entry, index) => scan(entry, label + '[' + index + ']'));
    if (value && typeof value === 'object') return Object.entries(value).forEach(([key, entry]) => scan(entry, label + '.' + key));
    if (typeof value === 'string' && /(?:^assets\/|\.(?:webp|png|jpe?g)$)/i.test(value)) registered.add(assetFile(value, label));
  }
  scan(story, 'story');
  // 封面可以通过HTML/CSS而非Story注册；只计入已采用图，旧兼容样式不当成十章运行图。
  for (const file of ['index.html', 'styles.css']) {
    const contents = read(file).toString('utf8');
    for (const asset of adoption.assets) if (contents.includes(asset.file)) registered.add(asset.file);
  }
  assert.deepEqual([...registered].sort(), [...byFile.keys()].sort(), '138张采用图未完整注册到正式故事/页面');
  for (const [id, file] of Object.entries(story.backgrounds)) {
    if (file === 'none') continue;
    assert.equal(byId.get(id)?.file, assetFile(file, '背景 ' + id));
  }
  for (const [id, resource] of Object.entries(story.cgs)) {
    assert.equal(byId.get(id)?.file, assetFile(resource.image, 'CG ' + id));
    assert.equal(typeof resource.alt, 'string'); assert(resource.alt.trim(), id + '缺少替代文字');
  }
  return { adoptedAssets: 138, registeredAssets: registered.size, verifiedWebPHashes: 138, placeholderResources: 0 };
});

test('双形态立绘与独立头像精确采用，每种差分均可解析且无跨形态回退', () => {
  assert.deepEqual(story.characters.huangqiuqiu.forms, map.qiuqiuForms);
  let variants = 0;
  for (const form of ['sphere', 'human']) for (const avatar of [false, true]) {
    const entry = story.characters.huangqiuqiu.forms[form];
    for (const expression of [null, ...Object.keys(avatar ? entry.avatarExpressions : entry.expressions)]) {
      const node = expression ? { [avatar ? 'avatarExpression' : 'expression']: expression } : {};
      const result = presentation.resolvePortrait(story, 'huangqiuqiu', node, { qiuForm: form }, avatar);
      assetFile(result.source, form + '/' + expression);
      assert.equal(result.form, form);
      assert.equal(result.presentation, form === 'sphere' ? 'orb' : 'human');
      assert.equal(result.dedicatedAvatar, avatar);
      variants++;
    }
    assert.throws(() => presentation.resolvePortrait(story, 'huangqiuqiu', { [avatar ? 'avatarExpression' : 'expression']: 'missing' }, { qiuForm: form }, avatar), /画面缺失/);
  }
  return { forms: ['sphere', 'human'], resolvedVariants: variants, missingVariantRejections: 4 };
});

test('25条精确背景修正正确，其他已定场景不受扩大覆盖；9个章末使用程序底色', () => {
  const corrections = new Map(map.scenes.flatMap(scene => scene.nodeOverrides).map(row => [row.nodeId, row]));
  assert.equal(corrections.size, 25);
  const decision = json('任务拆分/全十章/presentation/decisions.json');
  assert.equal(decision.unspecifiedLocations.status, 'confirmed-by-user');
  // E09书面决策：这一概述先写夹菜的饭桌，随后才到饭后路口，不能整段铺街道。
  const contextualBackgrounds = { tc_c07_piao_friends_005: 'tc-bg-food-day', tc_c07_piao_friends_006: 'tc-bg-food-day' };
  for (const [id, bg, character] of [
    ['tc_c07_piao_friends_005', 'tc-bg-food-day', 'maolang'],
    ['tc_c07_piao_friends_006', 'tc-bg-food-day', 'piao'],
    ['tc_c07_piao_friends_007', 'tc-bg-street-day', 'maolang']
  ]) {
    assert.equal(effectiveBg(story.nodes[id]), bg, id + '饭桌/饭后背景');
    assert.equal(story.nodes[id].character, character, id + '饭桌/饭后人物');
  }
  let checked = 0, gateContext = 0, neutral = 0;
  for (const sceneMap of map.scenes) {
    const scene = story.scenes[sceneMap.id];
    if (sceneMap.status === 'non-image-presentation-required') {
      assert.equal(scene.chronology.domain, 'chapter-range');
      assert.equal(story.backgrounds[scene.bg], 'none');
      assert.equal(scene.location, ''); neutral++;
    }
    for (const id of sceneMap.nodeIds) {
      const node = story.nodes[id], correction = corrections.get(id);
      if (node.type === 'gate') {
        assert(!own(node, 'bg'), id + '门禁不应写bg');
        if (correction) {
          assert.equal(correction.application, 'scene-context-only-do-not-bind-gate-bg');
          gateContext++;
        }
        continue;
      }
      if (sceneMap.status === 'non-image-presentation-required') {
        assert.equal(story.backgrounds[effectiveBg(node)], 'none', id); continue;
      }
      // 用户已确认18处未点名场景采用A06候选背景；只换演出，不补写地点。
      const expected = correction?.assetId ?? contextualBackgrounds[id] ?? sceneMap.suggestedBgId ?? sceneMap.candidateBgId;
      if (expected != null) { assert.equal(effectiveBg(node), expected, id + '背景范围不符'); checked++; }
    }
  }
  const confirmedCandidates = map.scenes.filter(scene => scene.candidateBgId);
  assert.equal(confirmedCandidates.length, 18);
  for (const sceneMap of confirmedCandidates) assert.equal(story.scenes[sceneMap.id].bg, sceneMap.candidateBgId, sceneMap.id);
  assert.equal(neutral, 9); assert.equal(gateContext, 1);
  return { preciseOverrides: 25, displayOverrides: 24, gateContextOnly: 1, checkedDisplayNodes: checked, neutralChapterEnds: 9, userConfirmedCandidateScenes: confirmedCandidates.length, contextualFoodBackgrounds: Object.keys(contextualBackgrounds), followingStreetNode: 'tc_c07_piao_friends_007' };
});

test('4张CG精确绑定A06允许节点，退出节点清空且无范围外CG', () => {
  assert.deepEqual(Object.keys(story.cgs).sort(), cgRules.map(rule => rule.id).sort());
  const bound = new Set();
  for (const rule of cgRules) {
    const actual = Object.values(story.nodes).filter(node => node.cg === rule.id).map(node => node.id).sort();
    assert.deepEqual(actual, [...rule.allowedNodeIds].sort(), rule.id + '绑定范围');
    assert.equal(story.cgs[rule.id].image, rule.file);
    assert.deepEqual(story.cgs[rule.id].allowedNodeIds, rule.allowedNodeIds, rule.id + '运行允许节点');
    assert.deepEqual(story.cgs[rule.id].conditions, rule.conditions, rule.id + '运行条件');
    assert.equal(story.cgs[rule.id].requiresEventPreviouslyExecuted, rule.requiresEventPreviouslyExecuted, rule.id + '前序事件');
    for (const id of actual) { assert.equal(story.nodes[id].type, 'line'); bound.add(id); }
    assert(!story.nodes[rule.exitBefore].cg, rule.id + '未在精确退出点清空');
    if (rule.clearBeforeChoice) assert(!story.nodes[rule.clearBeforeChoice].cg);
    for (const node of Object.values(story.nodes)) {
      if ((rule.forbiddenNodePrefixes || []).some(prefix => node.id.startsWith(prefix))) assert.notEqual(node.cg, rule.id);
    }
  }
  assert.equal(Object.values(story.nodes).filter(node => node.cg).length, bound.size);
  return { cgs: 4, boundNodes: bound.size, allowedNodeIds: Object.fromEntries(cgRules.map(rule => [rule.id, rule.allowedNodeIds])), exactExits: cgRules.map(rule => rule.exitBefore) };
});

test('正式canShowCG接受合法四组CG，拒绝伪造人形/缺变身历史/错误婚宴状态/范围外节点', () => {
  assert.equal(typeof presentation.canShowCG, 'function');
  const qiu = { qiuSignal: 'record', qiuReply: 'reply', route: 'huangqiuqiu' };
  const legal = new Map();
  for (const rule of cgRules) {
    const selections = rule.id === 'tc-cg-piao-choice' ? { route: 'piao' } : qiu;
    const engine = reach(new StoryEngine(story), rule.enterAt, selections);
    assert.equal(engine.current().cg, rule.id);
    assert.equal(presentation.canShowCG(story, engine.current(), engine.state), true, rule.id);
    legal.set(rule.id, { node: engine.current(), state: engine.snapshot() });
  }
  const rejected = [];
  function reject(name, node, state) {
    assert.equal(presentation.canShowCG(story, node, state), false, name); rejected.push(name);
  }
  const qiuCG = legal.get('tc-cg-qiuqiu-transform');
  const forgedHuman = new StoryEngine(story).snapshot(); forgedHuman.flags.qiuForm = 'human';
  reject('仅伪造人形标记、无真实路线资格', qiuCG.node, forgedHuman);
  const missingReveal = clone(qiuCG.state);
  missingReveal.history = missingReveal.history.filter(row => row.nodeId !== story.cgs[qiuCG.node.cg].requiresEventPreviouslyExecuted);
  reject('条件标记齐全但缺少变身事件历史', qiuCG.node, missingReveal);
  const sphere = clone(qiuCG.state); sphere.flags.qiuForm = 'sphere';
  reject('球形状态提前显示变身后CG', qiuCG.node, sphere);
  const wedding = legal.get('tc-cg-piao-wedding');
  const dating = clone(wedding.state); dating.flags.route = 'piao'; dating.flags.piaoRelationship = 'dating';
  reject('飘交往路径误用公共婚宴', wedding.node, dating);
  const missingRoute = clone(wedding.state); delete missingRoute.flags.route;
  reject('婚宴未选择路线', wedding.node, missingRoute);
  const wrongRoute = clone(wedding.state); wrongRoute.flags.route = 'invalid';
  reject('婚宴路线不在契约范围', wedding.node, wrongRoute);
  const piaoFriends = reach(new StoryEngine(story), wedding.node.id, { route: 'piao', piaoRelationship: 'friends' });
  assert.equal(presentation.canShowCG(story, piaoFriends.current(), piaoFriends.state), true);
  for (const [id, example] of legal) {
    reject(id + '范围外节点伪造cg字段', { ...story.nodes[story.start], cg: id }, example.state);
    reject(id + '精确退出节点', story.nodes[cgRules.find(rule => rule.id === id).exitBefore], example.state);
  }
  return { legalCgGroups: [...legal.keys()], legalPiaoFriendsWedding: true, rejectedCount: rejected.length, rejected };
});

let routeCoverage;
test('正式StoryEngine穷举736条真实路径、全部显示资源与CG合法状态，终态逐条恢复', () => {
  const nodes = new Set(), options = new Set(), endings = new Map(), epilogues = new Map();
  const routeCounts = {}, cgVisits = {}, forms = {}, flashbacks = new Set(), chapterEnds = new Set();
  const resolved = new Set(), actualAssets = new Set();
  let paths = 0, displayedVisits = 0, restoredEndings = 0;
  const early = ['qiuSignal', 'reunion', 'qiuReply', 'missedGame', 'yelanFirst'];
  const choiceByFlag = Object.fromEntries(contract.choices.map(choice => [choice.flag, choice]));
  for (let mask = 0; mask < 32; mask++) {
    const prefix = Object.fromEntries(early.map((flag, bit) => [flag, choiceByFlag[flag].options[(mask >> bit) & 1].value]));
    for (const route of contract.routes.map(route => route.id)) {
      if (route === 'huangqiuqiu' && (prefix.qiuSignal !== 'record' || prefix.qiuReply !== 'reply')) continue;
      for (const outing of choiceByFlag[route + 'Outing'].options.map(option => option.value)) {
        for (const relationship of route === 'friends' ? [null] : ['dating', 'friends']) {
          const selections = { ...prefix, route, [route + 'Outing']: outing, ...(relationship ? { [route + 'Relationship']: relationship } : {}) };
          let lastPresentDay = 0, pathEpilogues = 0, seenReveal = false;
          const engine = finish(new StoryEngine(story), selections, (node, runtime) => {
            displayedVisits++; nodes.add(node.id);
            const scene = story.scenes[node.scene], chronology = scene.chronology;
            if (node.id === 'tc_c08_huangqiuqiu_human_reveal') seenReveal = true;
            assert.equal(runtime.state.flags.qiuForm, seenReveal ? 'human' : 'sphere', node.id + '形态历史');
            if (chronology.domain === 'story-day') {
              assert.equal(scene.day, chronology.day);
              if (chronology.mode === 'present') { assert(scene.day >= lastPresentDay, node.id + '日序倒退'); lastPresentDay = scene.day; }
              else { assert.equal(scene.chapter, 6); assert.equal(scene.day, 30); flashbacks.add(node.scene); }
            } else if (chronology.domain === 'chapter-range') {
              assert.equal(node.type, 'end'); assert.equal(scene.day, null); assert.equal(scene.time, '章末');
              assert.equal(scene.location, ''); assert.equal(scene.dayLabel, contract.chapters[scene.chapter - 1].days); chapterEnds.add(node.id);
            } else { assert.equal(chronology.domain, 'two-years-later'); assert.equal(scene.day, null); assert.equal(scene.dayLabel, '两年后'); }
            if (node.type === 'choice') {
              const value = selections[node.flag];
              assert(runtime.availableChoices().some(row => row.option.value === value));
              options.add(node.id + ':' + value);
            }
            if (contract.epilogues.some(row => row.id === node.id)) {
              pathEpilogues++; epilogues.set(node.id, (epilogues.get(node.id) || 0) + 1);
              assert.equal(node.id, route === 'piao' && relationship === 'dating' ? 'tc_c10_common_piao_dating' : 'tc_c10_common_piao_wedding');
            }
            if (node.id.startsWith('tc_c10_common_')) assert.notEqual(node.character, 'huangqiuqiu');
            // 合法历史中的每个node/form组合都解析；静态字段相同的重复访问不重复读文件。
            const viewKey = node.id + ':' + runtime.state.flags.qiuForm;
            if (!resolved.has(viewKey)) {
              const bg = story.backgrounds[effectiveBg(node)];
              if (bg !== 'none') actualAssets.add(assetFile(bg, node.id + '背景'));
              for (const [avatar, key] of [[false, node.character], [true, node.type === 'choice' || node.speaker === 'narrator' ? 'wenwen' : node.speaker]]) {
                const portrait = presentation.resolvePortrait(story, key, node, runtime.state.flags, avatar);
                if (portrait) {
                  actualAssets.add(assetFile(portrait.source, node.id + (avatar ? '头像' : '立绘')));
                  if (key === 'huangqiuqiu') {
                    assert.equal(portrait.form, seenReveal ? 'human' : 'sphere');
                    const category = portrait.form + (avatar ? '-avatar' : '-portrait');
                    forms[category] = (forms[category] || 0) + 1;
                  }
                }
              }
              resolved.add(viewKey);
            }
            if (node.cg) {
              const rule = cgRules.find(rule => rule.id === node.cg);
              assert(rule && rule.allowedNodeIds.includes(node.id), node.id + 'CG越界');
              assert(conditionsHold(rule.conditions, runtime.state.flags), node.id + 'CG状态非法');
              assert.equal(presentation.canShowCG(story, node, runtime.state), true, node.id + '播放器拒绝合法CG');
              if (rule.requiresEventPreviouslyExecuted) assert(seenReveal, node.id + 'CG抢在变身前');
              if (rule.explicitlyExcluded) assert(!conditionsHold(rule.explicitlyExcluded, runtime.state.flags));
              if (rule.relationshipCondition?.startsWith('none')) assert(!own(runtime.state.flags, route + 'Relationship'));
              actualAssets.add(assetFile(story.cgs[node.cg].image, node.id + 'CG')); cgVisits[node.cg] = (cgVisits[node.cg] || 0) + 1;
            }
          });
          const expected = `tc_c10_${route}_end${route === 'friends' ? '' : '_' + relationship}`;
          assert.equal(engine.current().id, expected); assert.equal(pathEpilogues, 1);
          const ending = contract.endings.find(ending => ending.id === expected);
          assert(conditionsHold(ending.requires, engine.state.flags));
          assert.equal(engine.state.flags.qiuForm, route === 'huangqiuqiu' ? 'human' : 'sphere');
          if (route === 'piao') assert.equal(engine.state.choices.filter(row => row.nodeId.includes('relationship_choice')).length, 1);
          if (route === 'friends') assert(!Object.keys(engine.state.flags).some(flag => flag.endsWith('Relationship')));
          const snapshot = engine.snapshot();
          assert.deepEqual(new StoryEngine(story, snapshot).snapshot(), snapshot); restoredEndings++;
          endings.set(expected, (endings.get(expected) || 0) + 1); routeCounts[route] = (routeCounts[route] || 0) + 1; paths++;
        }
      }
    }
  }
  assert.equal(paths, 736); assert.equal(options.size, 43);
  assert.deepEqual([...endings.keys()].sort(), contract.endings.map(ending => ending.id).sort());
  assert.deepEqual([...nodes].sort(), Object.values(story.nodes).filter(node => node.type !== 'gate').map(node => node.id).sort());
  assert.equal(chapterEnds.size, 9); assert.equal(flashbacks.size, 2);
  assert.deepEqual(Object.keys(cgVisits).sort(), cgRules.map(rule => rule.id).sort());
  for (const form of ['sphere-portrait', 'sphere-avatar', 'human-portrait', 'human-avatar']) assert(forms[form] > 0, form + '未在真实路径出现');
  routeCoverage = { paths, displayedVisits, displayedNodes: nodes.size, resolvedNodeFormPairs: resolved.size, choices: 19, options: 43, endings: Object.fromEntries(endings), epilogues: Object.fromEntries(epilogues), routeCounts, restoredEndings, flashbacks: [...flashbacks], chapterEnds: chapterEnds.size, resolvedForms: forms, cgVisits, actuallyResolvedAssets: actualAssets.size };
  return routeCoverage;
});

test('正式故事重选和自动事件恢复保留正确历史形态', () => {
  const qiu = { qiuSignal: 'record', qiuReply: 'reply', route: 'huangqiuqiu' };
  const engine = finish(new StoryEngine(story), { ...qiu, huangqiuqiuRelationship: 'dating' });
  assert.equal(engine.replayChoice(story.routeChoice), true);
  assert.equal(engine.state.flags.qiuForm, 'sphere'); assert.equal(engine.state.flags.qiuMet, true);
  assert(!own(engine.state.flags, 'route'));
  assert.deepEqual(engine.snapshot(), reach(new StoryEngine(story), story.routeChoice, qiu).snapshot());
  finish(engine, { route: 'xiaoman', xiaomanRelationship: 'friends' });
  assert.equal(engine.current().id, 'tc_c10_xiaoman_end_friends');
  const human = finish(new StoryEngine(story), { ...qiu, huangqiuqiuRelationship: 'dating' });
  assert.equal(human.replayChoice('tc_c09_huangqiuqiu_relationship_choice'), true);
  assert.equal(human.state.flags.qiuForm, 'human');
  assert(!own(human.state.flags, 'huangqiuqiuRelationship'));
  finish(human, { huangqiuqiuRelationship: 'friends' });
  assert.equal(human.current().id, 'tc_c10_huangqiuqiu_end_friends');
  const aroundEvents = [];
  for (const event of contract.automaticEvents) {
    const current = reach(new StoryEngine(story), event.nodeId, qiu), snapshot = current.snapshot();
    assert.deepEqual(new StoryEngine(story, snapshot).snapshot(), snapshot);
    current.enter(event.nodeId); assert.deepEqual(current.snapshot(), snapshot);
    aroundEvents.push({ nodeId: event.nodeId, flags: snapshot.flags });
  }
  return { routeReselect: true, relationshipReselect: true, automaticEvents: aroundEvents };
});

const runtimeFiles = ['story.js', 'engine.js', 'save-compat.js', 'player-runtime.js', 'game.js', 'index.html', 'styles.css', '任务拆分/三章扩展/build-story.cjs', '任务拆分/全十章/build/formal.cjs', '任务拆分/全十章/build/compiler.cjs', '任务拆分/全十章/build/graph.cjs', '任务拆分/全十章/校验/E08/fixture.cjs', '任务拆分/全十章/校验/E09/verify-candidate.cjs'];
const report = {
  scope: 'E09 根目录正式候选：源一致性、真实引擎完整路径、实际采用资源与精确绑定验证',
  date: '2026-10-23', generatedAt: new Date().toISOString(),
  target: 'story.js', contractVersion: contract.contractVersion, contentRevision: contract.contentRevision,
  formalIntegration: story.release === 'ten-chapter', finalAcceptance: false,
  evidenceLayer: 'formal-story-static-and-real-engine', playerStorageAccessed: false,
  summary: { total: results.length, passed: results.filter(result => result.status === 'passed').length, failed: results.filter(result => result.status === 'failed').length },
  inputFiles: ['任务拆分/全十章/contract.json', ...moduleFiles.map(file => '任务拆分/全十章/' + file), 'assets/ten-chapter/a06-adoption.json', 'assets/ten-chapter/a06-scene-node-map.json', 'assets/runtime-ten-chapter-manifest.json', '任务拆分/全十章/presentation/bindings.json', '任务拆分/全十章/校验/E09/build-report.json'].filter(file => fs.existsSync(path.join(root, file))).map(fingerprint),
  testedRuntime: runtimeFiles.filter(file => fs.existsSync(path.join(root, file))).map(fingerprint),
  routeCoverage, results,
  notValidated: ['E10最终逐句阅读与剧情体验验收', '本脚本不执行浏览器视觉/实体手机/声音验收', '发布与线上版本']
};
const output = path.join(__dirname, 'candidate-results.json');
fs.writeFileSync(output, JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify({ ...report.summary, paths: routeCoverage?.paths, target: 'story.js', report: path.relative(root, output) }));
for (const result of results.filter(result => result.status === 'failed')) console.error(result.name + '\n' + result.error);
if (report.summary.failed) process.exitCode = 1;
