@echo off
set/p fileName=�������ļ���:
echo �ļ���Ϊ��%fileName%
md "%fileName%"
cd "./%fileName%"
type nul>"%fileName%.js"
type nul>"%fileName%.java"
type nul>"README.md"
echo ---------------processing----------------
echo ����Ŀ¼���ļ���%fileName%���ɹ�
pause