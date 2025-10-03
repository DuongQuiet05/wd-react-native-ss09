import Form from '@/components/Form'
import Header from '@/components/Header'
import ListPhoneBook from '@/components/ListPhoneBook'
import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function PhoneBook() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <ListPhoneBook />
      </ScrollView>

      <Form />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    position: "relative",
    height: "100%",
  },
})
