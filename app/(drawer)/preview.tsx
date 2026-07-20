import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
} from "react-native";

export default function PreviewScreen() {
  function submitSurvey() {
    Alert.alert(
      "Survey Submitted",
      "Your survey has been submitted successfully."
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Survey Preview</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Site Name</Text>
        <Text style={styles.value}>ABC Construction Site</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Client Name</Text>
        <Text style={styles.value}>John Smith</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Description</Text>
        <Text style={styles.value}>
          Building safety inspection completed.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Priority</Text>
        <Text style={styles.value}>High</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.value}>
          Latitude: 23.0225
        </Text>
        <Text style={styles.value}>
          Longitude: 72.5714
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Photo</Text>
        <Text style={styles.value}>
          Photo Captured Successfully
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Contact</Text>
        <Text style={styles.value}>
          +91 9876543210
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={submitSurvey}
      >
        <Text style={styles.buttonText}>
          Submit Survey
        </Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
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
    marginBottom: 5,
  },

  value: {
    fontSize: 16,
    color: "#444",
  },

  button: {
    backgroundColor: "#28A745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});