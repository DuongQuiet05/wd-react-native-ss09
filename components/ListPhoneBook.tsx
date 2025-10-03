import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PhoneBookItem from "./PhoneBookItem";
import { PhoneContext } from "@/context/PhoneBookContext";

export default function ListPhoneBook() {
  const { phones } = useContext(PhoneContext);

  return (
    <View style={styles.list}>
      <FlatList
        data={phones}
        renderItem={({ item }) => <PhoneBookItem phone={item} />}
        keyExtractor={(item) => item.id?.toString() || ""}
        ListEmptyComponent={<Text style={styles.emptyText}>Không có liên hệ</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "gray",
  },
});
