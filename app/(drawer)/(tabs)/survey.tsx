import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

export default function Survey() {
  const [siteName, setSiteName] = useState("");
  const [clientName, setClientName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const submitSurvey = () => {
    if (
      !siteName ||
      !clientName ||
      !description ||
      !priority
    ) {
      Alert.alert("Error", "Please fill all fields.");
      return;
    }

    Alert.alert("Success", "Survey Created Successfully!");

    setSiteName("");
    setClientName("");
    setDescription("");
    setPriority("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Create Survey</Text>

      <TextInput
        placeholder="Site Name"
        value={siteName}
        onChangeText={setSiteName}
        style={styles.input}
      />

      <TextInput
        placeholder="Client Name"
        value={clientName}
        onChangeText={setClientName}
        style={styles.input}
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        multiline
      />

      <TextInput
        placeholder="Priority (High / Medium / Low)"
        value={priority}
        onChangeText={setPriority}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={submitSurvey}>
        <Text style={styles.buttonText}>Submit Survey</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});