import { spacings } from '@vega-ui/tokens'
import { StyleProp, ViewStyle } from 'react-native'
import { ButtonSize } from '../types.ts';

export type ButtonSizes = Record<ButtonSize, StyleProp<ViewStyle>>


export const getButtonSizeStyles = () => {
  const space = spacings()
  
  return {
    small: {
      height: space['21'],
      paddingInline: space['10'],
      paddingBlock: space['6'],
    },
    medium: {
      height: space['24'],
      paddingInline: space['18'],
      paddingBlock: space['7'],
    },
    large: {
      height: space['27'],
      paddingInline: space['24'],
      paddingBlock: space['8'],
    }
  } as const satisfies ButtonSizes
}