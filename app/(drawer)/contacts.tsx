import { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  StyleSheet,
  Pressable,
  RefreshControl,
  Alert,
} from "react-native";
import * as Contacts from "expo-contacts";
import * as Clipboard from "expo-clipboard";

export default function ContactsScreen() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [filteredContacts, setFilteredContacts] = useState<Contacts.Contact[]>([]);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    const { status } = await Contacts.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied", "Contacts permission is required.");
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers],
    });

    setContacts(data);
    setFilteredContacts(data);
  }

  function searchContact(text: string) {
    setSearch(text);

    const filtered = contacts.filter((contact) =>
      contact.name?.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredContacts(filtered);
  }

  async function refreshContacts() {
    setRefreshing(true);
    await loadContacts();
    setRefreshing(false);
  }

  async function copyNumber(number: string) {
    await Clipboard.setStringAsync(number);
    Alert.alert("Copied", "Phone number copied.");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contacts</Text>

      <TextInput
        placeholder="Search Contact"
        style={styles.input}
        value={search}
        onChangeText={searchContact}
      />

      <FlatList
        data={filteredContacts}
       keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshContacts}
          />
        }
        ListEmptyComponent={
          <Text style={styles.empty}>No Contacts Found</Text>
        }
       renderItem={({ item }) => {
  const phoneNumber =
    item.phoneNumbers && item.phoneNumbers.length > 0
      ? item.phoneNumbers[0].number
      : undefined;

  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.number}>
        {phoneNumber || "No Number"}
      </Text>

      {phoneNumber && (
        <Pressable
          style={styles.button}
          onPress={() => copyNumber(phoneNumber)}
        >
          <Text style={styles.buttonText}>Copy Number</Text>
        </Pressable>
      )}
    </View>
  );
}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#fff",
  },

  heading: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },

  number: {
    marginVertical: 5,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  empty: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
});