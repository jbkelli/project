@echo off
echo ========================================
echo    Forex Analysis Bot Installer
echo ========================================
echo.
echo This will install and run the Forex Analysis Bot.
echo.
pause

:: Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo Python is not installed. Installing Python 3.9...
    echo Please wait while we download and install Python...
    powershell -Command "Invoke-WebRequest -Uri 'https://www.python.org/ftp/python/3.9.13/python-3.9.13-amd64.exe' -OutFile 'python_installer.exe'"
    echo Running Python installer...
    start /wait python_installer.exe /quiet InstallAllUsers=1 PrependPath=1
    del python_installer.exe
    echo Python installation completed!
) else (
    echo Python is already installed.
)

:: Create virtual environment
echo Creating virtual environment...
python -m venv forex-env

:: Activate environment
call forex-env\Scripts\activate.bat

:: Install requirements
echo Installing required packages...
pip install -r requirements.txt

:: Run the application
echo Starting Forex Analysis Bot...
python bot_interface.py

pause