import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";

export default function ClipboardScreen() {
  const [text, setText] = useState("");
  const [clipboardText, setClipboardText] = useState("");

  async function copyText() {
    if (text.trim() === "") {
      Alert.alert("Error", "Please enter some text.");
      return;
    }

    await Clipboard.setStringAsync(text);
    Alert.alert("Success", "Text copied to clipboard.");
  }

  async function pasteText() {
    const copiedText = await Clipboard.getStringAsync();
    setClipboardText(copiedText);
  }

  function clearText() {
    setText("");
    setClipboardText("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Clipboard Demo</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />

      <Pressable style={styles.button} onPress={copyText}>
        <Text style={styles.buttonText}>Copy</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={pasteText}>
        <Text style={styles.buttonText}>Paste</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={clearText}>
        <Text style={styles.buttonText}>Clear</Text>
      </Pressable>

      <Text style={styles.result}>Clipboard Text:</Text>

      <Text style={styles.output}>{clipboardText}</Text>
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

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: "bold",
  },

  output: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
});