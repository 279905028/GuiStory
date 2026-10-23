(function (root) {
  'use strict';
  const clone = value => JSON.parse(JSON.stringify(value));
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const record = value => {
    if (!value || Object.prototype.toString.call(value) !== '[object Object]') return false;
    const proto = Object.getPrototypeOf(value);
    return proto === null || (Object.getPrototypeOf(proto) === null && own(proto, 'constructor') &&
      typeof proto.constructor === 'function' && Object.keys(proto).length === 0 &&
      Function.prototype.toString.call(proto.constructor) === Function.prototype.toString.call(Object));
  };
  const scalar = value => value === null || typeof value === 'string' || typeof value === 'boolean' ||
    (typeof value === 'number' && Number.isFinite(value));
  const same = (a, b) => {
    if (a === b) return true;
    if (!a || !b || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) !== Array.isArray(b)) return false;
    const keys = Object.keys(a);
    return keys.length === Object.keys(b).length && keys.every(key => own(b, key) && same(a[key], b[key]));
  };
  const damaged = detail => { throw new Error('存档不兼容或已损坏：' + detail); };
  class StoryEngine {
    constructor(story, saved) {
      this.story = story;
      this.state = { version: 1, nodeId: story.start, flags: {}, history: [], choices: [], previewCheckpoint: null };
      if (saved !== undefined && saved !== null) this.restore(saved);
      else this.enter(story.start);
    }
    current() { return this._node(this.state.nodeId); }
    _node(id) { return typeof id === 'string' && own(this.story.nodes, id) ? this.story.nodes[id] : undefined; }
    _matches(flags, condition) {
      return record(condition) && own(condition, 'flag') && own(condition, 'value') &&
        typeof condition.flag === 'string' && own(flags, condition.flag) && flags[condition.flag] === condition.value;
    }
    _allowed(option, flags) {
      return record(option) && (!own(option, 'requires') ||
        (Array.isArray(option.requires) && Array.from(option.requires).every(condition => this._matches(flags, condition))));
    }
    _resolve(id, flags, from) {
      const visited = new Set();
      while (true) {
        const node = this._node(id);
        if (!node) throw new Error('剧情节点不存在：' + String(id) + '（来自 ' + String(from) + '）');
        if (node.id !== id || !['line', 'choice', 'gate', 'end'].includes(node.type)) {
          throw new Error('剧情节点格式无效：' + id);
        }
        if (node.type !== 'gate') return node;
        if (visited.has(id)) throw new Error('剧情条件出现循环：' + id);
        visited.add(id);
        if (!Array.isArray(node.cases)) throw new Error('剧情条件格式无效：' + id);
        const match = node.cases.find(condition => this._matches(flags, condition));
        from = id;
        id = match ? match.next : node.default;
      }
    }
    // 先在候选状态中完成条件跳转与记录；所有可能失败的步骤完成后才提交。
    _entered(state, id) {
      const node = this._resolve(id, state.flags, state.nodeId);
      const next = { ...state, nodeId: node.id };
      if (node.type === 'line' && state.history.at(-1)?.nodeId !== node.id) {
        next.history = state.history.concat({ nodeId: node.id, scene: node.scene, speaker: node.speaker || 'narrator', text: node.text, kind: 'line' });
      }
      if (node.id === this.story.previewChoice && !next.previewCheckpoint) {
        next.previewCheckpoint = clone({ ...next, previewCheckpoint: null });
      }
      return next;
    }
    enter(id) {
      this.state = this._entered(this.state, id);
      return this.current();
    }
    advance() {
      const node = this.current();
      if (!node || (node.type !== 'line' && !(node.type === 'end' && typeof node.next === 'string' && node.next.trim()))) return false;
      this.enter(node.next);
      return true;
    }
    availableChoices() {
      const node = this.current();
      if (!node || node.type !== 'choice') return [];
      return node.choices.map((option, index) => ({ index, option })).filter(({ option }) => this._allowed(option, this.state.flags));
    }
    choose(index) {
      const node = this.current();
      if (!node || node.type !== 'choice' || !Number.isInteger(index) || index < 0 || !own(node.choices, index)) return false;
      const option = node.choices[index];
      if (!this._allowed(option, this.state.flags)) return false;
      const candidate = {
        ...this.state,
        flags: { ...this.state.flags, [node.flag]: option.value },
        choices: this.state.choices.concat({ nodeId: node.id, value: option.value, label: option.label }),
        history: this.state.history.concat({ nodeId: node.id, scene: node.scene, speaker: '文文 · 选择', text: option.label, kind: 'choice' })
      };
      this.state = this._entered(candidate, option.next);
      return true;
    }
    snapshot(includeCheckpoint = true) {
      return clone({ ...this.state, previewCheckpoint: includeCheckpoint ? this.state.previewCheckpoint : null });
    }
    _validateSave(saved, checkpoint = false) {
      const fields = ['version', 'nodeId', 'flags', 'history', 'choices', 'previewCheckpoint'];
      if (!record(saved) || fields.slice(0, 5).some(key => !own(saved, key)) ||
        Object.keys(saved).some(key => !fields.includes(key))) damaged('状态字段无效');
      if (saved.version !== 1) damaged('不支持的版本 ' + String(saved.version));
      const node = this._node(saved.nodeId);
      if (!node || !['line', 'choice', 'end'].includes(node.type)) damaged('节点无效：' + String(saved.nodeId));
      if (!record(saved.flags) || Object.values(saved.flags).some(value => !scalar(value))) damaged('标记无效');
      if (!Array.isArray(saved.history) || !Array.isArray(saved.choices)) damaged('历史或选择记录不是数组');
      for (const entry of saved.history) {
        if (!record(entry)) damaged('历史条目无效');
        const source = this._node(entry.nodeId);
        if (!source || source.type !== entry.kind || !['line', 'choice'].includes(entry.kind) ||
          entry.scene !== source.scene || typeof entry.speaker !== 'string' || typeof entry.text !== 'string' ||
          Object.keys(entry).length !== 5) damaged('历史条目无效：' + String(entry.nodeId));
        if (entry.kind === 'line' && (entry.speaker !== (source.speaker || 'narrator') || entry.text !== source.text)) damaged('对白记录不匹配：' + entry.nodeId);
      }
      for (const entry of saved.choices) {
        if (!record(entry)) damaged('选择条目无效');
        const source = this._node(entry.nodeId);
        if (!source || source.type !== 'choice' || !scalar(entry.value) || typeof entry.label !== 'string' ||
          Object.keys(entry).length !== 3 || !source.choices.some(option => option.value === entry.value && option.label === entry.label)) {
          damaged('选择记录不匹配：' + String(entry.nodeId));
        }
      }
      if (checkpoint) {
        if (saved.nodeId !== this.story.previewChoice || (saved.previewCheckpoint !== undefined && saved.previewCheckpoint !== null)) damaged('预告检查点无效或递归嵌套');
      } else if (saved.previewCheckpoint !== undefined && saved.previewCheckpoint !== null) {
        this._validateSave(saved.previewCheckpoint, true);
      }
    }
    restore(saved) {
      try {
        this._validateSave(saved);
        // 从选择轨迹复核完整存档，防止合法字段拼成非法路径或注入隐藏标记。
        const replay = new StoryEngine(this.story);
        const visited = new Set();
        while (replay.state.nodeId !== saved.nodeId) {
          const node = replay.current();
          if (visited.has(node.id)) damaged('恢复路径出现循环：' + node.id);
          visited.add(node.id);
          if (node.type === 'line' || (node.type === 'end' && typeof node.next === 'string' && node.next.trim())) replay.advance();
          else if (node.type === 'choice') {
            const entry = saved.choices[replay.state.choices.length];
            if (!entry || entry.nodeId !== node.id) damaged('缺少前置选择：' + node.id);
            const index = node.choices.findIndex(option => option.value === entry.value && option.label === entry.label);
            if (!replay.choose(index)) damaged('选择不可用：' + node.id);
          } else damaged('节点不在已保存的选择路径上：' + saved.nodeId);
        }
        const expected = replay.state;
        for (const field of ['flags', 'history', 'choices']) {
          if (!same(saved[field], expected[field])) damaged(field + ' 与剧情进度不一致');
        }
        if (saved.previewCheckpoint !== undefined && saved.previewCheckpoint !== null) {
          const checkpoint = { ...saved.previewCheckpoint, previewCheckpoint: null };
          if (!same(checkpoint, expected.previewCheckpoint)) damaged('预告检查点与当前选择路径不一致');
        }
        // snapshot(false) 或省略检查点的旧格式可重建检查点，不信任输入对象引用。
        this.state = replay.snapshot();
      } catch (error) {
        if (error instanceof Error && error.message.startsWith('存档不兼容或已损坏：')) throw error;
        damaged(error instanceof Error ? error.message : '无法读取状态');
      }
    }
    replayPreview() {
      const saved = this.state.previewCheckpoint;
      if (!saved || saved.nodeId !== this.story.previewChoice) return false;
      this.restore(saved);
      return true;
    }
    replayChoice(id) {
      if (this._node(id)?.type !== 'choice' ||
        (this.state.nodeId !== id && !this.state.choices.some(entry => entry.nodeId === id))) return false;
      try {
        // 用现有完整轨迹验证当前进度，再重放到已到过的选择；不接受凭空注入的标记。
        const verified = new StoryEngine(this.story, this.snapshot());
        const replay = new StoryEngine(this.story);
        const visited = new Set();
        while (replay.state.nodeId !== id) {
          const node = replay.current();
          if (visited.has(node.id)) return false;
          visited.add(node.id);
          if (node.type === 'choice') {
            const entry = verified.state.choices[replay.state.choices.length];
            if (!entry || entry.nodeId !== node.id ||
              !replay.choose(node.choices.findIndex(option => option.value === entry.value && option.label === entry.label))) return false;
          } else if (!replay.advance()) return false;
        }
        this.state = replay.snapshot();
        return true;
      } catch (_) { return false; }
    }
  }
  const exported = { StoryEngine };
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
  root.RainCore = exported;
})(typeof window !== 'undefined' ? window : globalThis);
