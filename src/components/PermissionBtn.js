import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function PermissionBtn({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} >
      <View style={styles.btn}>
        <Text style={styles.textStyle}>
          ALLOW PERMISSION
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    padding: 18,
    borderWidth: 2,
    color: 'red',
    borderRadius: 50
  },
  textStyle: {
    fontSize: 23,
    fontWeight: 700,
  }
})