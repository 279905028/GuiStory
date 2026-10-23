/* 存档空间与版本协议；旧背景版的两句兼容补丁不用于全十章。 */
(function (root) {
  'use strict';
  const Core = typeof module !== 'undefined' && module.exports ? require('./engine.js') : root.RainCore;
  const Engine = Core.StoryEngine;
  // 保留既有公开常量；十章调用方必须使用 metadata(story)，不能沿用此旧版值。
  const CONTENT_VERSION = 2;
  const LEGACY_NAMESPACE = 'bijie-rain-demo:v0.4-background:';
  const TEN_CHAPTER_NAMESPACE = 'bijie-rain-demo:ten-chapter:nightshift-20261022-r1:';
  const TEN_CHAPTER_METADATA = Object.freeze({
    contentVersion: 1,
    engineStateVersion: 1,
    contractVersion: '1.0.0',
    contentRevision: 'nightshift-20261022-r1'
  });
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const damaged = detail => { throw new Error('存档不兼容或已损坏：' + detail); };
  function getProfile(story) {
    if (!object(story)) throw new Error('剧情数据无效，无法确定存档空间');
    // 缺字段的新故事应停在启动检查，不得降级到会访问旧档的空间。
    const tenChapter = ['contractVersion', 'requiredCapabilities', 'initialFlags'].some(key => own(story, key)) ||
      (typeof story.release === 'string' && story.release.startsWith('ten-chapter')) ||
      (typeof story.contentRevision === 'string' && story.contentRevision.startsWith('nightshift-')) ||
      (typeof story.start === 'string' && story.start.startsWith('tc_'));
    if (tenChapter) {
      if (!own(story, 'contractVersion') || story.contractVersion !== TEN_CHAPTER_METADATA.contractVersion ||
        !own(story, 'contentRevision') || story.contentRevision !== TEN_CHAPTER_METADATA.contentRevision ||
        story.version !== TEN_CHAPTER_METADATA.engineStateVersion) {
        throw new Error('十章剧情版本与存档协议不匹配');
      }
      if (typeof Core.assertStoryCapabilities !== 'function') throw new Error('当前引擎不支持十章存档协议');
    }
    if (typeof Core.assertStoryCapabilities === 'function') Core.assertStoryCapabilities(story);
    return {
      namespace: tenChapter ? TEN_CHAPTER_NAMESPACE : LEGACY_NAMESPACE,
      tenChapter,
      metadata: tenChapter ? { ...TEN_CHAPTER_METADATA } : { contentVersion: CONTENT_VERSION }
    };
  }
  function metadata(story) { return getProfile(story).metadata; }
  const changes = [
    { id: 'preview_xiaoman_visit_01', scene: 's10', speaker: 'wenwen',
      before: '图看完了。明天没东西要修，我还能来坐会儿吗？',
      after: '图看完了。哪天没东西要修，我还能来坐会儿吗？' },
    { id: 'ch2_cut_join_04', scene: 'ch2_edit', speaker: 'narrator',
      before: '散场时，孟遥把相机装回包里。我替她撑着门，她走过门槛，又转身叫了我一声。',
      after: '散场时，孟遥关好相机，让它垂在身前。我替她撑着门，她走过门槛，又转身叫了我一声。' }
  ];
  function restore(story, state, contentVersion, envelope) {
    const profile = getProfile(story);
    if (!object(state)) damaged('状态字段无效');
    if (profile.tenChapter) {
      if (!object(envelope)) damaged('缺少十章存档版本信息');
      for (const [key, expected] of Object.entries(profile.metadata)) {
        if (!own(envelope, key) || envelope[key] !== expected) damaged('十章 ' + key + ' 不匹配');
      }
      if (contentVersion !== envelope.contentVersion) damaged('十章内容版本不匹配');
      if (state.version !== envelope.engineStateVersion) damaged('十章引擎状态版本不匹配');
      // 不捕获并迁移：全部状态、历史和检查点必须由当前十章引擎严格重放通过。
      return { restored: new Engine(story, state), migrated: false };
    }
    if (contentVersion !== undefined && contentVersion !== CONTENT_VERSION) {
      damaged('不支持的内容版本');
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
  const exported = { CONTENT_VERSION, getProfile, metadata, restore };
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
  root.RainSaveCompat = exported;
})(typeof window !== 'undefined' ? window : globalThis);
