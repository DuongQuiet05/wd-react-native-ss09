import { PhoneContext } from "@/context/PhoneBookContext";
import { Phone } from "@/interfaces/phone";
import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props{
  phone: Phone;
}

export default function PhoneBookItem({phone}: Props) {
  const {editPhone} = useContext(PhoneContext);

  return (
    <TouchableOpacity onPress={() => editPhone?.(phone)}>
      {/* Contact Item */}
      <View style={styles.contactItem}>
        <Text style={styles.contactName}>{phone.fullName}</Text>
        <Text style={styles.contactNumber}>{phone.phone}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contactItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactNumber: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
});
