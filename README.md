# Number System Converter - React Native App

A cross-platform mobile application for converting numbers between different number systems (Binary, Octal, Decimal, and Hexadecimal).

## Features

- ✅ Convert between Binary (Base 2), Octal (Base 8), Decimal (Base 10), and Hexadecimal (Base 16)
- ✅ Real-time validation of input based on selected base
- ✅ Clean and intuitive user interface
- ✅ View all conversions simultaneously
- ✅ Cross-platform support (iOS, Android, and Web)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- For iOS: Xcode (Mac only)
- For Android: Android Studio and Android SDK

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

## Running the App

### On Android
```bash
npm run android
```
Or press `a` in the Expo terminal after running `npm start`

### On iOS (Mac only)
```bash
npm run ios
```
Or press `i` in the Expo terminal after running `npm start`

### On Web
```bash
npm run web
```
Or press `w` in the Expo terminal after running `npm start`

### Using Expo Go App
1. Install Expo Go on your mobile device from App Store or Play Store
2. Run `npm start` or `expo start`
3. Scan the QR code with your device

## How to Use

1. **Select Input Base**: Choose the base of your input number (Binary, Octal, Decimal, or Hexadecimal)
2. **Enter Number**: Type your number in the input field
3. **Convert**: Tap the "Convert" button to see the number in all other bases
4. **Clear**: Tap "Clear" to reset and start a new conversion

## Number System Examples

- **Binary (Base 2)**: Only uses 0 and 1 (e.g., 1010)
- **Octal (Base 8)**: Uses digits 0-7 (e.g., 752)
- **Decimal (Base 10)**: Uses digits 0-9 (e.g., 255)
- **Hexadecimal (Base 16)**: Uses 0-9 and A-F (e.g., FF)

## Project Structure

```
Project/
├── App.js                  # Main application component
├── utils/
│   └── converter.js        # Number conversion utility functions
├── package.json           # Project dependencies
├── app.json              # Expo configuration
└── babel.config.js       # Babel configuration
```

## Technologies Used

- React Native
- Expo
- JavaScript

## License

MIT License
