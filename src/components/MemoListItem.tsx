import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { Icon } from './Icon'
import { Link } from 'expo-router'
import { Memo } from '../../types/memo'
import { auth, db } from '../config'
import { deleteDoc, doc } from 'firebase/firestore'

const handlePress = (id: string) => {
  if (auth.currentUser === null) return
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)
  Alert.alert('メモを削除します', 'よろしいですか？', [
    {
      text: 'キャンセル'
    },
    {
      text: '削除する',
      style: 'destructive',
      onPress: () => {
        deleteDoc(ref).catch(() => Alert.alert('削除に失敗しました'))
      }
    }
  ])
}


interface Props {
  memo: Memo
}

export const MemoListItem = ({ memo: { bodyText, updatedAt, id } }: Props) => {
  if (bodyText === null || updatedAt === null) return null
  const dateString = updatedAt.toDate().toLocaleString('ja-JP')
  return (
    <Link
      href={{ pathname: '/memo/detail', params: { id } }}
      asChild
    >
      <TouchableOpacity style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle} numberOfLines={1}>{bodyText}</Text>
          <Text style={styles.memoListItemDate}>{dateString}</Text>
        </View>
        <TouchableOpacity onPress={() => handlePress(id)}>
          <Icon name="delete" size={32} color="#B0B0B0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)'
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  }
})