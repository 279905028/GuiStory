#!/bin/sh
cd "$(dirname "$0")" || exit 1
if command -v node >/dev/null 2>&1; then
  node tools/serve.cjs
elif [ -x /usr/local/bin/node ]; then
  /usr/local/bin/node tools/serve.cjs
elif [ -x /opt/homebrew/bin/node ]; then
  /opt/homebrew/bin/node tools/serve.cjs
else
  echo '未找到 Node.js。可直接用浏览器打开 game/index.html，无需安装依赖。'
fi
printf '\n按回车关闭窗口。'
read -r answer
