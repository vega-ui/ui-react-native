import { spacings } from '@vega-ui/tokens'
import { StyleProp, ViewStyle } from 'react-native'

export type ButtonSizes = Record<'small' | 'medium' | 'large', StyleProp<ViewStyle>>

export const getButtonSizeStyles = () => {
  const space = spacings()
  
  return {
    small: {
      height: space['21'],
      width: space['21'],
    },
    medium: {
      height: space['24'],
      width: space['24'],
    },
    large: {
      height: space['27'],
      width: space['27'],
    }
  } as const satisfies ButtonSizes
}