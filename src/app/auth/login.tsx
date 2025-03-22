import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native"
import { Button } from "../../components/Button"
import { Link, router } from "expo-router"
import { useState } from "react"
import { auth } from '../../config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const handlePress = (email: string, password: string) => {
  //TODO: ログイン処理実装
  signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    console.log(userCredential.user.uid)
    router.replace('/memo/list')
  }).catch((error) => {
    const { message } = error
    console.log(message)
    Alert.alert(message)
  })
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email address"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />
        <Button label="Submit" onPress={() => handlePress(email, password)} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <Link href="/auth/signup" asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign up here!</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingHorizontal: 24,
    paddingVertical: 27
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#ffffff',
    borderColor: '#DDDDDD',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },
  footer: {
    flexDirection: 'row'
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: '#000000'
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
})

export default Login