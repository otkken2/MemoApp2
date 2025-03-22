import { View, StyleSheet } from 'react-native'
import { MemoListItem } from '../../components/MemoListItem'
import { CircleButton } from '../../components/CircleButton'
import { Icon } from '../../components/Icon'
import { router, useNavigation } from 'expo-router'
import { useEffect } from 'react'
import { LogoutButton } from '../../components/LogoutButton'
const handlePress = () => {
  router.push('/memo/create')
}

const Index = () => {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogoutButton /> }
    })
  }, [])

  return (
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="white" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})

export default Index
