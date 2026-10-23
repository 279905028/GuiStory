'use strict';

// 在全部剧情源组装完成后应用，避免章节重建覆盖正式背景绑定。
const bindings = require('../../assets/backgrounds/bijie-20261020/bindings.json');

module.exports = function applySceneBackgrounds(story) {
  for (const [key, background] of Object.entries(bindings.backgrounds)) {
    story.backgrounds[key] = background.path;
  }
  for (const [sceneId, bg] of Object.entries(bindings.sceneBindings)) {
    if (!story.scenes[sceneId]) throw new Error('背景绑定缺少场景：' + sceneId);
    story.scenes[sceneId].bg = bg;
  }
  for (const [nodeId, presentation] of Object.entries(bindings.nodeBindings)) {
    if (!story.nodes[nodeId]) throw new Error('背景绑定缺少节点：' + nodeId);
    Object.assign(story.nodes[nodeId], presentation);
  }
};
