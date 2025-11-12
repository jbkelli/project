# Quick Build Commands

## Most Common: Build Android APK (for direct install)
```bash
eas build -p android --profile preview
```
**Result:** APK file you can install on any Android device

---

## Build for iOS (requires Apple Developer account)
```bash
eas build -p ios --profile preview
```
**Result:** IPA file for iPhone/iPad

---

## Build Both Platforms
```bash
eas build --platform all --profile preview
```

---

## Check Build Status
```bash
eas build:list
```

Or visit: https://expo.dev/accounts/l4nc3/projects/number-system-converter/builds

---

## After Build Completes

1. **Download the APK/IPA** from the link in terminal
2. **Install on your phone:**
   - Android: Transfer APK and install (enable "Unknown Sources")
   - iOS: Use Apple TestFlight or install directly

**That's it!** Your app will run standalone without Expo Go! 🎉
