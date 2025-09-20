import { spacings } from '@vega-ui/tokens'
import { StyleProp, ViewStyle } from 'react-native'
import { ButtonSize } from '../types.ts';

export type ButtonSizes = Record<ButtonSize, StyleProp<ViewStyle>>


export const getButtonSizeStyles = () => {
  const space = spacings()
  
  return {
    xs: {
      height: space['18'],
      paddingInline: space['8'],
      paddingBlock: space['4'],
    },
    sm: {
      height: space['21'],
      paddingInline: space['10'],
      paddingBlock: space['6'],
    },
    md: {
      height: space['24'],
      paddingInline: space['18'],
      paddingBlock: space['7'],
    },
    lg: {
      height: space['27'],
      paddingInline: space['24'],
      paddingBlock: space['8'],
    },
    xl: {
      height: space['30'],
      paddingInline: space['24'],
      paddingBlock: space['8'],
    },
  } as const satisfies ButtonSizes
}