import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { router } from 'expo-router'

const handlePress = () => {
  router.replace('/auth/login')
}

export const LogoutButton = () => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: 'rgba(255, 255, 255, 0.7)'
  }
})
