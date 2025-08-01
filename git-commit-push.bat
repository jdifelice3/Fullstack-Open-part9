@echo off
:: Navigate to the folder where your git repo is (optional if run from repo folder)
:: cd C:\path\to\your\repo

:: Check if a commit message was passed as an argument
if "%~1"=="" (
    set /p commitMsg="Enter commit message: "
) else (
    set commitMsg=%*
)

echo Adding all files...
git add --all

echo Committing with message: "%commitMsg%"
git commit -m "%commitMsg%"

echo Switching branch to main
git branch -M main

echo Pushing to remote...
git push -u origin main

echo === Git push complete ===
pause
