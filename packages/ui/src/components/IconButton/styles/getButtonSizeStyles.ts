import { StyleProp, ViewStyle } from 'react-native'
import { getButtonSizes } from './getButtonSizes.ts';
import { IconButtonSize } from '../types.ts';

export type ButtonSizes = Record<IconButtonSize, StyleProp<ViewStyle>>

export const getButtonSizeStyles = () => {
  const { xs: xsSize, sm: smallSize, md: mediumSize, lg: largeSize, xl: xlSize } = getButtonSizes()
  
  return {
    xs: {
      height: xsSize,
      width: xsSize,
    },
    sm: {
      height: smallSize,
      width: smallSize,
    },
    md: {
      height: mediumSize,
      width: mediumSize,
    },
    lg: {
      height: largeSize,
      width: largeSize,
    },
    xl: {
      height: xlSize,
      width: xlSize,
    },
  } as const satisfies ButtonSizes
}