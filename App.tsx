import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Hello from './src/components/Hello'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Hello bang style={{ fontSize: 16 }}>
        Kenji
      </Hello>
      <Hello bang>
        Kenji
      </Hello>
      <Text>Open up App.tsx to start working on your app!!</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default App