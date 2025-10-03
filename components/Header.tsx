import { PhoneContext } from '@/context/PhoneBookContext';
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Header() {
  const {openForm} = useContext(PhoneContext);

  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>Danh bạ</Text>
        <TouchableOpacity style={styles.addButton} onPress={openForm}>
          <Text style={styles.addButtonText}>THÊM MỚI</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#e0e0e0",
      },
      headerTitle: {
        fontSize: 24,
        fontWeight: "bold",
      },
      addButton: {
        backgroundColor: "#007aff",
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
      },
      addButtonText: {
        color: "#fff",
        fontWeight: "bold",
      },
})