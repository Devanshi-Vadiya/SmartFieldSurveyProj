# 📋 Smart Field Survey & Inspection App

> A mobile application built with **React Native**, **Expo SDK 54**, and **Expo Router** to simplify field surveys and inspections by combining camera, GPS, contacts, and clipboard features into one easy-to-use interface.

---

## ✨ Overview

Smart Field Survey & Inspection is designed for users who need to collect information during on-site visits. The application demonstrates the integration of multiple Expo APIs along with modern navigation using **Drawer Navigation** and **Bottom Tabs**.

This project was developed as a React Native learning project to explore native device capabilities and essential mobile UI components.

---

## 🚀 Features

- 🏠 Dashboard
- 📝 Create Survey
- 📷 Capture Survey Images
- 📍 Get Current GPS Location
- 👥 Read Device Contacts
- 📋 Copy & Paste using Clipboard
- 👀 Survey Preview
- 📜 Survey History
- 👤 User Profile
- ⚙️ Settings
- 🚪 Drawer Navigation
- 📑 Bottom Tab Navigation

---

# 📱 Screens

| Dashboard | Survey | Camera |
|-----------|--------|--------|
| Manage app features | Create new survey | Capture survey photos |

| Location | Contacts | Clipboard |
|----------|----------|-----------|
| Fetch GPS coordinates | Read device contacts | Copy & Paste data |

| Preview | History | Profile |
|----------|----------|----------|
| Review survey | View previous surveys | User information |

---

## 🛠 Tech Stack

- React Native
- Expo SDK 54
- Expo Router
- TypeScript
- React Navigation
- Expo APIs

---

## 📦 Expo APIs Used

| API | Purpose |
|-----|---------|
| 📷 expo-camera | Capture survey images |
| 📍 expo-location | Fetch current location |
| 👥 expo-contacts | Access device contacts |
| 📋 expo-clipboard | Copy & paste information |

---

## ⚛️ React Concepts Covered

- useState
- useEffect
- useRef
- Component-based Architecture
- Conditional Rendering
- Event Handling
- Navigation
- State Management

---

## 📚 React Native Components Used

- View
- Text
- Image
- TextInput
- Pressable
- FlatList
- ScrollView
- Alert
- ActivityIndicator
- RefreshControl
- StyleSheet

---

# 📂 Project Structure

```text
SmartFieldSurvey
│
├── app
│   ├── _layout.tsx
│   ├── index.tsx
│   │
│   ├── (drawer)
│   │   ├── _layout.tsx
│   │   ├── camera.tsx
│   │   ├── contacts.tsx
│   │   ├── clipboard.tsx
│   │   ├── location.tsx
│   │   ├── preview.tsx
│   │   ├── settings.tsx
│   │   │
│   │   └── (tabs)
│   │       ├── _layout.tsx
│   │       ├── dashboard.tsx
│   │       ├── survey.tsx
│   │       ├── history.tsx
│   │       └── profile.tsx
│
├── assets
├── package.json
├── app.json
└── tsconfig.json
```

---

# 🔄 Application Flow

```text
Start App
     │
     ▼
 Dashboard
     │
     ├─────────────┐
     │             │
     ▼             ▼
Survey         History
     │
     ▼
Camera
     │
     ▼
Location
     │
     ▼
Contacts
     │
     ▼
Clipboard
     │
     ▼
Preview
     │
     ▼
Submit Survey
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/SmartFieldSurvey.git
```

### Navigate to Project

```bash
cd SmartFieldSurvey
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npx expo start
```

---

## 📥 Required Packages

```bash
npx expo install expo-camera
npx expo install expo-location
npx expo install expo-contacts
npx expo install expo-clipboard
npx expo install react-native-maps

npx expo install @react-navigation/drawer
npx expo install @react-navigation/bottom-tabs

npx expo install react-native-gesture-handler
npx expo install react-native-reanimated

npx expo install @expo/vector-icons
```

---

## 🎯 What This Project Demonstrates

- Integration of multiple Expo APIs
- Mobile permission handling
- Drawer & Bottom Tab Navigation
- Form handling with React Native
- Device feature integration
- List rendering using FlatList
- Pull-to-refresh functionality
- Clipboard operations
- Camera integration
- GPS location services

---

## 🌱 Future Improvements

- Store survey data using AsyncStorage or a database
- Upload captured images to cloud storage
- Display locations on an interactive map
- User authentication
- Offline survey support
- Export survey reports as PDF
- Backend integration for real-time data sync

---

## 👨‍💻 Developer

**Devanshi Vadiya**

Built with ❤️ using **React Native**, **Expo Router**, and **Expo SDK 54**.