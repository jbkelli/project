import PyInstaller.__main__
import os
import shutil

def build_executable():
    # Clean up previous builds
    if os.path.exists('dist'):
        shutil.rmtree('dist')
    if os.path.exists('build'):
        shutil.rmtree('build')
    
    # Build the GUI version
    PyInstaller.__main__.run([
        'bot_interface.py',
        '--name=Forex Analysis Bot',
        '--onefile',
        '--windowed',
        '--icon=forex_icon.ico',  # Optional: add an icon file
        '--add-data=requirements.txt;.',
        '--hidden-import=pytz',
        '--hidden-import=yfinance',
        '--hidden-import=pandas',
        '--hidden-import=numpy',
        '--hidden-import=matplotlib',
        '--hidden-import=talib',
    ])
    
    print("Build completed! Executable is in the 'dist' folder.")

if __name__ == "__main__":
    build_executable()