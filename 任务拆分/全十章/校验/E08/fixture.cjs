'use strict';

// E08 隔离运行数据：只读全部真实十章源，使用 E02 编译器在内存组合。
// sample:// 资源仅满足运行逻辑测试，不是 A06 采用、E09 演出或正式接入。
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '../../../..');
const base = path.join(root, '任务拆分/全十章');
const { readJSON } = require(path.join(base, 'build/json.cjs'));
const { compileProject } = require(path.join(base, 'build/compiler.cjs'));
const clone = value => JSON.parse(JSON.stringify(value));
const contract = readJSON(path.join(base, 'contract.json'));
const moduleFiles = [...contract.chapters.map(ch => ch.commonModule), ...contract.routes.map(route => route.file)];
let bundle;

function createBundle() {
  if (!bundle) {
    const modules = moduleFiles.map(file => readJSON(path.join(base, file)));
    const bindings = {
      schemaVersion: 1, contractVersion: contract.contractVersion, contentRevision: contract.contentRevision,
      characters: Object.fromEntries(contract.characters.map(character => [character.id, { name: character.name }])),
      backgrounds: {}, cgs: {}, scenes: {}, nodes: {}
    };
    for (const module of modules) {
      for (const value of [...Object.values(module.scenes), ...Object.values(module.nodes)]) {
        if (value.bg) bindings.backgrounds[value.bg] = 'sample://e08-runtime-logic/' + value.bg;
      }
    }
    const inputFiles = ['contract.json', ...moduleFiles].map(file => ({
      file: path.relative(root, path.join(base, file)),
      sha256: crypto.createHash('sha256').update(fs.readFileSync(path.join(base, file))).digest('hex')
    }));
    bundle = compileProject({
      manifest: {
        schemaVersion: 1, contractVersion: contract.contractVersion, contentRevision: contract.contentRevision,
        mode: 'candidate', modules: moduleFiles, bindings: ['E08-in-memory-logic-bindings.json']
      },
      contract, modules, bindings: [bindings], inputFiles
    });
  }
  return clone(bundle);
}

function createStory() { return createBundle().story; }

// 指定 node.id 或 flag 的值；字符串匹配 option.value，数字使用原始选项下标。
// 没有指定的选择使用第一个实际可见选项，避免绕过隐藏资格。
function chooseConfigured(engine, selections = {}) {
  const node = engine.current();
  assert.equal(node.type, 'choice');
  const selection = Object.hasOwn(selections, node.id) ? selections[node.id] : selections[node.flag];
  const index = selection === undefined ? engine.availableChoices()[0]?.index :
    typeof selection === 'number' ? selection : node.choices.findIndex(option => option.value === selection);
  assert.equal(engine.choose(index), true, `无法选择 ${node.id}: ${String(selection)}`);
}

function walk(engine, target, selections = {}, visit) {
  const reached = typeof target === 'function' ? target : node => node.id === target;
  for (let step = 0; step <= Object.keys(engine.story.nodes).length; step++) {
    const node = engine.current();
    if (visit) visit(node, engine);
    if (reached(node, engine)) return engine;
    if (node.type === 'choice') chooseConfigured(engine, selections);
    else assert.equal(engine.advance(), true, `在 ${node.id} 结束，未到达 ${String(target)}`);
  }
  assert.fail('超过真实节点数，疑似运行循环');
}

function reach(engine, target, selections = {}, visit) { return walk(engine, target, selections, visit); }
function finish(engine, selections = {}, visit) {
  return walk(engine, node => node.type === 'end' && !node.next, selections, visit);
}

function sourceNode(chapter, line) {
  const data = createBundle();
  const source = contract.baseline.sourceManifest.find(row => row.chapter === chapter);
  const row = data.sourceMap.sourceMap.find(row => row.file === source.file &&
    row.startLine <= line && row.endLine >= line && ['dialogue', 'narration'].includes(row.kind));
  assert(row && row.nodeIds.length === 1, `不能唯一定位第 ${chapter} 章第 ${line} 行`);
  return data.story.nodes[row.nodeIds[0]];
}

module.exports = { root, base, contract, moduleFiles, createBundle, createStory, chooseConfigured, reach, finish, sourceNode, clone };
