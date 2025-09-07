@echo off
echo Starting Forex Analysis Bot...
call .\forex-env\Scripts\activate.bat
python bot_interface.py
pause