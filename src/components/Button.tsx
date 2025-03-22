import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface Props {
  label: string
}

export const Button = ({ label }: Props) => {
  return (
    <View style={styles.button}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    color: '#ffffff',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24
  }
})
