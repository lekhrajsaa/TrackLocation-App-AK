import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeMessage() {
  return (
    <View >
      <Text style={styles.textStyle}>Welcome to the </Text>
      <Text style={styles.textStyle}>Location Tracking App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    alignSelf: 'center'
  }
})