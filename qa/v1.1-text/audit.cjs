// 当前文稿验收入口。历史重写检查与报告保持原样；本轮允许总增长超过60%。
const audit = require('./piao-maolang-20261027/audit.cjs');
module.exports = audit;
if (require.main === module) audit.run();
