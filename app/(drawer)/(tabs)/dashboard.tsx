import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Smart Field Survey</Text>

      <Text style={styles.subtitle}>
        Welcome to the Survey & Inspection App
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(drawer)/(tabs)/survey")}
      >
        <Text style={styles.buttonText}>Create New Survey</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(drawer)/camera")}
      >
        <Text style={styles.buttonText}>Open Camera</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(drawer)/location")}
      >
        <Text style={styles.buttonText}>Get Location</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(drawer)/contacts")}
      >
        <Text style={styles.buttonText}>View Contacts</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(drawer)/clipboard")}
      >
        <Text style={styles.buttonText}>Clipboard</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(drawer)/preview")}
      >
        <Text style={styles.buttonText}>Survey Preview</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/(drawer)/(tabs)/history")}
      >
        <Text style={styles.buttonText}>Survey History</Text>
      </Pressable>
      <Text
  style={{
    marginTop: 30,
    color: "gray",
    textAlign: "center",
  }}
>
  Developed using React Native & Expo
</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: "center",
  },

  button: {
    width: "100%",
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});