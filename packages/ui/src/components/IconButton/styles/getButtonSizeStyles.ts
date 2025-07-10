import { StyleProp, ViewStyle } from 'react-native'
import { getButtonSizes } from './getButtonSizes.ts';
import { IconButtonSize } from '../types.ts';

export type ButtonSizes = Record<IconButtonSize, StyleProp<ViewStyle>>

export const getButtonSizeStyles = () => {
  const { small: smallSize, medium: mediumSize, large: largeSize } = getButtonSizes()
  
  return {
    small: {
      height: smallSize,
      width: smallSize,
    },
    medium: {
      height: mediumSize,
      width: mediumSize,
    },
    large: {
      height: largeSize,
      width: largeSize,
    }
  } as const satisfies ButtonSizes
}