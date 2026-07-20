import { View, Text, StyleSheet } from "react-native";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.card}>
        <Text style={styles.title}>App Name</Text>
        <Text>Smart Field Survey</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Version</Text>
        <Text>1.0.0</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Developer</Text>
        <Text>Devanshi Vadiya</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Course</Text>
        <Text>React Native with Expo Router</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },

  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
});