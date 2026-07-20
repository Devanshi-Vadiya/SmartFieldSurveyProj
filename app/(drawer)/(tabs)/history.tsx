import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  StyleSheet,
  RefreshControl,
} from "react-native";

export default function HistoryScreen() {
  const initialData = [
    {
      id: "1",
      site: "ABC Construction",
      priority: "High",
    },
    {
      id: "2",
      site: "Metro Station",
      priority: "Medium",
    },
    {
      id: "3",
      site: "Shopping Mall",
      priority: "Low",
    },
  ];

  const [history, setHistory] = useState(initialData);
  const [search, setSearch] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  function searchSurvey(text: string) {
    setSearch(text);

    const filtered = initialData.filter((item) =>
      item.site.toLowerCase().includes(text.toLowerCase())
    );

    setHistory(filtered);
  }

  function deleteSurvey(id: string) {
    const updated = history.filter((item) => item.id !== id);
    setHistory(updated);
  }

  async function refreshData() {
    setRefreshing(true);

    setTimeout(() => {
      setHistory(initialData);
      setSearch("");
      setRefreshing(false);
    }, 1000);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Survey History</Text>

      <TextInput
        placeholder="Search by Site Name"
        value={search}
        onChangeText={searchSurvey}
        style={styles.input}
      />

      <FlatList
        data={history}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshData}
          />
        }
        ListEmptyComponent={
          <Text style={styles.empty}>No Survey Found</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.site}>{item.site}</Text>

            <Text>Priority: {item.priority}</Text>

            <Pressable
              style={styles.button}
              onPress={() => deleteSurvey(item.id)}
            >
              <Text style={styles.buttonText}>
                Delete
              </Text>
            </Pressable>
          </View>
        )}
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
    padding: 12,
    marginBottom: 15,
  },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },

  site: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  button: {
    marginTop: 10,
    backgroundColor: "#FF3B30",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
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