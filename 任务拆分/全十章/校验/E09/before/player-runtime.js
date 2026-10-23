/* 十章播放器的纯显示解析；不写剧情状态，不注册或采用美术。 */
(function (root) {
  'use strict';
  const own = (value, key) => Object.prototype.hasOwnProperty.call(value, key);
  const resource = value => typeof value === 'string' && value.trim().length > 0;
  const forms = { sphere: 'orb', human: 'human' };

  function validate(story) {
    const person = story.characters?.huangqiuqiu;
    for (const [form, presentation] of Object.entries(forms)) {
      const entry = person?.forms?.[form];
      if (!entry || entry.presentation !== presentation || !resource(entry.image) ||
        !resource(entry.avatarImage) || !entry.expressions || !entry.avatarExpressions) {
        throw new Error('黄球球的' + (form === 'sphere' ? '球形' : '人形') + '立绘与头像资料不完整，请补齐配套资源。');
      }
      for (const table of [entry.expressions, entry.avatarExpressions]) {
        if (Array.isArray(table) || typeof table !== 'object' || Object.values(table).some(value => !resource(value))) {
          throw new Error('黄球球的形态差分资料无效，请检查资源清单。');
        }
      }
    }
    return true;
  }

  function resolvePortrait(story, key, node, flags, avatar = false) {
    if (key == null) return null;
    const person = story.characters?.[key];
    if (!person) throw new Error('人物资料缺失：' + key);
    let entry = person, form = null;
    if (person.forms) {
      form = flags?.qiuForm;
      if (key !== 'huangqiuqiu' || !own(forms, form) || !own(person.forms, form)) {
        throw new Error('人物形态无效，无法显示：' + key);
      }
      entry = person.forms[form];
      if (entry.presentation !== forms[form]) throw new Error('人物形态与画面类型不一致：' + key);
    }
    const expression = avatar ? node?.avatarExpression : node?.expression;
    const table = avatar && (form || entry.avatarImage) ? entry.avatarExpressions : entry.expressions;
    const base = avatar && (form || entry.avatarImage) ? entry.avatarImage : entry.image;
    const source = expression ? table && own(table, expression) && table[expression] : base;
    if (!resource(source)) throw new Error('人物画面缺失：' + person.name + (form ? ' / ' + form : '') + ' / ' + (expression || '基础') + (avatar ? '头像' : '立绘'));
    return { source, name: person.name, form, presentation: entry.presentation || 'human',
      variant: expression || 'base', dedicatedAvatar: avatar && !!entry.avatarImage };
  }

  function dayName(scene) {
    // label 中也有制作备注，仅采用明确的相对日序；不能把日期锚点显示成当天。
    const relative = /^第\d+天后的数日/.exec(scene.chronology?.label || '');
    return relative ? relative[0] : scene.dayLabel || (scene.day == null ? '' : '第' + scene.day + '天');
  }

  const exported = { capabilities: ['character-forms-v1'], validate, resolvePortrait, dayName };
  if (typeof module !== 'undefined' && module.exports) module.exports = exported;
  root.RainPresentation = exported;
})(typeof window !== 'undefined' ? window : globalThis);
