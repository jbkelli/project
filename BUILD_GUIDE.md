# Building Standalone Apps - Complete Guide

Your app is now configured to build standalone APK/IPA files that can be installed directly on phones!

## 🎯 Build Options

### Option 1: APK for Android (Recommended for Testing)
Build an APK file that you can directly install on any Android device without Google Play Store:

```bash
eas build -p android --profile preview
```

**What this does:**
- Creates an `.apk` file
- Can be installed on any Android device (no Play Store needed)
- Perfect for testing and sharing with friends
- Build time: ~15-20 minutes

**After build completes:**
1. Download the APK from the link provided
2. Transfer it to your Android phone
3. Enable "Install from Unknown Sources" in your phone settings
4. Install the APK
5. Done! Your app runs standalone without Expo Go

---

### Option 2: AAB for Google Play Store
Build an Android App Bundle for publishing to Google Play Store:

```bash
eas build -p android --profile production
```

**What this does:**
- Creates an `.aab` file optimized for Play Store
- Required for Play Store submission
- Build time: ~15-20 minutes

---

### Option 3: Build for iOS
Build for iPhone/iPad (requires Apple Developer account - $99/year):

```bash
eas build -p ios --profile preview
```

**Requirements:**
- Apple Developer account ($99/year)
- Build time: ~20-25 minutes

---

## 📱 Quick Start - Android APK (Most Common)

**Step 1:** Start the build
```bash
eas build -p android --profile preview
```

**Step 2:** Wait for build to complete
- EAS will build your app in the cloud
- You'll get a link to download when done
- You can close your terminal - build runs in the cloud!

**Step 3:** Download and install
1. Click the download link from the terminal output
2. Or visit: https://expo.dev/accounts/l4nc3/projects/number-system-converter/builds
3. Download the APK to your phone
4. Install it!

---

## 🔄 Build Both Platforms at Once

```bash
eas build --platform all --profile preview
```

This builds both Android APK and iOS IPA files simultaneously.

---

## 📊 Check Build Status

View all your builds online:
```
https://expo.dev/accounts/l4nc3/projects/number-system-converter/builds
```

Or in terminal:
```bash
eas build:list
```

---

## ⚙️ Build Profiles

Your project has 3 build profiles configured in `eas.json`:

1. **preview** - APK/IPA for testing (no app store)
2. **development** - Debug build with development tools
3. **production** - Optimized build for app stores

---

## 🚀 Publishing to App Stores

### Android - Google Play Store
```bash
# 1. Build production AAB
eas build -p android --profile production

# 2. Submit to Play Store (requires Google Play Developer account - $25 one-time)
eas submit -p android
```

### iOS - Apple App Store
```bash
# 1. Build production IPA
eas build -p ios --profile production

# 2. Submit to App Store (requires Apple Developer account - $99/year)
eas submit -p ios
```

---

## 💡 Tips

- **First build?** Use preview profile for Android to get a quick APK
- **Builds are free** with Expo's free tier (limited builds per month)
- **Builds run in cloud** - you can close your terminal/computer
- **Get email notifications** when builds complete
- **Incremental updates** available with Expo Updates (OTA updates)

---

## 📝 Next Steps

1. Run: `eas build -p android --profile preview`
2. Wait for build to complete (~15-20 min)
3. Download and install the APK on your Android phone
4. Your app runs standalone! 🎉

No more Expo Go needed!
