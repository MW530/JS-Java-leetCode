@echo off
set/p fileName=�������ļ���:
echo �ļ���Ϊ��%fileName%
md "%fileName%"
cd "./%fileName%"
echo " ">"%fileName%.js"
echo " ">"%fileName%.java"
echo " ">"README.md"
echo ---------------processing----------------
echo ����Ŀ¼���ļ���%fileName%���ɹ�
pause