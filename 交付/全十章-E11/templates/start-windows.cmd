@echo off
chcp 65001 >nul
cd /d "%~dp0"
where node >nul 2>&1
if errorlevel 1 (
  echo 未找到 Node.js。可直接用浏览器打开 game\index.html，无需安装依赖。
) else (
  node tools\serve.cjs
)
pause
