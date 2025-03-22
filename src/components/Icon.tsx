import { createIconSetFromIcoMoon } from '@expo/vector-icons'
import { useFonts } from 'expo-font'
import fontData from '../../assets/fonts/icomoon.ttf'

import fontSelection from '../../assets/fonts/selection.json'

const CustomIcon = createIconSetFromIcoMoon(
  fontSelection,
  'icomoon',
  fontData
)

interface Props {
  name: string
  size: number
  color: string
}
export const Icon = ({ name, size, color }: Props): JSX.Element | null => {
  const [fontLoaded] = useFonts({
    IcoMoon: fontData
  })
  if (!fontLoaded) {
    return null
  }
  return (
    <CustomIcon name={name} size={size} color={color} />
  )
}

export default Icon