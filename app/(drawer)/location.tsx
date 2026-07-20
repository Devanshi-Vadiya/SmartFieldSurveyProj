import { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";
import * as Location from "expo-location";
import * as Clipboard from "expo-clipboard";

export default function LocationScreen() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [accuracy, setAccuracy] = useState("");

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied", "Location permission is required.");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    setLatitude(location.coords.latitude.toString());
    setLongitude(location.coords.longitude.toString());
    setAccuracy(location.coords.accuracy?.toFixed(2) || "N/A");
  }

  async function copyLocation() {
    const text = `Latitude: ${latitude}\nLongitude: ${longitude}`;

    await Clipboard.setStringAsync(text);

    Alert.alert("Copied", "Location copied to clipboard.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Current Location</Text>

      <Pressable
        style={styles.button}
        onPress={getLocation}
      >
        <Text style={styles.buttonText}>Get Location</Text>
      </Pressable>

      <Text style={styles.info}>Latitude: {latitude}</Text>

      <Text style={styles.info}>Longitude: {longitude}</Text>

      <Text style={styles.info}>Accuracy: {accuracy} meters</Text>

      <Pressable
        style={styles.button}
        onPress={copyLocation}
      >
        <Text style={styles.buttonText}>Copy Location</Text>
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
    marginBottom: 25,
  },

  info: {
    fontSize: 18,
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});