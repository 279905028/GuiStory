'use strict';

// E02 的离线数据图验证，不执行播放器、不读取或写入任何存档。
const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
const matches = (flags, condition) => own(flags, condition.flag) && flags[condition.flag] === condition.value;
const matchesAll = (flags, conditions = []) => conditions.every(condition => matches(flags, condition));

function failure(message, details) {
  const error = new Error(`[E02 graph] ${message}`);
  if (details) error.details = details;
  throw error;
}

function scopeOf(id) {
  const match = /^tc_c(0[1-9]|10)_(common|xiaoman|zhouzhi|mengyao|yelan|piao|friends|huangqiuqiu)_/.exec(id);
  return match ? { chapter: Number(match[1]), route: match[2] } : null;
}

function choicesFrom(path) {
  const choices = [];
  for (let cursor = path; cursor; cursor = cursor.previous) choices.push(cursor.choice);
  return choices.reverse();
}

function graphEdges(node) {
  const edges = [];
  if (node.next !== undefined && node.next !== null) edges.push({ target: node.next, field: 'next' });
  (node.choices || []).forEach((option, index) => edges.push({ target: option.next, field: `choices[${index}].next` }));
  (node.cases || []).forEach((branch, index) => edges.push({ target: branch.next, field: `cases[${index}].next` }));
  if (node.default !== undefined && node.default !== null) edges.push({ target: node.default, field: 'default' });
  return edges;
}

// Kahn 检查涵盖不可达节点与隐藏分支，且不依赖 JavaScript 调用栈深度。
function checkStaticGraph(nodes, ids) {
  const edges = new Map();
  const incoming = new Map(ids.map(id => [id, 0]));
  let edgeCount = 0;
  for (const id of ids) {
    const outgoing = graphEdges(nodes[id]);
    edges.set(id, outgoing);
    for (const edge of outgoing) {
      if (typeof edge.target !== 'string' || !own(nodes, edge.target)) {
        failure(`${id}.${edge.field} 引用了不存在的节点 ${String(edge.target)}`);
      }
      incoming.set(edge.target, incoming.get(edge.target) + 1);
      edgeCount++;
    }
  }
  const ready = ids.filter(id => incoming.get(id) === 0);
  let processed = 0;
  for (let head = 0; head < ready.length; head++) {
    const id = ready[head];
    processed++;
    for (const edge of edges.get(id)) {
      const count = incoming.get(edge.target) - 1;
      incoming.set(edge.target, count);
      if (count === 0) ready.push(edge.target);
    }
  }
  if (processed !== ids.length) {
    // 寻找一个实际环，而非把环下游的残余节点误报为环本身。
    const remaining = new Set(ids.filter(id => incoming.get(id) > 0));
    const color = new Map();
    for (const start of remaining) {
      if (color.has(start)) continue;
      const stack = [{ id: start, index: 0 }];
      const positions = new Map([[start, 0]]);
      color.set(start, 1);
      while (stack.length) {
        const frame = stack[stack.length - 1];
        const outgoing = edges.get(frame.id);
        if (frame.index >= outgoing.length) {
          color.set(frame.id, 2);
          positions.delete(frame.id);
          stack.pop();
          continue;
        }
        const next = outgoing[frame.index++].target;
        if (!remaining.has(next)) continue;
        if (color.get(next) === 1) {
          const cycle = stack.slice(positions.get(next)).map(item => item.id).concat(next);
          failure(`静态图存在环：${cycle.join(' -> ')}`, { cycle });
        }
        if (!color.has(next)) {
          color.set(next, 1);
          positions.set(next, stack.length);
          stack.push({ id: next, index: 0 });
        }
      }
    }
    failure('静态图存在环');
  }
  return { edges, edgeCount };
}

function descendantsOf(id, edges) {
  const result = new Set();
  if (!id || !edges.has(id)) return result;
  const pending = edges.get(id).map(edge => edge.target);
  while (pending.length) {
    const next = pending.pop();
    if (result.has(next)) continue;
    result.add(next);
    for (const edge of edges.get(next)) pending.push(edge.target);
  }
  return result;
}

function validateGraph(story, contract, options = {}) {
  const mode = options.mode || 'candidate';
  if (mode !== 'sample' && mode !== 'candidate') failure(`未知验证模式 ${mode}`);
  const stopIds = options.stops || [];
  if (!Array.isArray(stopIds) || stopIds.some(id => typeof id !== 'string')) failure('stops 必须为节点 ID 数组');
  const stops = new Set(stopIds);
  if (stops.size !== stopIds.length) failure('stops 不得重复');
  if (mode !== 'sample' && stops.size) failure('candidate 不允许样例截点');
  const nodes = story.nodes;
  const ids = Object.keys(nodes).sort();
  if (!own(nodes, story.start)) failure(`入口不存在：${story.start}`);
  for (const id of stops) {
    if (!own(nodes, id) || nodes[id].type !== 'line' || nodes[id].next !== null) {
      failure(`样例截点 ${id} 必须为已存在且 next:null 的 line`);
    }
  }
  for (const id of ids) {
    const node = nodes[id];
    if (node.type === 'line' && (node.next === null || node.next === undefined) && !stops.has(id)) {
      failure(`line ${id} 无后继，且未登记为样例截点`);
    }
    if (node.type === 'gate' && (node.default === null || node.default === undefined) && node.exhaustive !== true) {
      failure(`gate ${id} 缺少 default，只有 exhaustive:true 可以使用 default:null`);
    }
  }
  const { edges, edgeCount } = checkStaticGraph(nodes, ids);
  const events = new Map((contract.automaticEvents || []).map(event => [event.nodeId, event]));
  const endings = new Map((contract.endings || []).map(ending => [ending.id, ending]));
  const formFlag = contract.interface?.presentation?.formFlag || 'qiuForm';
  const humanEvent = (contract.automaticEvents || []).find(event => event.setFlags?.[formFlag] === 'human');
  const afterReveal = descendantsOf(humanEvent?.nodeId, edges);
  const epilogues = contract.epilogues || [];
  const routeChoice = contract.interface?.routeChoice;
  const qiuRouteRequirements = contract.hidden?.routeRequires || [];
  const qiuRawRequirements = contract.hidden?.rawRequires || [];

  // 状态先全局驻留，再以 node ID + state ID 合并；线性对白不复制 flags 或完整选择轨迹。
  const states = [];
  const stateIds = new Map();
  function intern(flags) {
    const key = JSON.stringify(Object.keys(flags).sort().map(flag => [flag, flags[flag]]));
    if (stateIds.has(key)) return stateIds.get(key);
    const id = states.length;
    stateIds.set(key, id);
    states.push(flags);
    return id;
  }
  const initialState = intern({ ...story.initialFlags });
  const visited = new Map();
  const reachableOptions = new Set();
  const gateBranches = new Map();
  const pending = [];
  const witnesses = { events: {}, endings: {}, stops: {}, hiddenQualification: {} };
  let exploredStates = 0;
  let transitions = 0;
  let mergedStates = 0;
  let maximumFrontier = 0;
  let terminalStates = 0;
  let stoppedStates = 0;
  function enqueue(id, stateId, path) {
    let seen = visited.get(id);
    if (!seen) visited.set(id, seen = new Set());
    if (seen.has(stateId)) {
      mergedStates++;
      return;
    }
    seen.add(stateId);
    pending.push({ id, stateId, path });
    maximumFrontier = Math.max(maximumFrontier, pending.length);
  }
  function witness(id, before, after, path) {
    return { nodeId: id, flagsBefore: { ...before }, flagsAfter: { ...after }, choices: choicesFrom(path) };
  }
  function failAt(message, current, before, after = before) {
    failure(message, witness(current.id, before, after, current.path));
  }
  function continueTo(next, stateId, path) {
    transitions++;
    enqueue(next, stateId, path);
  }
  enqueue(story.start, initialState, null);

  while (pending.length) {
    const current = pending.pop();
    exploredStates++;
    const node = nodes[current.id];
    const scope = scopeOf(current.id);
    const before = states[current.stateId];
    let flags = before;
    let stateId = current.stateId;
    if (scope && scope.route !== 'common' && (!own(flags, 'route') || flags.route !== scope.route)) {
      failAt(`路线串线：${current.id} 要求 route=${scope.route}，实际为 ${String(flags.route)}`, current, before);
    }
    if (flags.qiuMet === true && qiuRawRequirements.length && !matchesAll(flags, qiuRawRequirements)) {
      failAt(`${current.id} 的 qiuMet=true 缺少记录与回应资格`, current, before);
    }
    if (scope?.route === 'huangqiuqiu' && !matchesAll(flags, qiuRouteRequirements)) {
      failAt(`${current.id} 未满足黄球球路线资格`, current, before);
    }
    if (flags[formFlag] === 'human' && (flags.route !== 'huangqiuqiu' || !matchesAll(flags, qiuRouteRequirements))) {
      failAt(`${current.id} 的人形状态不具备黄球球路线资格`, current, before);
    }

    if (node.type === 'line' && node.onEnter) {
      if (!matchesAll(before, node.onEnter.requires)) {
        failAt(`${current.id} 的 onEnter.requires 不成立，不能跳过事件或先赋值`, current, before);
      }
      if (current.id === humanEvent?.nodeId && before[formFlag] !== 'sphere') {
        failAt(`${current.id} 显露人形前必须仍为 sphere`, current, before);
      }
      flags = { ...before, ...node.onEnter.setFlags };
      stateId = intern(flags);
      if (events.has(current.id) && !own(witnesses.events, current.id)) {
        witnesses.events[current.id] = witness(current.id, before, flags, current.path);
      }
    }

    if (scope?.route === 'huangqiuqiu' && humanEvent) {
      const scene = story.scenes[node.scene];
      const day = scene?.chronology?.day;
      const mustBeHuman = current.id === humanEvent.nodeId || afterReveal.has(current.id)
        || scope.chapter > humanEvent.chapter || (typeof day === 'number' && day > humanEvent.day);
      const expectedForm = mustBeHuman ? 'human' : 'sphere';
      if (flags[formFlag] !== expectedForm) {
        failAt(`${current.id} 的形态应为 ${expectedForm}，实际为 ${String(flags[formFlag])}`, current, before, flags);
      }
      if ((scope.chapter < humanEvent.chapter || (typeof day === 'number' && day < humanEvent.day)) && flags[formFlag] !== 'sphere') {
        failAt(`${current.id} 在第${humanEvent.day}天变身之前提前进入人形`, current, before, flags);
      }
    }

    if (current.id === routeChoice && qiuRawRequirements.length) {
      const qualified = matchesAll(flags, qiuRawRequirements);
      if (flags.qiuMet !== qualified) {
        failAt(`${current.id} 的相识状态与记录、回应组合不一致`, current, before, flags);
      }
      const combination = `${String(flags.qiuSignal)}/${String(flags.qiuReply)}`;
      if (!own(witnesses.hiddenQualification, combination)) {
        witnesses.hiddenQualification[combination] = witness(current.id, before, flags, current.path);
      }
    }
    const epilogue = epilogues.find(item => item.id === current.id);
    if (epilogue) {
      const expected = epilogue.otherwise
        ? !epilogues.some(item => item.all && matchesAll(flags, item.all))
        : matchesAll(flags, epilogue.all);
      if (!expected) failAt(`${current.id} 进入了不适用的公共后日谈`, current, before, flags);
    }

    if (stops.has(current.id)) {
      stoppedStates++;
      if (!own(witnesses.stops, current.id)) witnesses.stops[current.id] = witness(current.id, before, flags, current.path);
      continue;
    }
    if (node.type === 'line') {
      continueTo(node.next, stateId, current.path);
    } else if (node.type === 'choice') {
      let available = 0;
      node.choices.forEach((option, index) => {
        if (!matchesAll(flags, option.requires)) return;
        available++;
        reachableOptions.add(`${current.id}:${index}`);
        const nextFlags = { ...flags, [node.flag]: option.value };
        const nextPath = {
          previous: current.path,
          choice: { nodeId: current.id, index, flag: node.flag, value: option.value, label: option.label }
        };
        continueTo(option.next, intern(nextFlags), nextPath);
      });
      if (!available) failAt(`${current.id} 在可达状态中没有可用选项`, current, before, flags);
    } else if (node.type === 'gate') {
      const index = node.cases.findIndex(branch => matches(flags, branch));
      if (index === -1 && node.exhaustive === true) {
        failAt(`穷尽门禁 ${current.id} 未命中任何 case`, current, before, flags);
      }
      const branchId = index === -1 ? `${current.id}:default` : `${current.id}:${index}`;
      gateBranches.set(branchId, (gateBranches.get(branchId) || 0) + 1);
      const next = index === -1 ? node.default : node.cases[index].next;
      if (typeof next !== 'string') failAt(`门禁 ${current.id} 无合法后继`, current, before, flags);
      continueTo(next, stateId, current.path);
    } else if (node.type === 'end') {
      if (typeof node.next === 'string') {
        continueTo(node.next, stateId, current.path);
      } else {
        const ending = endings.get(node.endingId || current.id);
        if (!ending || ending.id !== current.id) failAt(`${current.id} 不是契约登记的终结节点`, current, before, flags);
        if (!matchesAll(flags, ending.requires)) failAt(`${current.id} 的结局条件不成立`, current, before, flags);
        if (ending.requiredForm && flags[formFlag] !== ending.requiredForm) {
          failAt(`${current.id} 要求形态 ${ending.requiredForm}`, current, before, flags);
        }
        terminalStates++;
        if (!own(witnesses.endings, current.id)) witnesses.endings[current.id] = witness(current.id, before, flags, current.path);
      }
    } else {
      failure(`${current.id} 使用不支持的类型 ${String(node.type)}`);
    }
  }

  const unreachableNodes = ids.filter(id => !visited.has(id));
  const optionIds = ids.flatMap(id => (nodes[id].choices || []).map((_, index) => `${id}:${index}`));
  const unreachableOptions = optionIds.filter(id => !reachableOptions.has(id));
  if (unreachableNodes.length || unreachableOptions.length) {
    failure(`存在不可达节点或选项：节点 ${unreachableNodes.length}，选项 ${unreachableOptions.length}`, {
      unreachableNodes, unreachableOptions
    });
  }
  const countsByType = {};
  for (const id of ids) countsByType[nodes[id].type] = (countsByType[nodes[id].type] || 0) + 1;
  return {
    mode,
    evidence: 'isolated-static-graph-and-reachable-state-enumeration',
    statistics: {
      nodes: ids.length, edges: edgeCount, choices: countsByType.choice || 0,
      options: optionIds.length, countsByType, exploredNodeStates: exploredStates,
      distinctFlagStates: states.length, mergedNodeStates: mergedStates,
      transitions, maximumFrontier, terminalStates, stoppedStates
    },
    coverage: {
      reachableNodes: visited.size, reachableOptions: reachableOptions.size,
      unreachableNodes, unreachableOptions,
      reachedEvents: Object.keys(witnesses.events).sort(),
      reachedEndings: Object.keys(witnesses.endings).sort(),
      reachedStops: Object.keys(witnesses.stops).sort(),
      gateBranches: Object.fromEntries([...gateBranches].sort(([a], [b]) => a.localeCompare(b)))
    },
    witnesses
  };
}

module.exports = { validateGraph };
