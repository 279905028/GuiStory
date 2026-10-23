'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const assert = require('node:assert/strict');
const { readJSON } = require('./json.cjs');
const { validateGraph } = require('./graph.cjs');
const base = path.resolve(__dirname, '..');
const root = path.resolve(base, '../..');
const clone = value => JSON.parse(JSON.stringify(value));
const hash = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const check = (ok, message) => { if (!ok) throw new Error(message); };
const record = value => !!value && typeof value === 'object' && !Array.isArray(value);
const string = value => typeof value === 'string' && value.length > 0;
const same = (a, b, label) => assert.deepEqual(a, b, label);
const unique = (values, label) => check(new Set(values).size === values.length, label + '重复');
function shape(value, required, optional, label) {
  check(record(value), label + '必须为对象');
  for (const key of required) check(Object.hasOwn(value, key), label + '缺少 ' + key);
  for (const key of Object.keys(value)) check([...required, ...optional].includes(key), label + '未知字段 ' + key);
}
function version(value, contract, label) {
  same(value.schemaVersion, 1, label + ' schemaVersion');
  same(value.contractVersion, contract.contractVersion, label + ' contractVersion');
  same(value.contentRevision, contract.contentRevision, label + ' contentRevision');
}
function ids(id) {
  const match = /^(?:tc|ts)_c(\d{2})_([^_]+)_/.exec(id);
  check(match, '非法 ID ' + id);
  return { chapter: Number(match[1]), scope: match[2] };
}
function moduleSpec(moduleId, contract) {
  const common = /^common\/ch(0[1-9]|10)$/.exec(moduleId);
  if (common) return { owner: 'E03', scope: 'common', chapters: [Number(common[1])] };
  const route = contract.routes.find(r => moduleId === r.file.replace(/\.json$/, ''));
  check(route, '未知 moduleId ' + moduleId);
  return { owner: route.owner, scope: route.id, chapters: route.chapters.map(c => c.chapter), route };
}
function refs(node) {
  return [node.next, node.default, ...(node.choices || []).map(x => x.next), ...(node.cases || []).map(x => x.next)].filter(x => x != null);
}
function localJSON(directory, relative) {
  check(string(relative) && !path.isAbsolute(relative) && relative.endsWith('.json'), '输入必须为相对 JSON 路径');
  const file = path.resolve(directory, relative);
  const real = fs.realpathSync(file);
  check(real.startsWith(fs.realpathSync(base) + path.sep), '输入不能越出独立十章源目录 ' + relative);
  return file;
}
function loadProject(manifestPath) {
  const manifestFile = path.resolve(manifestPath);
  check(fs.realpathSync(manifestFile).startsWith(fs.realpathSync(base) + path.sep), '清单必须位于独立十章源目录');
  const manifest = readJSON(manifestFile);
  check(Array.isArray(manifest.modules) && Array.isArray(manifest.bindings), '清单缺少 modules/bindings');
  const inputs = [manifestFile, path.join(base, 'contract.json')];
  const load = relative => { const file = localJSON(path.dirname(manifestFile), relative); inputs.push(file); return readJSON(file); };
  const project = { manifest, modules: manifest.modules.map(load), bindings: manifest.bindings.map(load), contract: readJSON(path.join(base, 'contract.json')) };
  unique(inputs, '输入文件');
  project.inputFiles = inputs.map(file => ({ file: path.relative(root, file), sha256: hash(fs.readFileSync(file)) }));
  return project;
}

function compileProject(project) {
  const { manifest, contract: c } = project;
  shape(manifest, ['schemaVersion','contractVersion','contentRevision','mode','modules','bindings'], ['sample'], '构建清单');
  version(manifest, c, '构建清单');
  check(['sample', 'candidate'].includes(manifest.mode), '仅支持 sample/candidate 隔离构建');
  check(Array.isArray(manifest.modules) && manifest.modules.length > 0, '模块清单不能为空');
  check(Array.isArray(manifest.bindings), 'bindings 必须为数组');
  same(project.modules.length, manifest.modules.length, '模块清单数量');
  same(project.bindings.length, manifest.bindings.length, '绑定清单数量');
  const sample = manifest.mode === 'sample';
  if (sample) {
    shape(manifest.sample, ['start','stops'], [], 'sample');
    check(string(manifest.sample.start) && Array.isArray(manifest.sample.stops) && manifest.sample.stops.length > 0, '样例必须显式指定起点与停止边界');
    unique(manifest.sample.stops, '样例边界');
  } else check(!Object.hasOwn(manifest, 'sample'), '候选完整构建不能声明样例边界');
  // 复用只读契约检查，不调用会覆盖 E01 历史报告的 main。
  require('../verify-contract.cjs').validate(c);
  const sourceLines = Object.fromEntries(c.baseline.sourceManifest.map(s => [s.file, fs.readFileSync(path.join(root, s.file), 'utf8').split('\n')]));
  const story = {
    version: c.interface.storyVersion, title: '毕节，雨停之前', release: 'ten-chapter-isolated',
    contractVersion: c.contractVersion, contentRevision: c.contentRevision,
    requiredCapabilities: clone(c.interface.requiredCapabilities), initialFlags: clone(c.interface.initialFlags),
    start: sample ? manifest.sample.start : c.interface.start,
    routeChoice: c.interface.routeChoice, previewChoice: null,
    chapters: {}, characters: {}, backgrounds: {}, cgs: {}, scenes: {}, nodes: {}
  };
  const nodeModules = {}, sceneModules = {}, specs = {}, modules = {}, sourceMap = [], exclusions = [], assetRequests = [];
  const mapped = new Set(), sourceOwners = new Map(), bodyLines = new Map(), excludedLines = new Map(), coveredLines = new Set();
  function owns(spec, id) { const p = ids(id); return p.scope === spec.scope && spec.chapters.includes(p.chapter); }
  function condition(condition, spec, label) {
    shape(condition, ['flag','value'], [], label);
    const state = c.states[condition.flag];
    check(state && state.values.includes(condition.value), label + '状态或枚举值非法');
    check(state.readers.includes(spec.owner), label + '越权读取 ' + condition.flag);
    if (spec.route) check(spec.route.readFlags.includes(condition.flag), label + '跨路线读取 ' + condition.flag);
  }
  function conditions(conditions, spec, label) {
    check(Array.isArray(conditions), label + '必须为条件数组');
    unique(conditions.map(x => x.flag), label + '条件字段');
    conditions.forEach(x => condition(x, spec, label));
  }
  function write(flag, value, node, spec, kind) {
    const state = c.states[flag];
    check(state && state.values.includes(value), node.id + '写入非法状态 ' + flag);
    same(state.writer, { owner: spec.owner, nodeId: node.id, kind }, node.id + '必须使用契约唯一写入点');
    if (spec.route) check(spec.route.writeFlags.includes(flag) || (kind === 'onEnter' && flag === 'qiuForm' && spec.scope === 'huangqiuqiu'), node.id + '跨路线写入');
  }
  function range(row, spec, label, exclusion = false) {
    check(sourceLines[row.file], label + '来源不在基线');
    check(Number.isInteger(row.startLine) && Number.isInteger(row.endLine) && row.startLine >= 1 && row.endLine >= row.startLine && row.endLine <= sourceLines[row.file].length, label + '来源范围非法');
    const ch = c.chapters.find(ch => ch.sections.some(s => s.source.file === row.file));
    check(ch && spec.chapters.includes(ch.id), label + '来源章节越权');
    const section = ch.sections.find(s => s.scope === spec.scope);
    check(section, label + '来源路线越权');
    // 共通可登记文件前后的导航排除项；正文和控制依据必须位于自己的章段。
    check(exclusion && spec.scope === 'common' && !ch.sections.some(s => s.scope !== 'common' && row.startLine <= s.source.endLine && row.endLine >= s.source.startLine) || row.startLine >= section.source.startLine && row.endLine <= section.source.endLine, label + '来源段越权');
    return ch;
  }
  for (const original of project.modules) {
    const m = clone(original), label = m.moduleId;
    shape(m, c.interface.moduleFormat.required, [], '模块 ' + label);
    version(m, c, label);
    check(!modules[label], '重复模块 ' + label);
    const spec = moduleSpec(label, c); same(m.owner, spec.owner, label + '所有者');
    specs[label] = spec; modules[label] = m;
    for (const key of ['scenes','nodes','exports']) check(record(m[key]), label + '.' + key + '必须为对象');
    for (const key of ['imports','sourceMap','exclusions','assetRequests']) check(Array.isArray(m[key]), label + '.' + key + '必须为数组');
    check(Object.keys(m.nodes).length > 0 && Object.keys(m.scenes).length > 0, label + '禁止空模块');
    unique(m.imports, label + ' imports');
    for (const [id, scene] of Object.entries(m.scenes)) {
      check(new RegExp(c.interface.sceneIdPattern).test(id) && owns(spec, id), label + '非法或越权场景 ' + id);
      check(!story.scenes[id], '重复场景 ID ' + id);
      shape(scene, c.interface.scenes.required, [], id);
      same(scene.chapter, ids(id).chapter, id + ' chapter');
      for (const field of ['title','bg','time']) check(string(scene[field]), id + '缺少 ' + field);
      check(typeof scene.location === 'string', id + ' location必须为字符串');
      shape(scene.chronology, ['domain','mode'], ['day','clock','label'], id + '.chronology');
      const t = scene.chronology, ch = c.chapters[scene.chapter - 1];
      check(c.interface.scenes.chronology.domain.includes(t.domain) && c.interface.scenes.chronology.mode.includes(t.mode), id + '日序域非法');
      if (Object.hasOwn(t, 'clock')) same(t.clock,scene.time,id + ' clock与time不一致');
      if (Object.hasOwn(t, 'label')) check(string(t.label),id + ' chronology.label');
      if (t.domain === 'story-day') {
        check(Number.isInteger(t.day) && t.day >= ch.dayRange?.[0] && t.day <= ch.dayRange?.[1], id + '日序越界');
        same(scene.day, t.day, id + ' day'); same(scene.dayLabel, `第${t.day}天`, id + ' dayLabel');
        scene.day = t.day; scene.dayLabel = `第${t.day}天`;
      } else if (t.domain === 'two-years-later') {
        check(scene.chapter === 10 && t.day == null, id + '两年后不能推算日序');
        same(scene.day, null, id + ' day'); same(scene.dayLabel, '两年后', id + ' dayLabel');
      } else {
        check(spec.scope === 'common' && scene.chapter < 10 && t.day == null && t.mode === 'present', id + '中性章末范围非法');
        same([scene.day,scene.dayLabel,scene.time,scene.location], [null,ch.days,'章末',''], id + '章末显示');
      }
      if (t.mode === 'flashback') check(scene.chapter === 6 && c.timeline.chapter6Flashbacks.some(x => x.route === spec.scope && x.day === t.day && x.time === scene.time), id + '未经契约声明的回叙');
      story.scenes[id] = scene; sceneModules[id] = label;
    }
    for (const [id, node] of Object.entries(m.nodes)) {
      check(new RegExp(c.interface.nodeIdPattern).test(id) && owns(spec, id), label + '非法或越权节点 ' + id);
      check(!story.nodes[id], '重复节点 ID ' + id); same(node.id, id, id + '键与node.id不一致');
      const fields = c.interface.nodeFields[node.type]; check(fields, id + '未知节点类型');
      shape(node, fields.required, fields.optional, id);
      check(m.scenes[node.scene] && ids(node.scene).chapter === ids(id).chapter, id + '场景必须属于本模块同章');
      if (Object.hasOwn(node, 'text')) check(typeof node.text === 'string', id + '.text必须为字符串');
      if (Object.hasOwn(node,'character')) check(node.character === null || c.characters.some(x => x.id === node.character),id + '非法在场角色');
      for (const field of ['expression','avatarExpression','bg','time']) if (Object.hasOwn(node,field)) check(string(node[field]),id + '非法 ' + field);
      if (Object.hasOwn(node,'location')) check(typeof node.location === 'string',id + ' location必须为字符串');
      if (Object.hasOwn(node,'cg')) check(node.cg === null || string(node.cg),id + ' cg格式');
      if (node.type === 'line') {
        check(node.speaker === 'narrator' || c.characters.some(x => x.id === node.speaker), id + '未知speaker');
        check(string(node.next) || sample && manifest.sample.stops.includes(id) && node.next === null, id + ' line.next缺失');
        const event = c.automaticEvents.find(e => e.nodeId === id);
        if (event) {
          same(node.onEnter, {requires:event.requires,setFlags:event.setFlags}, id + '自动事件必须原样匹配');
          const scene = m.scenes[node.scene]; same([scene.day,node.time || scene.time], [event.day,event.time], id + '自动事件日时');
        } else check(!Object.hasOwn(node, 'onEnter'), id + '未经登记的自动事件');
        if (node.onEnter) {
          conditions(node.onEnter.requires, spec, id + '.onEnter.requires');
          for (const [flag, value] of Object.entries(node.onEnter.setFlags)) write(flag, value, node, spec, 'onEnter');
        }
      }
      if (node.type === 'choice') {
        const q = c.choices.find(q => q.id === id); check(q && q.flag === node.flag, id + '不是契约选择');
        check(Array.isArray(node.choices) && node.choices.length === q.options.length, id + '选项数量');
        node.choices.forEach((o, i) => {
          shape(o, c.interface.optionFields.required, c.interface.optionFields.optional, id + ' option');
          same([o.label,o.value,o.requires || []], [q.options[i].label,q.options[i].value,q.options[i].requires], id + '选项顺序/文案/条件');
          check(string(o.next), id + '选项 next'); conditions(o.requires || [], spec, id + ' option.requires');
          write(node.flag, o.value, node, spec, 'choice');
        });
      }
      if (node.type === 'gate') {
        check(Array.isArray(node.cases) && node.cases.length > 0, id + '空 gate');
        if (Object.hasOwn(node, 'exhaustive')) check(typeof node.exhaustive === 'boolean', id + ' exhaustive必须布尔');
        check(node.exhaustive === true ? node.default === null : string(node.default), id + ' default:null仅用于exhaustive gate');
        unique(node.cases.map(x => JSON.stringify([x.flag,x.value])), id + ' gate条件');
        node.cases.forEach(x => { shape(x, c.interface.gateCaseFields.required, [], id + ' case'); check(string(x.next), id + ' gate.next'); condition({flag:x.flag,value:x.value}, spec, id); });
      }
      if (node.type === 'end') {
        check(string(node.title), id + '缺少结束标题');
        const ch = c.chapters[ids(id).chapter - 1];
        if (Object.hasOwn(node, 'next')) {
          same(id, ch.exit, id + '只能由共通章末跨章'); same(node.next, ch.next, id + '下一章入口');
          same(node.nextChapter, c.chapters[ch.id].title, id + '下一章标题');
          same(m.scenes[node.scene].chronology.domain, 'chapter-range', id + '必须使用中性章末场景');
          check(!Object.hasOwn(node, 'endingId'), id + '章末不是终结');
        } else {
          const ending = c.endings.find(e => e.id === id); check(ending && node.endingId === id, id + '未登记终结');
          check(!Object.hasOwn(node, 'nextChapter'), id + '终结不能有nextChapter');
        }
      }
      story.nodes[id] = node; nodeModules[id] = label;
    }
    const sourceRows = new Set();
    for (const row of m.sourceMap) {
      shape(row, ['file','startLine','endLine','nodeIds','kind'], [], label + ' sourceMap');
      check(['dialogue','narration','choice','scene-title','control'].includes(row.kind), label + ' sourceMap.kind');
      const ch = range(row, spec, label + ' sourceMap');
      check(Array.isArray(row.nodeIds) && row.nodeIds.length > 0, label + '来源未映射节点'); unique(row.nodeIds, label + '来源节点');
      const rowKey = JSON.stringify(row); check(!sourceRows.has(rowKey), label + '重复来源映射'); sourceRows.add(rowKey);
      for (const id of row.nodeIds) { check(m.nodes[id] && ids(id).chapter === ch.id, label + '来源指向非本章节点'); mapped.add(id); }
      for (let line = row.startLine; line <= row.endLine; line++) {
        const key = row.file + ':' + line;
        const previous = sourceOwners.get(key);
        check(!previous || previous === label, '重复来源所有者 ' + key);
        sourceOwners.set(key,label); coveredLines.add(key);
        if (['dialogue','narration'].includes(row.kind) && sourceLines[row.file][line-1].trim()) {
          check(!bodyLines.has(key), '重复正文来源 ' + key + '；同一行拆分时在同一条nodeIds中登记');
          bodyLines.set(key,row);
        }
      }
      sourceMap.push({...row,moduleId:label});
    }
    for (const row of m.exclusions) {
      shape(row, ['file','startLine','endLine','reason'], [], label + ' exclusion');
      check(['navigation','reading-rule','heading-only','choice-label-excerpt'].includes(row.reason), label + ' exclusion.reason');
      range(row, spec, label + ' exclusion', true);
      for (let line = row.startLine; line <= row.endLine; line++) {
        const key = row.file + ':' + line;
        check(!excludedLines.has(key), '重复排除来源 ' + key); excludedLines.set(key,row.reason); coveredLines.add(key);
      }
      exclusions.push({...row,moduleId:label});
    }
    for (const request of m.assetRequests) {
      const id = typeof request === 'string' ? request : request?.id;
      if (record(request)) { shape(request, ['id','a01Ids'], [], label + '资产请求'); check(Array.isArray(request.a01Ids) && request.a01Ids.every(string), label + ' a01Ids'); }
      const semantic = c.assetRequests.find(x => x.id === id);
      check(semantic && spec.chapters.includes(semantic.chapter) && semantic.routes.includes(spec.scope), label + '未知或越权资产语义 ' + id);
      assetRequests.push({moduleId:label,request});
    }
    for (const [publicId, localId] of Object.entries(m.exports)) check(publicId === localId && Object.hasOwn(m.nodes, localId), label + ' exports必须指向同名真实本地节点');
  }
  for (const [key,reason] of excludedLines) check(!bodyLines.has(key) || reason === 'choice-label-excerpt', '正文同时被排除 ' + key);
  for (const event of c.automaticEvents) {
    if (!story.nodes[event.nodeId]) continue;
    const rows = sourceMap.filter(x => x.nodeIds.includes(event.nodeId) && ['dialogue','narration'].includes(x.kind));
    check(rows.some(x => x.file === event.source.file && x.startLine <= event.source.line && x.endLine >= event.source.line), event.nodeId + '自动事件缺少精确来源锚点');
    same(story.nodes[event.nodeId].text,event.source.raw,event.nodeId + '自动事件必须位于独立原文行');
  }
  const observedChapters = [...new Set(Object.keys(story.scenes).map(id => ids(id).chapter))].sort((a,b) => a-b);
  for (const chapter of observedChapters) { const ch = c.chapters[chapter-1]; story.chapters[chapter] = {title:ch.title,days:ch.days}; }
  for (const [label, m] of Object.entries(modules)) {
    const external = new Set();
    for (const node of Object.values(m.nodes)) {
      check(mapped.has(node.id), node.id + '缺少来源映射');
      const from = ids(node.id);
      for (const next of refs(node)) {
        check(string(next) && story.nodes[next], node.id + '悬空引用 ' + next);
        const to = ids(next);
        if (from.scope !== 'common') check(to.chapter === from.chapter && (to.scope === from.scope || next === c.chapters[from.chapter-1].exit), node.id + '路线越界跳转 ' + next);
        else if (to.scope !== 'common') check(to.chapter === from.chapter && next === `tc_c${String(from.chapter).padStart(2,'0')}_${to.scope}_entry`, node.id + '共通只能分流至本章路线公开入口');
        else if (to.chapter !== from.chapter) check(node.type === 'end' && node.id === c.chapters[from.chapter-1].exit && next === c.chapters[from.chapter-1].next, node.id + '非法跨章跳转');
        if (nodeModules[next] !== label) {
          external.add(next); check(modules[nodeModules[next]].exports[next] === next, node.id + '引用未导出的节点 ' + next);
        }
      }
    }
    same([...external].sort(), [...m.imports].sort(), label + ' imports必须精确列出外部引用');
    for (const id of Object.keys(m.nodes)) {
      if (c.chapters.some(ch => [ch.entry,ch.exit,ch.dispatch].includes(id)) || c.routes.some(r => r.chapters.some(ch => ch.entry === id))) check(m.exports[id] === id, id + '公开接口未导出');
    }
  }
  if (!sample) {
    same(Object.keys(modules).sort(), [...c.chapters.map(x => x.commonModule),...c.routes.map(x => x.file)].map(x => x.replace(/\.json$/,'')).sort(), '完整候选必须包含17个模块');
    for (const id of [...c.chapters.flatMap(x => [x.entry,x.exit,x.dispatch]),...c.routes.flatMap(r => r.chapters.map(x => x.entry)),...c.choices.map(x => x.id),...c.automaticEvents.map(x => x.nodeId),...c.endings.map(x => x.id),...c.epilogues.map(x => x.id)].filter(Boolean)) check(story.nodes[id], '完整候选缺少契约节点 ' + id);
    const gaps = [];
    for (const [file, lines] of Object.entries(sourceLines)) lines.forEach((line,i) => { if (line.trim() && !coveredLines.has(file+':'+(i+1))) gaps.push(file+':'+(i+1)); });
    check(!gaps.length, '来源映射/排除遗漏 ' + gaps.slice(0,10).join(', '));
  }
  mergeBindings(story, project.bindings, c);
  const graph = validateGraph(story, c, {mode:manifest.mode,stops:sample ? manifest.sample.stops : []});
  const builderFiles = ['compiler.cjs','json.cjs','graph.cjs','cli.cjs'].map(file => path.join(__dirname,file)).concat(path.join(base,'verify-contract.cjs'),path.join(root,'任务拆分/三章扩展/build-story.cjs')).map(file => ({file:path.relative(root,file),sha256:hash(fs.readFileSync(file))}));
  const report = {scope:'E02 isolated compiler and static graph only',mode:manifest.mode,formalIntegration:false,contractVersion:c.contractVersion,contentRevision:c.contentRevision,sourceDigest:c.baseline.sourceDigest,moduleCount:project.modules.length,sceneCount:Object.keys(story.scenes).length,nodeCount:Object.keys(story.nodes).length,graph,inputFiles:project.inputFiles || [],builderFiles,notValidated:['完整正文逐句一致性与排除理由','每个门禁分支见证与每条结局唯一公共后日谈','E08真实引擎/存读档','A06资源采用及双形态差分完整性','浏览器/设备/声音/真人阅读','正式发布']};
  return {story,sourceMap:{contractVersion:c.contractVersion,contentRevision:c.contentRevision,sourceMap,exclusions,assetRequests},report};
}

function mergeBindings(story, bindings, c) {
  const touched = new Set();
  for (const b of bindings) {
    shape(b, ['schemaVersion','contractVersion','contentRevision','characters','backgrounds','cgs','scenes','nodes'], [], '演出绑定'); version(b,c,'演出绑定');
    for (const kind of ['characters','backgrounds','cgs','scenes','nodes']) {
      check(record(b[kind]), '绑定 ' + kind + '必须为对象');
      for (const [id,value] of Object.entries(b[kind])) {
        if (['characters','backgrounds','cgs'].includes(kind)) {
          check(!Object.hasOwn(story[kind],id), '重复资源绑定 ' + kind + '.' + id);
          if (kind === 'characters') { check(c.characters.some(x => x.id === id) && record(value), '未知角色绑定 ' + id); }
          if (kind === 'backgrounds') check(string(value), '背景值必须是路径/语义字符串');
          if (kind === 'cgs') check(record(value) && string(value.image), 'CG缺少image');
          story[kind][id] = clone(value);
        } else {
          check(story[kind][id], '绑定目标不存在 ' + id);
          const allowed = kind === 'scenes' ? ['bg'] : c.interface.nodeFields[story.nodes[id].type].optional.filter(x => ['character','expression','avatarExpression','bg','cg'].includes(x));
          shape(value, [], allowed, '演出覆盖 ' + id);
          for (const [field,v] of Object.entries(value)) {
            const key = kind+'.'+id+'.'+field; check(!touched.has(key), '重复演出覆盖 ' + key); touched.add(key);
            check(v === null && ['character','cg'].includes(field) || string(v), key + '格式非法');
            story[kind][id][field] = clone(v);
          }
        }
      }
    }
  }
  for (const [id,scene] of Object.entries(story.scenes)) check(Object.hasOwn(story.backgrounds,scene.bg), id + '缺少背景绑定 ' + scene.bg);
  for (const node of Object.values(story.nodes)) {
    if (node.bg) check(Object.hasOwn(story.backgrounds,node.bg), node.id + '背景绑定悬空');
    if (node.cg) check(Object.hasOwn(story.cgs,node.cg), node.id + 'CG绑定悬空');
    if (node.character) check(Object.hasOwn(story.characters,node.character), node.id + '角色绑定悬空');
    if (node.expression) check(node.character, node.id + '差分缺少角色');
    if (node.speaker && node.speaker !== 'narrator') check(Object.hasOwn(story.characters,node.speaker), node.id + '说话角色绑定缺失');
  }
}

module.exports = { loadProject, compileProject, mergeBindings, hash, base, root };
