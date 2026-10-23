'use strict';
const fs = require('node:fs');

// JSON.parse 会静默覆盖重复键；模块 ID 和绑定键不能依赖该行为。
function parseJSON(text, filename = '<JSON>') {
  let i = 0;
  const fail = message => { throw new Error(`${filename}:${i}: ${message}`); };
  const space = () => { while (/[\x20\t\r\n]/.test(text[i] || '\0')) i++; };
  function string() {
    const start = i++;
    while (i < text.length) {
      if (text[i] === '\\') { i += 2; continue; }
      if (text[i++] === '"') return JSON.parse(text.slice(start, i));
    }
    fail('字符串未结束');
  }
  function value() {
    space();
    if (text[i] === '"') return string();
    if (text[i] === '{') {
      i++; space();
      const result = {};
      if (text[i] === '}') { i++; return result; }
      while (i < text.length) {
        if (text[i] !== '"') fail('对象键必须为字符串');
        const key = string();
        if (['__proto__', 'prototype', 'constructor'].includes(key)) fail('禁止原型键 ' + key);
        if (Object.hasOwn(result, key)) fail('重复 JSON 键 ' + key);
        space(); if (text[i++] !== ':') fail('缺少冒号');
        result[key] = value(); space();
        const end = text[i++];
        if (end === '}') return result;
        if (end !== ',') fail('缺少逗号');
        space();
      }
      fail('对象未结束');
    }
    if (text[i] === '[') {
      i++; space(); const result = [];
      if (text[i] === ']') { i++; return result; }
      while (i < text.length) {
        result.push(value()); space(); const end = text[i++];
        if (end === ']') return result;
        if (end !== ',') fail('数组缺少逗号');
      }
      fail('数组未结束');
    }
    const start = i;
    while (i < text.length && !/[\s,\]}]/.test(text[i])) i++;
    if (start === i) fail('缺少值');
    return JSON.parse(text.slice(start, i));
  }
  try { const result = value(); space(); if (i !== text.length) fail('多余内容'); return result; }
  catch (error) { throw new Error(`${filename}: ${error.message}`); }
}

module.exports = { parseJSON, readJSON: file => parseJSON(fs.readFileSync(file, 'utf8'), file) };
