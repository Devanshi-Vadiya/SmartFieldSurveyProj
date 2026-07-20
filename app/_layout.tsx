import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="dashboard" />
      <Stack.Screen name="survey" />
      <Stack.Screen name="camera" />
      <Stack.Screen name="location" />
      <Stack.Screen name="contacts" />
      <Stack.Screen name="clipboard" />
      <Stack.Screen name="preview" />
      <Stack.Screen name="history" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="settings" />
    </Stack>
  );
}