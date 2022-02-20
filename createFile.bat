@echo off
set/p fileName=请输入文件名:
echo 文件名为：%fileName%
md "%fileName%"
cd "./%fileName%"
echo " ">"%fileName%.js"
echo " ">"%fileName%.java"
echo " ">"README.md"
echo ---------------processing----------------
echo 创建目录和文件【%fileName%】成功
pause