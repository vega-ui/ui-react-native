import { SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { ViewStyle } from 'react-native';
import { mergeInterpolateColor, mergeStyles } from '../../../shared/helpers';

export interface UseTextFieldAnimationsOptions {
  enabledStyle?: ViewStyle
  activeStyle?: ViewStyle
  disabledStyle?: ViewStyle
  errorStyle?: ViewStyle
  focused: SharedValue<number>
  disabled?: boolean
  error?: boolean
}

export const useTextFieldAnimations = ({
  enabledStyle,
  activeStyle,
  disabledStyle,
  errorStyle,
  error,
  disabled,
  focused,
}: UseTextFieldAnimationsOptions) => {
  const animatedStyle = useAnimatedStyle(() => {
    if (disabled || error) return mergeStyles(error && errorStyle, disabled && disabledStyle)
    return mergeInterpolateColor([enabledStyle, activeStyle], focused)
  })
  
  return {
    animatedStyle,
  }
}