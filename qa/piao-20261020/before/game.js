/* 《毕节，雨停之前》v0.3 · 无依赖浏览器运行层。剧情状态仅由 StoryEngine 管理。 */
(function () {
  'use strict';
  // 三章版正文与旧序章不同，独立保存；绝不读取或改写旧版的 v1 存档。
  const PREFIX = 'bijie-rain-demo:v0.3:';
  const SPEEDS = { slow: 75, normal: 40, fast: 18, instant: 0 };
  const DEFAULTS = { textSpeed: 'normal', sound: false, volume: 0.35 };
  // 美术映射独立于剧情和存档；只在这些既有对白中切换毛狼的舞台立绘。
  const MAOLANG_ART = {
    root: 'assets/new-character-variants/expressions-v01-20261019/maolang/',
    nodes: {
      s2_counter_02: 'action-wave',
      s2_counter_04: 'action-explaining',
      s2_counter_13: 'expression-surprised',
      s2_recruit_02: 'action-thinking',
      s9_compete_02: 'expression-serious',
      s9_compete_04: 'expression-hesitant',
      s9_compete_07: 'expression-smile',
      s9_measure_02: 'expression-serious'
    }
  };
  const SHIJIANG_ART = {
    assets: {
      'expression-smile': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-smile.png',
      'expression-serious': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-serious.png',
      'expression-hesitant': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-hesitant.png',
      'expression-surprised': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-surprised.png',
      'expression-displeased': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-displeased.png',
      'expression-downcast': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-expression-downcast.png',
      'action-wave': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-action-wave.png',
      'action-thinking': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-action-thinking.png',
      'action-explaining': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-action-explaining.png',
      'action-phone': 'assets/character-variants/shijiang-optionA-20261020/char-shijiang-action-phone.png'
    },
    nodes: {
      s2_counter_07: 'action-explaining',
      s2_counter_09: 'expression-serious',
      s2_counter_10: 'expression-smile',
      s2_counter_14: 'action-thinking',
      s2_record_03: 'expression-smile',
      s2_work_03: 'action-explaining',
      s8_handoff_02: 'action-phone',
      s8_handoff_04: 'action-phone',
      s9_review_01: 'expression-serious',
      s9_review_04: 'action-explaining'
    }
  };
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const make = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };

  function boot() {
    const ids = ['app', 'scene-bg', 'title-screen', 'title-hero', 'continue-btn', 'game-screen',
      'scene-day', 'scene-chapter-name', 'scene-time', 'scene-location', 'scene-title', 'character', 'dialogue-box',
      'speaker-avatar', 'speaker-name', 'dialogue-text', 'advance-hint', 'choice-panel',
      'choice-question', 'choice-list', 'auto-label', 'sound-label', 'end-screen',
      'end-character', 'end-title', 'end-copy', 'end-next', 'end-next-block', 'end-next-label',
      'end-kicker', 'end-status', 'end-continue', 'end-replay-route', 'end-replay-preview', 'end-footnote', 'modal', 'modal-title',
      'modal-body', 'modal-close', 'toast'];
    const dom = Object.fromEntries(ids.map(id => [id, document.getElementById(id)]));
    if (ids.some(id => !dom[id])) {
      const message = make('p', '', '页面组件未完整加载，请确认 index.html 与 game.js 配套后刷新。');
      message.setAttribute('role', 'alert');
      document.body.prepend(message);
      return;
    }
    // E4尚未接入时保留普通阅读；不在运行层创建另一套CG结构。
    dom['cg-layer'] = document.getElementById('cg-layer');
    dom['cg-image'] = document.getElementById('cg-image');
    const story = window.RAIN_STORY;
    const Engine = window.RainCore && window.RainCore.StoryEngine;
    let engine = null;
    let bootError = '';
    let settings = { ...DEFAULTS };
    let auto = false;
    let screen = 'title';
    let renderedNodeId = null;
    let characters = [];
    let cursor = 0;
    let timer = null;
    let timerKind = '';
    let remaining = null;
    let deadline = 0;
    let blockUntil = 0;
    let progressKeyHeld = false;
    let activationKey = null;
    let pointerOrigin = null;
    let focusReturn = null;
    let toastTimer = null;
    let toastRevision = 0;
    let storageWarningShown = false;
    let storageFailed = false;
    let protectedAutoNotice = null;
    let backupSerial = 0;
    const imageFailures = new Set();
    const cgFailures = new Set();
    const cgWarnings = new Set();
    let cgRequest = 0;
    let readyCG = null;
    let audioContext = null;
    let audioMaster = null;
    let rainSource = null;
    let audioAllowed = false;
    let audioWarningShown = false;

    function toast(message) {
      toastRevision++;
      clearTimeout(toastTimer);
      dom.toast.textContent = message;
      dom.toast.hidden = false;
      toastTimer = setTimeout(() => { dom.toast.hidden = true; }, 6000);
    }
    function storageWarning(manual = false) {
      storageFailed = true;
      if (manual || !storageWarningShown) {
        toast('浏览器存储不可用或空间不足，进度暂时无法保存。仍可继续游玩；刷新或关闭后可能丢失。');
        storageWarningShown = true;
      }
    }
    function readRaw(key) {
      try { return { ok: true, raw: window.localStorage.getItem(PREFIX + key) }; }
      catch (_) { storageWarning(); return { ok: false, raw: null }; }
    }
    function writeRaw(key, value, manual = false) {
      try {
        window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
        storageFailed = false;
        return true;
      } catch (_) { storageWarning(manual); return false; }
    }
    function validSettings(value) {
      return value && typeof value === 'object' && own(SPEEDS, value.textSpeed) &&
        typeof value.sound === 'boolean' && typeof value.volume === 'number' &&
        Number.isFinite(value.volume) && value.volume >= 0 && value.volume <= 1;
    }
    function copySettings(value) {
      return { textSpeed: value.textSpeed, sound: value.sound, volume: value.volume };
    }
    function readSave(key) {
      const result = readRaw(key);
      if (!result.ok) return { status: 'unavailable' };
      if (result.raw === null) return { status: 'empty' };
      try {
        const save = JSON.parse(result.raw);
        if (!save || typeof save !== 'object' || Array.isArray(save) || !own(save, 'state') ||
          !save.state || typeof save.state !== 'object' || Array.isArray(save.state) ||
          save.format !== 1 || typeof save.savedAt !== 'string' ||
          !/^\d{4}-\d{2}-\d{2}T/.test(save.savedAt) || !Number.isFinite(Date.parse(save.savedAt)) ||
          !validSettings(save.settings)) throw new Error('存档格式无效');
        const restored = new Engine(story, save.state);
        return { status: 'valid', raw: result.raw, save, restored };
      } catch (_) { return { status: 'corrupt', raw: result.raw }; }
    }
    function warnProtectedAuto(raw) {
      dom['continue-btn'].disabled = true;
      if (protectedAutoNotice === raw) return;
      protectedAutoNotice = raw;
      toast('自动存档不兼容或已损坏，原始数据已保留，自动保存已暂停。可先保存到手动档，再在存档菜单确认备份并恢复自动保存。');
    }
    function backupAuto(raw) {
      // 原字符串逐字节保留，坏JSON也不能经parse/stringify丢失信息。
      try {
        let key;
        do { key = PREFIX + 'auto-backup:' + Date.now() + ':' + (++backupSerial); }
        while (window.localStorage.getItem(key) !== null);
        window.localStorage.setItem(key, raw);
        if (window.localStorage.getItem(key) !== raw) throw new Error('备份校验失败');
        return true;
      } catch (_) {
        storageFailed = true;
        toast('旧自动存档备份失败，原档未替换。请检查浏览器存储空间或权限后重试。');
        return false;
      }
    }
    function saveGame(key, manual = false, backedUpRaw) {
      if (!engine) return false;
      if (key === 'auto') {
        // 每个写入口均重读，不能只在启动时记住一次保护状态。
        const current = readSave('auto');
        if (current.status === 'unavailable') return false;
        if (current.status === 'corrupt' && current.raw !== backedUpRaw) {
          warnProtectedAuto(current.raw);
          return false;
        }
        // 确认只授权刚才备份的版本，不能覆盖确认期间被换入的档。
        if (backedUpRaw !== undefined && current.raw !== backedUpRaw) {
          toast('自动存档已发生变化，本次未替换，请重新确认。');
          return false;
        }
      }
      const saved = writeRaw(key, { format: 1, savedAt: new Date().toISOString(),
        state: engine.snapshot(), settings: copySettings(settings) }, manual);
      if (key === 'auto') {
        dom['continue-btn'].disabled = !saved;
        if (saved) protectedAutoNotice = null;
      }
      return saved;
    }
    function updateContinue(notify = false) {
      if (bootError) { dom['continue-btn'].disabled = true; return; }
      const result = readSave('auto');
      dom['continue-btn'].disabled = result.status !== 'valid';
      if (notify && result.status === 'corrupt') warnProtectedAuto(result.raw);
    }
    function persistSettings() {
      writeRaw('settings', copySettings(settings));
      if (engine && screen !== 'title') saveGame('auto');
    }
    function speakerName(speaker) {
      if (!speaker || speaker === 'narrator') return '文文 · 心声';
      return story.characters[speaker]?.name || speaker;
    }
    function setImage(image, source, alt) {
      image.alt = alt || '';
      if (!source) { image.hidden = true; image.removeAttribute('src'); return; }
      if (image.getAttribute('src') !== source) {
        image.hidden = false;
        image.setAttribute('src', source);
      } else image.hidden = imageFailures.has(source);
    }
    function portrait(image, key, node) {
      const person = key && story.characters[key];
      const art = key === 'shijiang' ? SHIJIANG_ART : key === 'maolang' ? MAOLANG_ART : null;
      const stage = image === dom.character || image === dom['end-character'];
      const explicit = stage && node?.character === key ? node.expression :
        image === dom['speaker-avatar'] && node?.speaker === key ? node.avatarExpression : null;
      const explicitSource = explicit && person?.expressions && own(person.expressions, explicit) ? person.expressions[explicit] : null;
      const legacy = image === dom.character && node?.character === key && art?.nodes[node.id];
      const hasExplicit = typeof explicitSource === 'string' && explicitSource.trim();
      const variant = hasExplicit ? explicit : legacy;
      const variantSource = hasExplicit ? explicitSource :
        legacy && (art.assets?.[legacy] || art.root + 'char-' + key + '-' + legacy + '.png');
      const useVariant = variantSource && !imageFailures.has(variantSource);
      image.dataset.variant = useVariant ? variant : 'base';
      if (useVariant) image.dataset.fallback = person.image;
      else delete image.dataset.fallback;
      const orb = person?.presentation === 'orb';
      image.dataset.presentation = orb ? 'orb' : 'human';
      // 仅球形角色使用等比完整呈现；切回普通角色时恢复现有CSS胸像样式。
      if (image === dom['speaker-avatar']) {
        image.parentElement.hidden = !person;
        for (const property of ['width', 'height', 'left', 'top', 'object-position']) image.style.removeProperty(property);
        image.parentElement.style.removeProperty('aspect-ratio');
        image.parentElement.style.removeProperty('height');
        if (orb) {
          Object.assign(image.style, { width: '100%', height: '100%', left: '0', top: '0', objectPosition: 'center' });
          Object.assign(image.parentElement.style, { aspectRatio: '1 / 1', height: 'auto' });
        }
      }
      image.style.objectFit = 'contain';
      setImage(image, useVariant ? variantSource : person?.image, person?.name);
    }
    function setScreen(next) {
      if (screen !== next) clearCG();
      screen = next;
      document.body.dataset.screen = next;
      for (const name of ['title', 'game', 'end']) {
        const section = dom[name + '-screen'];
        section.inert = name !== next || !dom.modal.hidden;
        section.setAttribute('aria-hidden', String(name !== next));
      }
    }
    function applyScene(node) {
      const scene = story.scenes[node.scene];
      if (!scene) throw new Error('当前场景资料缺失，请检查剧情文件。');
      dom['scene-chapter-name'].textContent = chapterName(scene);
      dom['scene-day'].textContent = 'DAY ' + String(scene.day).padStart(2, '0');
      dom['scene-day'].setAttribute('aria-label', '第' + scene.day + '天');
      dom['scene-title'].textContent = scene.title;
      const time = node.time ?? scene.time;
      const backgroundKey = node.bg ?? scene.bg;
      dom['scene-time'].textContent = time;
      dom['scene-location'].textContent = node.location ?? scene.location;
      const background = backgroundKey === 'street' && time === '下午' ?
        'assets/background-variants/m2-daynight-20261020/bg-street-day.png' : story.backgrounds[backgroundKey];
      setImage(dom['scene-bg'], background, (node.location ?? scene.location) + '场景');
    }
    function chapterName(scene) {
      const chapter = scene.chapter || 1;
      const title = story.chapters?.[chapter]?.title;
      return typeof title === 'string' && /^第[一二三四五六七八九十\d]+章/.test(title) ? title :
        '第' + chapter + '章' + (title ? ' · ' + title : '');
    }
    function canContinueChapter(node) {
      return node.type === 'end' && typeof node.next === 'string' && own(story.nodes, node.next);
    }
    function clearCG(state = 'off') {
      cgRequest++;
      dom.app.dataset.cgState = state;
      if (dom['cg-layer']) dom['cg-layer'].hidden = true;
      if (dom['cg-image']) {
        dom['cg-image'].onerror = null;
        setImage(dom['cg-image'], null, '');
      }
      const background = dom['scene-bg'];
      background.hidden = !background.getAttribute('src') || imageFailures.has(background.getAttribute('src'));
    }
    function ordinaryPortraits(node) {
      portrait(dom.character, node.character, node);
      const speaker = node.type === 'choice' || node.speaker === 'narrator' ? 'wenwen' : node.speaker;
      portrait(dom['speaker-avatar'], speaker, node);
    }
    function cgWarning(key) {
      if (cgWarnings.has(key)) return;
      cgWarnings.add(key);
      toast('部分画面暂时无法显示，已切回普通场景，可继续阅读。');
    }
    function renderCG(node) {
      // render先清理并重建普通画面。异步回调只改图片，不碰逐字和自动计时。
      if (!own(node, 'cg')) return;
      if (node.type !== 'line') {
        cgWarning('configuration:' + node.id);
        return;
      }
      const key = node.cg;
      const resource = typeof key === 'string' && story.cgs && own(story.cgs, key) ? story.cgs[key] : null;
      const source = resource?.image;
      const valid = typeof key === 'string' && /^cg\d{2}$/.test(key) &&
        typeof source === 'string' && source.trim() && typeof resource.alt === 'string' && resource.alt.trim();
      if (!valid || !dom['cg-layer'] || !dom['cg-image'] || cgFailures.has(source)) {
        clearCG('fallback');
        cgWarning(valid ? source : 'configuration:' + String(key));
        return;
      }
      dom.app.dataset.cgState = 'loading';
      const request = cgRequest;
      const isCurrent = () => request === cgRequest && screen === 'game' &&
        engine.current().id === node.id && engine.current().type === 'line' &&
        engine.current().cg === key && story.cgs?.[key]?.image === source;
      const fail = () => {
        if (!isCurrent()) return;
        cgFailures.add(source);
        if (readyCG?.source === source) readyCG = null;
        clearCG('fallback');
        ordinaryPortraits(node);
        cgWarning(source);
      };
      const show = image => {
        if (!isCurrent()) return;
        if (!(image.naturalWidth > 0 && image.naturalHeight > 0)) { fail(); return; }
        readyCG = { source, image };
        const target = dom['cg-image'];
        target.onerror = () => {
          if (target.getAttribute('src') === source && !target.naturalWidth) fail();
        };
        setImage(target, source, resource.alt);
        dom.app.dataset.cgState = 'ready';
        dom['cg-layer'].hidden = false;
        dom['scene-bg'].hidden = true;
        setImage(dom.character, null, '');
        setImage(dom['speaker-avatar'], null, '');
        dom['speaker-avatar'].parentElement.hidden = true;
      };
      if (readyCG?.source === source) { show(readyCG.image); return; }
      const image = new Image();
      let settled = false;
      const settle = success => {
        if (settled) return;
        settled = true;
        image.onload = image.onerror = null;
        if (success) show(image); else fail();
      };
      image.onload = () => settle(true);
      image.onerror = () => settle(false);
      image.src = source;
      // 缓存命中可能已经complete，不依赖未来恰好再发一次load。
      if (image.complete) settle(image.naturalWidth > 0 && image.naturalHeight > 0);
    }
    function paused() { return document.hidden || !dom.modal.hidden || screen !== 'game'; }
    function clearPlayback(preserve = false) {
      if (timer !== null && preserve) remaining = Math.max(0, deadline - performance.now());
      clearTimeout(timer);
      timer = null;
      if (!preserve) { remaining = null; timerKind = ''; }
    }
    function syncControls() {
      dom['auto-label'].textContent = auto ? '自动中' : '自动';
      dom['auto-label'].setAttribute('aria-pressed', String(auto));
      document.querySelectorAll('[data-action="sound"]').forEach(button => {
        button.setAttribute('aria-pressed', String(settings.sound));
        button.setAttribute('aria-label', settings.sound ? '关闭环境音' : '开启环境音');
      });
      dom['sound-label'].textContent = settings.sound ? '声音开' : '声音关';
      document.querySelectorAll('.title-sound-label').forEach(label => { label.textContent = settings.sound ? '环境音开' : '环境音关'; });
      const toggle = document.getElementById('setting-sound');
      if (toggle) { toggle.textContent = settings.sound ? '已开启' : '已关闭'; toggle.setAttribute('aria-pressed', String(settings.sound)); }
    }
    function displayText() {
      dom['dialogue-text'].textContent = characters.slice(0, cursor).join('');
      const complete = cursor >= characters.length;
      dom['advance-hint'].querySelector('span').textContent = complete ? (auto ? '自动播放中' : '点击继续') : '点击显示全文';
      dom['dialogue-box'].setAttribute('aria-label', complete ? '推进对话，空格或回车' : '显示当前对话全文，空格或回车');
    }
    function resumePlayback() {
      if (timer !== null || paused() || !engine || engine.current().type !== 'line') return;
      if (settings.textSpeed === 'instant' && cursor < characters.length) { cursor = characters.length; displayText(); }
      const typing = cursor < characters.length;
      if (!typing && !auto) return;
      const kind = typing ? 'typing' : 'auto';
      const delay = timerKind === kind && remaining !== null ? remaining :
        typing ? SPEEDS[settings.textSpeed] : Math.min(6000, Math.max(1800, characters.length * 65));
      timerKind = kind;
      remaining = null;
      const nodeId = engine.current().id;
      deadline = performance.now() + delay;
      timer = setTimeout(() => {
        timer = null;
        if (paused() || engine.current().id !== nodeId) return;
        if (kind === 'typing') { cursor++; displayText(); resumePlayback(); }
        else safely(() => transition(() => engine.advance()));
      }, delay);
    }
    function render(resetReading = false) {
      clearPlayback();
      clearCG();
      const node = engine.current();
      if (!node || !['line', 'choice', 'end'].includes(node.type)) throw new Error('当前剧情节点无法显示。');
      applyScene(node);
      dom.app.dataset.nodeType = node.type;
      dom['choice-list'].replaceChildren();
      dom['choice-panel'].hidden = node.type !== 'choice';
      dom['advance-hint'].hidden = node.type !== 'line';
      dom['dialogue-box'].setAttribute('aria-disabled', String(node.type !== 'line'));
      dom['dialogue-box'].tabIndex = node.type === 'line' ? 0 : -1;
      portrait(dom.character, null);
      portrait(dom['speaker-avatar'], null);
      portrait(dom['end-character'], null);
      if (node.type === 'end') {
        auto = false;
        setScreen('end');
        portrait(dom['end-character'], node.character, node);
        dom['end-title'].textContent = node.title;
        dom['end-copy'].textContent = node.text;
        const scene = story.scenes[node.scene];
        const chapter = scene.chapter || 1;
        const continues = canContinueChapter(node);
        const visitedRoute = engine.state.choices.some(entry => entry.nodeId === story.routeChoice);
        const endLabel = chapterName(scene) + (continues ? ' · 章末' : ' · 本段结束');
        dom['end-screen'].setAttribute('aria-label', endLabel);
        dom['end-kicker'].textContent = endLabel;
        dom['end-status'].textContent = continues ? '带着这些约定，走进下一章' : '已读至第三章';
        dom['end-next-block'].hidden = !node.nextChapter;
        dom['end-next-label'].textContent = continues ? 'NEXT CHAPTER / 下一章' : '这段旅程之后';
        dom['end-next'].textContent = node.nextChapter || '';
        dom['end-continue'].hidden = !continues;
        dom['end-continue'].textContent = '继续第' + (Number(chapter) + 1) + '章 ↗';
        dom['end-replay-route'].hidden = continues || !visitedRoute;
        dom['end-replay-preview'].disabled = !engine.state.previewCheckpoint;
        dom['end-footnote'].textContent = continues ?
          (chapter === 1 ? '今晚的消息尚未锁定正式恋爱路线。继续第二章，约定才刚开始。' :
            '前面的选择将保留。回到第一章消息会重置之后的阅读进度。') :
          '可重选第三章路线，保留此前的选择；回到第一章消息会重置之后的阅读进度。';
      } else {
        setScreen('game');
        portrait(dom.character, node.character, node);
        dom['speaker-name'].textContent = speakerName(node.type === 'choice' ? 'narrator' : node.speaker);
        const speaker = node.type === 'choice' || node.speaker === 'narrator' ? 'wenwen' : node.speaker;
        portrait(dom['speaker-avatar'], speaker, node);
        dom['speaker-name'].style.color = story.characters[speaker]?.color || '';
        if (node.type === 'choice') {
          auto = false;
          characters = [];
          cursor = 0;
          dom['dialogue-text'].textContent = node.text;
          dom['choice-question'].textContent = node.text;
          // 唯一选项来源。可见序号仅作排版，choose接收引擎返回的原index。
          const choices = engine.availableChoices();
          dom['choice-panel'].dataset.choiceCount = String(choices.length);
          choices.forEach(({ index, option }, visibleIndex) => {
            const button = make('button', 'choice-button');
            button.type = 'button';
            button.dataset.choiceIndex = String(index);
            button.dataset.nodeId = node.id;
            const number = make('span', 'choice-index', String(visibleIndex + 1).padStart(2, '0'));
            number.setAttribute('aria-hidden', 'true');
            button.append(number, make('span', 'choice-label', option.label));
            dom['choice-list'].append(button);
          });
          if (!choices.length) throw new Error('当前没有可用选项，请检查剧情数据或读取其他存档。');
        } else {
          characters = Array.from(node.text || '');
          cursor = settings.textSpeed === 'instant' ? characters.length : 0;
          displayText();
        }
      }
      renderCG(node);
      syncControls();
      // 只在剧情跳转或成功读档后归零；逐字、CG回调和菜单不干扰阅读位置。
      if (resetReading || renderedNodeId !== node.id) {
        for (const element of [dom['end-screen'].querySelector('.end-content'), dom['dialogue-box'], dom['choice-panel']]) {
          if (element) { element.scrollTop = 0; element.scrollLeft = 0; }
        }
      }
      renderedNodeId = node.id;
      resumePlayback();
    }
    function focusStory() {
      const target = screen === 'game' ? (engine.current().type === 'choice' ? dom['choice-list'].querySelector('button') : dom['dialogue-box']) :
        screen === 'end' ? Array.from(dom['end-screen'].querySelectorAll('button:not(:disabled)')).find(button => !button.hidden) :
          dom['title-screen'].querySelector('button');
      target?.focus({ preventScroll: true });
    }
    function transition(operation) {
      clearPlayback();
      if (!operation()) { resumePlayback(); return; }
      blockUntil = performance.now() + 320;
      render();
      saveGame('auto');
      focusStory();
    }
    function next() {
      if (!engine || paused() || engine.current().type !== 'line' || performance.now() < blockUntil) return;
      blockUntil = performance.now() + 320;
      clearPlayback();
      if (cursor < characters.length) {
        cursor = characters.length;
        displayText();
        resumePlayback();
      } else transition(() => engine.advance());
    }
    function safely(operation) {
      try { operation(); }
      catch (error) {
        auto = false;
        clearPlayback();
        syncControls();
        showModal('暂时无法继续', body => {
          body.append(make('p', '', '剧情或存档读取遇到问题。可以关闭此窗口后读取其他存档，或返回标题。'));
          body.append(make('p', '', error instanceof Error ? error.message : '请确认本地文件完整后刷新。'));
          body.append(actionButton('返回标题', 'title'));
        });
      }
    }
    function modalFocusables() {
      return Array.from(dom.modal.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex="0"]'))
        .filter(element => !element.hidden && element.getClientRects().length);
    }
    function showModal(title, build) {
      if (dom.modal.hidden) focusReturn = document.activeElement;
      clearPlayback(true);
      dom['modal-title'].textContent = title;
      dom['modal-body'].replaceChildren();
      build(dom['modal-body']);
      dom['modal-body'].scrollTop = 0;
      dom.modal.hidden = false;
      setScreen(screen);
      syncAudio();
      (dom['modal-body'].querySelector('[data-initial-focus]') || dom['modal-close']).focus({ preventScroll: true });
    }
    function closeModal(restoreFocus = true) {
      if (dom.modal.hidden) return;
      dom.modal.hidden = true;
      setScreen(screen);
      blockUntil = performance.now() + 320;
      if (restoreFocus) {
        if (focusReturn?.isConnected && !focusReturn.disabled && focusReturn.getClientRects().length && !focusReturn.closest('[inert]')) focusReturn.focus({ preventScroll: true });
        else focusStory();
      }
      focusReturn = null;
      resumePlayback();
      syncAudio();
    }
    function actionButton(label, action, className = 'secondary-button') {
      const button = make('button', className, label);
      button.type = 'button';
      button.dataset.action = action;
      return button;
    }
    function confirmInGame(title, copy, accept, cancel) {
      showModal(title, body => {
        body.append(make('p', '', copy));
        const row = make('div', 'modal-actions');
        const no = make('button', 'secondary-button', '取消');
        const yes = make('button', 'primary-button', '确认');
        no.type = yes.type = 'button';
        no.dataset.initialFocus = '';
        no.addEventListener('click', event => { event.stopPropagation(); safely(cancel || (() => closeModal())); });
        yes.addEventListener('click', event => { event.stopPropagation(); safely(accept); });
        row.append(no, yes);
        body.append(row);
      });
    }
    function startGame() {
      if (bootError) { toast(bootError); return; }
      const start = backedUpRaw => {
        engine = new Engine(story);
        auto = false;
        closeModal(false);
        blockUntil = performance.now() + 320;
        render(true);
        const saved = saveGame('auto', false, backedUpRaw);
        focusStory();
        return saved;
      };
      const current = readSave('auto');
      if (current.status === 'valid' || current.status === 'corrupt') {
        const damaged = current.status === 'corrupt';
        confirmInGame('开始新的故事', damaged ?
          '自动存档不兼容或已损坏。确认后会先原样备份旧档，再从第1天开始并替换自动存档；备份失败不会替换。三个手动存档会保留。' :
          '将从第1天重新开始，并替换自动存档。三个手动存档会保留。', () => {
          const latest = readRaw('auto');
          if (!latest.ok) return;
          if (latest.raw !== current.raw) { startGame(); toast('自动存档已发生变化，请重新确认。'); return; }
          if (damaged && !backupAuto(current.raw)) return;
          const noticeBeforeStart = toastRevision;
          const saved = start(damaged ? current.raw : undefined);
          if (damaged && saved && toastRevision === noticeBeforeStart) toast('旧自动存档已原样备份，新的故事已开始。');
        });
      } else start();
    }
    function resumeAutoSaving() {
      const current = readSave('auto');
      if (current.status !== 'corrupt') { showSlots('save'); return; }
      confirmInGame('恢复自动保存', '确认先原样备份不兼容或已损坏的旧自动存档，再用当前进度替换自动档？备份失败会保留原档，三个手动存档不受影响。', () => {
        const latest = readRaw('auto');
        if (!latest.ok) return;
        if (latest.raw !== current.raw) { resumeAutoSaving(); toast('自动存档已发生变化，请重新确认。'); return; }
        if (!backupAuto(current.raw)) return;
        if (saveGame('auto', true, current.raw)) {
          showSlots('save');
          toast('旧自动存档已原样备份，自动保存已恢复。');
        }
      }, () => showSlots('save'));
    }
    function loadGame(key) {
      const result = readSave(key);
      if (result.status !== 'valid') {
        toast(result.status === 'corrupt' ? '这个存档不兼容或已损坏，未更改当前进度。请尝试其他存档。' :
          result.status === 'empty' ? '这里还没有存档。' : '浏览器禁止读取存储，当前进度未更改。');
        return;
      }
      clearPlayback();
      auto = false;
      engine = result.restored;
      settings = copySettings(result.save.settings);
      closeModal(false);
      blockUntil = performance.now() + 320;
      const noticeBeforeRender = toastRevision;
      render(true);
      const renderingNotice = toastRevision === noticeBeforeRender ? '' : dom.toast.textContent;
      persistSettings();
      syncAudio();
      focusStory();
      const currentAuto = readSave('auto');
      if (currentAuto.status === 'corrupt') {
        toast('已读取存档。旧自动存档不兼容或已损坏，原始数据已保留，自动保存暂停；可保存到手动档，或在存档菜单确认备份并恢复。' + renderingNotice);
      } else if (!storageFailed) toast('已读取存档。' + renderingNotice);
      else if (renderingNotice) toast(dom.toast.textContent + renderingNotice);
    }
    function showSlots(mode) {
      showModal(mode === 'save' ? '保存旅程' : '读取存档', body => {
        const autoProtected = readSave('auto').status === 'corrupt';
        body.append(make('p', '', mode === 'save' ? (autoProtected ?
          '旧自动档已保留，自动保存暂停。选择一个手动档，保留当前进度。' :
          '自动档随剧情更新。选择一个手动档，保留这一刻。') : '读取后恢复当时的剧情、选择、回顾记录与设置。'));
        body.append(make('p', 'save-version-note', '三章版使用独立存档，旧序章玩家需重新开始。旧序章存档仍保留在本浏览器中，本版不读取或覆盖。'));
        if (storageFailed) body.append(make('p', '', '当前浏览器存储不可用，保存与读取可能失败。'));
        const grid = make('div', 'save-grid');
        ['auto', 'slot1', 'slot2', 'slot3'].forEach((key, index) => {
          const result = readSave(key);
          const label = index === 0 ? '自动存档' : '手动存档 ' + index;
          const button = make('button', 'save-slot' + (result.status === 'empty' ? ' empty' : ''));
          button.type = 'button';
          const content = make('span');
          content.append(make('strong', '', label));
          let summary = { empty: '暂无存档', corrupt: '存档不兼容或已损坏', unavailable: '浏览器存储不可用' }[result.status];
          if (result.status === 'valid') {
            const node = result.restored.current();
            const scene = story.scenes[node.scene];
            summary = chapterName(scene) + ' · 第' + scene.day + '天 · ' + (node.time ?? scene.time) + ' · ' + (node.location ?? scene.location) +
              (node.type === 'end' ? (canContinueChapter(node) ? ' · 章末，可继续下一章' : ' · 本段结束') : '');
            content.append(make('small', '', summary));
            summary = new Date(result.save.savedAt).toLocaleString('zh-CN', { hour12: false });
          }
          content.append(make('small', '', summary));
          button.append(content, make('span', 'slot-meta', mode === 'save' ? (index === 0 ?
            (result.status === 'corrupt' ? '已暂停' : '自动更新') : '保存') : '读取'));
          button.disabled = mode === 'save' ? index === 0 || !engine : result.status === 'empty' || result.status === 'unavailable';
          button.addEventListener('click', event => {
            event.stopPropagation();
            safely(() => {
              if (mode === 'load') { loadGame(key); return; }
              const write = () => {
                if (saveGame(key, true)) { showSlots('save'); toast(label + '已保存。'); }
              };
              // 点击时重新读取，其他标签页更新过的手动档也必须确认。
              const latest = readRaw(key);
              if (!latest.ok) { storageWarning(true); return; }
              if (latest.raw !== null) confirmInGame('覆盖' + label, '确认用当前进度替换这个手动存档？原进度将被覆盖。', write, () => showSlots('save'));
              else write();
            });
          });
          grid.append(button);
        });
        body.append(grid);
        if (mode === 'save' && engine && autoProtected) {
          body.append(make('p', '', '旧自动存档原始数据已保留，自动保存暂停。可先保存手动档；确认备份后才会替换旧自动档。'));
          const recover = make('button', 'secondary-button', '备份旧档并恢复自动保存');
          recover.type = 'button';
          recover.addEventListener('click', event => { event.stopPropagation(); safely(resumeAutoSaving); });
          body.append(recover);
        }
      });
    }
    function showHistory() {
      showModal('一路的回声', body => {
        const history = engine ? engine.snapshot().history : [];
        if (!history.length) { body.append(make('p', 'empty-state', '故事还没有开始，读过的对白会留在这里。')); return; }
        let sceneId = '';
        history.forEach(entry => {
          if (entry.scene !== sceneId) {
            sceneId = entry.scene;
            const scene = story.scenes[sceneId];
            body.append(make('p', 'slot-meta', chapterName(scene) + ' · 第' + scene.day + '天 · ' + scene.title));
          }
          const item = make('section', 'history-entry' + (entry.kind === 'choice' ? ' choice' : ''));
          item.append(make('p', 'history-name', speakerName(entry.speaker)), make('p', 'history-text', entry.text));
          body.append(item);
        });
      });
      dom['modal-body'].scrollTop = dom['modal-body'].scrollHeight;
    }
    function showSettings() {
      showModal('游戏设置', body => {
        body.append(make('p', '', '三章版 · 第1—21天。章末可继续下一章，第三章结尾可重选本章路线。进度保存在当前浏览器。'));
        body.append(make('p', '', '没有配音。环境雨声与轻提示音在本机生成；所有线索也会用文字呈现。'));
        const row = (title, note, control, id) => {
          const wrapper = make('div', 'setting-row');
          const label = make('label', '', title);
          label.htmlFor = id;
          label.append(make('small', '', note));
          control.id = id;
          wrapper.append(label, control);
          body.append(wrapper);
          return wrapper;
        };
        const speed = make('select');
        for (const [value, label] of Object.entries({ slow: '慢速', normal: '标准', fast: '快速', instant: '立即显示' })) {
          const option = make('option', '', label); option.value = value; speed.append(option);
        }
        speed.value = settings.textSpeed;
        row('文字速度', '点击对白可立即显示当前句。', speed, 'setting-speed');
        speed.addEventListener('change', () => {
          settings.textSpeed = speed.value;
          clearPlayback();
          persistSettings();
        });
        const sound = actionButton(settings.sound ? '已开启' : '已关闭', 'sound');
        sound.setAttribute('aria-pressed', String(settings.sound));
        row('环境声音', '默认关闭，开启后播放本地雨声。', sound, 'setting-sound');
        const volume = make('input');
        volume.type = 'range'; volume.min = '0'; volume.max = '1'; volume.step = '0.05'; volume.value = String(settings.volume);
        const volumeRow = row('音量', '环境音与提示音共用音量。', volume, 'setting-volume');
        const value = make('output', 'setting-value', Math.round(settings.volume * 100) + '%');
        value.htmlFor = volume.id;
        volumeRow.append(value);
        volume.addEventListener('input', () => {
          settings.volume = Math.min(1, Math.max(0, Number(volume.value)));
          value.textContent = Math.round(settings.volume * 100) + '%';
          volume.setAttribute('aria-valuetext', value.textContent);
          persistSettings();
          syncAudio();
        });
        const actions = make('div', 'modal-actions');
        actions.append(actionButton('完成', 'close-modal', 'primary-button'));
        body.append(actions);
      });
    }
    function showMenu() {
      showModal('雨中的歇脚处', body => {
        body.append(make('p', '', '故事已暂停，关闭菜单后从当前句继续。'));
        const actions = make('div', 'modal-actions');
        for (const [label, action] of [['继续故事', 'close-modal'], ['保存旅程', 'save'], ['读取存档', 'load'], ['一路的回声', 'history'], ['游戏设置', 'settings'], ['返回标题', 'title']]) actions.append(actionButton(label, action));
        body.append(actions);
      });
    }
    function showTitle() {
      clearPlayback();
      auto = false;
      if (engine && screen !== 'title') saveGame('auto');
      setScreen('title');
      closeModal(false);
      dom.app.dataset.nodeType = '';
      dom['choice-list'].replaceChildren();
      portrait(dom.character, null);
      portrait(dom['speaker-avatar'], null);
      portrait(dom['end-character'], null);
      setImage(dom['scene-bg'], story.backgrounds.street, '雨中的毕节老街');
      updateContinue();
      syncControls();
      focusStory();
    }
    function initAudio() {
      if (audioContext) return;
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error('此浏览器不支持本地环境音，文字故事仍可正常游玩。');
      audioContext = new Audio();
      audioMaster = audioContext.createGain();
      audioMaster.gain.value = 0;
      audioMaster.connect(audioContext.destination);
      const buffer = audioContext.createBuffer(1, audioContext.sampleRate * 3, audioContext.sampleRate);
      const data = buffer.getChannelData(0);
      let smooth = 0;
      for (let i = 0; i < data.length; i++) {
        smooth = (smooth + (Math.random() * 2 - 1) * 0.025) / 1.025;
        data[i] = smooth * 3 + (Math.random() * 2 - 1) * 0.1;
      }
      rainSource = audioContext.createBufferSource();
      rainSource.buffer = buffer;
      rainSource.loop = true;
      const filter = audioContext.createBiquadFilter();
      filter.type = 'lowpass'; filter.frequency.value = 1600;
      const rainGain = audioContext.createGain(); rainGain.gain.value = 0.24;
      rainSource.connect(filter); filter.connect(rainGain); rainGain.connect(audioMaster);
      rainSource.start();
    }
    function audioFailure(error) {
      if (!audioWarningShown) { toast(error?.message || '声音暂时无法播放，请再次点击声音按钮；文字故事不受影响。'); audioWarningShown = true; }
    }
    function syncAudio() {
      if (!audioContext || !audioMaster) return;
      const enabled = audioAllowed && settings.sound && !document.hidden && dom.modal.hidden;
      audioMaster.gain.cancelScheduledValues(audioContext.currentTime);
      audioMaster.gain.setTargetAtTime(enabled ? settings.volume : 0, audioContext.currentTime, 0.08);
    }
    function unlockAudio(event) {
      if (!event.isTrusted || !settings.sound || document.hidden) return;
      audioAllowed = true;
      try {
        initAudio();
        const result = audioContext.resume();
        if (result?.catch) result.catch(audioFailure);
        syncAudio();
      } catch (error) { audioFailure(error); }
    }
    function cue() {
      if (!audioAllowed || !settings.sound || document.hidden || !dom.modal.hidden || audioContext?.state !== 'running') return;
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;
      oscillator.type = 'sine'; oscillator.frequency.value = 620;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.035, now + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14);
      oscillator.connect(gain); gain.connect(audioMaster);
      oscillator.start(now); oscillator.stop(now + 0.15);
      oscillator.onended = () => { oscillator.disconnect(); gain.disconnect(); };
    }
    function handleAction(action, event) {
      if (bootError && !['settings', 'sound', 'close-modal'].includes(action)) { toast(bootError); return; }
      switch (action) {
        case 'start': startGame(); break;
        case 'continue': loadGame('auto'); break;
        case 'save': showSlots('save'); break;
        case 'load': showSlots('load'); break;
        case 'history': showHistory(); break;
        case 'settings': showSettings(); break;
        case 'menu': showMenu(); break;
        case 'close-modal': closeModal(); break;
        case 'title': showTitle(); break;
        case 'next': next(); break;
        case 'auto':
          if (!engine || engine.current().type !== 'line') { toast('请先作出选择，之后可开启自动播放。'); break; }
          auto = !auto; clearPlayback(); syncControls(); displayText(); resumePlayback(); break;
        case 'sound':
          settings.sound = !settings.sound;
          if (settings.sound) unlockAudio(event);
          syncControls(); persistSettings(); syncAudio(); break;
        case 'replay-preview':
          auto = false;
          if (!engine) break;
          if (!engine.snapshot().previewCheckpoint) toast('当前还没有可重选的消息。');
          else transition(() => engine.replayPreview());
          break;
        case 'continue-chapter':
          if (engine && screen === 'end' && canContinueChapter(engine.current())) transition(() => engine.advance());
          break;
        case 'replay-route':
          auto = false;
          if (engine && screen === 'end') {
            transition(() => engine.replayChoice(story.routeChoice));
          }
          break;
      }
    }

    for (const id of ['scene-bg', 'title-hero', 'character', 'speaker-avatar', 'end-character']) {
      const image = dom[id];
      image.addEventListener('load', () => {
        const source = image.getAttribute('src');
        if (!source || !image.naturalWidth || !image.naturalHeight) return;
        imageFailures.delete(source);
        const covered = dom.app.dataset.cgState === 'ready' && ['scene-bg', 'character', 'speaker-avatar'].includes(id);
        image.hidden = covered;
      });
      image.addEventListener('error', () => {
        const source = image.getAttribute('src');
        if (!source) return;
        // 差分缺失时仍用已选基础立绘；不影响正文、节点或存档。
        const fallback = image.dataset.fallback;
        if (['character', 'speaker-avatar', 'end-character'].includes(id) && fallback && fallback !== source) {
          imageFailures.add(source);
          image.dataset.variant = 'base';
          delete image.dataset.fallback;
          setImage(image, fallback, image.alt);
          return;
        }
        image.hidden = true;
        if (!imageFailures.has(source)) { imageFailures.add(source); toast('部分画面素材尚未就绪，对白仍可继续。请在素材补齐后刷新。'); }
      });
    }
    document.addEventListener('pointerdown', event => {
      unlockAudio(event);
      pointerOrigin = { target: event.target, nodeId: engine?.current()?.id };
    }, true);
    document.addEventListener('click', event => safely(() => {
      const target = event.target instanceof Element ? event.target : event.target.parentElement;
      const inModal = dom.modal.contains(target);
      if (!dom.modal.hidden && !inModal) return;
      const choice = target.closest('[data-choice-index]');
      if (choice) {
        event.preventDefault(); event.stopPropagation();
        if (choice.disabled || !dom.modal.hidden || document.hidden || event.detail > 1 || progressKeyHeld || performance.now() < blockUntil ||
          !engine || engine.current().id !== choice.dataset.nodeId ||
          (event.detail > 0 && pointerOrigin && (pointerOrigin.nodeId !== engine.current().id || !choice.contains(pointerOrigin.target)))) return;
        transition(() => engine.choose(Number(choice.dataset.choiceIndex)));
        cue();
        return;
      }
      const action = target.closest('[data-action]');
      if (action) {
        if (action.disabled || action.closest('[inert]')) return;
        event.preventDefault(); event.stopPropagation();
        if (event.detail > 1) return;
        unlockAudio(event);
        handleAction(action.dataset.action, event);
        return;
      }
      if (inModal) return;
      if (target.closest('#dialogue-box') && !target.closest('button, input, select, textarea, a, [contenteditable="true"]')) {
        event.preventDefault();
        if (event.detail > 1 || (event.detail > 0 && pointerOrigin?.nodeId !== engine?.current()?.id)) return;
        next();
      }
    }));
    document.addEventListener('keydown', event => {
      unlockAudio(event);
      if ([' ', 'Enter'].includes(event.key)) {
        // Enter在按钮上会由浏览器合成click；长按不能跨焦点激活下一屏选项。
        if (event.repeat) { event.preventDefault(); return; }
        activationKey = { target: event.target, nodeId: engine?.current()?.id };
      }
      if (!dom.modal.hidden) {
        if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); closeModal(); }
        else if (event.key === 'Tab') {
          const list = modalFocusables();
          const first = list[0] || dom.modal;
          const last = list.at(-1) || dom.modal;
          if (event.shiftKey && (document.activeElement === first || !list.includes(document.activeElement))) { event.preventDefault(); last.focus(); }
          else if (!event.shiftKey && (document.activeElement === last || !list.includes(document.activeElement))) { event.preventDefault(); first.focus(); }
        }
        return;
      }
      if (event.key === 'Escape' && screen === 'game') { event.preventDefault(); showMenu(); return; }
      if (![' ', 'Enter'].includes(event.key) || event.altKey || event.ctrlKey || event.metaKey || event.isComposing) return;
      const target = event.target;
      if (target instanceof Element && target.closest('button, input, select, textarea, a, [contenteditable="true"], [role="slider"]')) return;
      if (screen !== 'game') return;
      event.preventDefault();
      if (event.repeat || progressKeyHeld) return;
      progressKeyHeld = true;
      safely(next);
    });
    document.addEventListener('keyup', event => {
      if ([' ', 'Enter'].includes(event.key)) {
        if (progressKeyHeld || (activationKey && (activationKey.target !== event.target || activationKey.nodeId !== engine?.current()?.id))) event.preventDefault();
        progressKeyHeld = false;
        activationKey = null;
      }
    }, true);
    document.addEventListener('focusin', event => {
      if (!dom.modal.hidden && !dom.modal.contains(event.target)) dom['modal-close'].focus({ preventScroll: true });
    });
    document.addEventListener('visibilitychange', () => {
      progressKeyHeld = false;
      activationKey = null;
      if (document.hidden) clearPlayback(true);
      else resumePlayback();
      syncAudio();
    });
    window.addEventListener('blur', () => { progressKeyHeld = false; activationKey = null; });
    window.addEventListener('pagehide', () => { clearPlayback(true); if (engine && screen !== 'title') saveGame('auto'); });
    window.addEventListener('pageshow', () => { resumePlayback(); syncAudio(); });
    window.addEventListener('storage', event => {
      if (event.key === PREFIX + 'auto' || event.key === null) updateContinue(true);
    });

    const storedSettings = readRaw('settings');
    if (storedSettings.raw !== null) {
      try {
        const value = JSON.parse(storedSettings.raw);
        if (!validSettings(value)) throw new Error();
        settings = copySettings(value);
      } catch (_) { toast('设置记录已损坏，已使用默认设置（声音关闭）。'); }
    }
    try {
      if (!story || story.version !== 1 || !story.nodes || !story.scenes || !story.characters || !story.backgrounds) throw new Error('剧情尚未加载，请确认 story.js 已就绪并刷新页面。');
      if (!Engine || typeof Engine.prototype.availableChoices !== 'function' || typeof Engine.prototype.replayChoice !== 'function') throw new Error('剧情引擎尚未就绪，请确认使用三章版 engine.js 后刷新。');
      new Engine(story); // 只验证入口，不在标题生成游戏进度。
      setImage(dom['title-hero'], story.characters.wenwen?.image, '文文，23岁');
      updateContinue(true);
    } catch (error) {
      bootError = error.message;
      dom['continue-btn'].disabled = true;
      document.querySelectorAll('[data-action="start"], [data-action="load"]').forEach(button => { button.disabled = true; });
      showModal('故事还在路上', body => body.append(make('p', '', bootError)));
    }
    clearCG();
    setScreen('title');
    syncControls();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot, { once: true });
  else boot();
})();
