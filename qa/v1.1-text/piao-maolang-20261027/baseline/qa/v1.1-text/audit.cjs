// 当前文稿验收入口。上一轮单结局检查已随基线保存。
const audit = require('./rewrite-20261027/audit.cjs');
module.exports = audit;
if (require.main === module) audit.run({draft:process.argv.includes('--draft'),only:process.argv.find(x=>x.startsWith('--file='))?.slice(7)});
