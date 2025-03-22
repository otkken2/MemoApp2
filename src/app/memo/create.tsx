import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'
import { CircleButton } from '../../components/CircleButton'
import { Icon } from '../../components/Icon'
import { router } from 'expo-router'

const handlePress = () => {
  router.back()
}

const Create = () => {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='height'>
      <View style={styles.inputContainer}>
        <TextInput
          value=''
          style={styles.input}
          multiline
        />
      </View>
      <CircleButton onPress={handlePress}>
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
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create