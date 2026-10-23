/* 仅兼容 2026-10-21 两句改写前的背景版；StoryEngine 始终保留严格恢复。 */
(function (root) {
  'use strict';
  const Engine = typeof module !== 'undefined' && module.exports ?
    require('./engine.js').StoryEngine : root.RainCore.StoryEngine;
  const CONTENT_VERSION = 2;
  const changes = [
    { id: 'preview_xiaoman_visit_01', scene: 's10', speaker: 'wenwen',
      before: '图看完了。明天没东西要修，我还能来坐会儿吗？',
      after: '图看完了。哪天没东西要修，我还能来坐会儿吗？' },
    { id: 'ch2_cut_join_04', scene: 'ch2_edit', speaker: 'narrator',
      before: '散场时，孟遥把相机装回包里。我替她撑着门，她走过门槛，又转身叫了我一声。',
      after: '散场时，孟遥关好相机，让它垂在身前。我替她撑着门，她走过门槛，又转身叫了我一声。' }
  ];
  function restore(story, state, contentVersion) {
    if (!state || typeof state !== 'object' || Array.isArray(state)) {
      throw new Error('存档不兼容或已损坏：状态字段无效');
    }
    if (contentVersion !== undefined && contentVersion !== CONTENT_VERSION) {
      throw new Error('存档不兼容或已损坏：不支持的内容版本');
    }
    try { return { restored: new Engine(story, state), migrated: false }; }
    catch (error) {
      // 已标记新版的档案不得退回旧文本校验；后续内容修订也不能套用此补丁。
      if (contentVersion !== undefined || story.contentRevision !== 'background-20261020' ||
        !changes.every(change => {
          const node = story.nodes[change.id];
          return node?.type === 'line' && node.scene === change.scene &&
            node.speaker === change.speaker && node.text === change.after;
        })) throw error;
      const previous = { ...story, nodes: { ...story.nodes } };
      for (const change of changes) previous.nodes[change.id] = { ...story.nodes[change.id], text: change.before };
      // 先按完整旧版轨迹验证，不能用字符串替换掩盖坏档或拼接两版历史。
      const verified = new Engine(previous, state).snapshot();
      const update = snapshot => {
        for (const entry of snapshot.history) {
          const change = changes.find(item => item.id === entry.nodeId);
          if (change) entry.text = change.after;
        }
        if (snapshot.previewCheckpoint) update(snapshot.previewCheckpoint);
      };
      update(verified);
      return { restored: new Engine(story, verified), migrated: true };
    }
  }
  const exported = { CONTENT_VERSION, restore };
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
  root.RainSaveCompat = exported;
})(typeof window !== 'undefined' ? window : globalThis);
