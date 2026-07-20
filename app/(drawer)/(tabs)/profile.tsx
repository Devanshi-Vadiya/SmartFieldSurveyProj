import { View, Text, Pressable, StyleSheet, Alert } from "react-native";

export default function ProfileScreen() {
  function updateProfile() {
    Alert.alert("Success", "Profile Updated");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Student Name</Text>
        <Text style={styles.value}>Devanshi Vadiya</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Course</Text>
        <Text style={styles.value}>B.Tech Computer Engineering</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>College</Text>
        <Text style={styles.value}>Swaminarayan University</Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={updateProfile}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </Pressable>
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

  label: {
    fontSize: 16,
    fontWeight: "bold",
  },

  value: {
    fontSize: 16,
    marginTop: 5,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});