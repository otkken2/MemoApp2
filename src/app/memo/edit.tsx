import {
  View,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native'
import { CircleButton } from '../../components/CircleButton'
import { Icon } from '../../components/Icon'
import { router, useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react'
import { db, auth } from '../../config'
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'


const handlePress = (id: string, bodyText: string) => {
  if (auth.currentUser === null) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  setDoc(ref, {
    bodyText,
    updatedAt: Timestamp.fromDate(new Date())
  }).then(() => {
    router.back()
  }).catch((error) => {
    console.log(error)
    Alert.alert('更新に失敗しました')
  })
}

const Edit = () => {
  const [bodyText, setBodyText] = useState<string>('')
  const id = String(useLocalSearchParams().id)

  useEffect(() => {
    // データの取得から
    if (auth.currentUser === null) return
    const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
    getDoc(ref).then((docRef) => {
      const remoteBodyText = docRef?.data()?.bodyText
      setBodyText(remoteBodyText)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          style={styles.input}
          multiline
          onChangeText={(text) => {
            setBodyText(text)
          }}
        />
      </View>
      <CircleButton onPress={() => handlePress(id, bodyText)}>
        <Icon name="check" size={40} color="white" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 32,
    paddingHorizontal: 27
  }
})

export default Edit