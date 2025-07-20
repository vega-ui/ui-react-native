import { useAnimatedStyle } from 'react-native-reanimated'
import { ViewStyle } from 'react-native';
import { usePressAnimation } from '../../../shared/hooks';
import { mergeInterpolateColor } from '../../../shared/helpers';

export interface UseBaseButtonPressAnimationsOptions {
  enabledStyle?: ViewStyle
  pressedStyle?: ViewStyle
  disabledStyle?: ViewStyle
  disabled?: boolean
}

export const useBaseButtonPressAnimations = ({
  enabledStyle,
  pressedStyle,
  disabledStyle,
  disabled,
}: UseBaseButtonPressAnimationsOptions) => {
  const { pressed, onPressOut, onPressIn } = usePressAnimation()
  
  const animatedStyle = useAnimatedStyle(() => {
    if (disabled && disabledStyle) return disabledStyle
    return mergeInterpolateColor([enabledStyle, pressedStyle], pressed)
  })
  
  return {
    animatedStyle,
    onPressIn,
    onPressOut,
    pressed,
  }
}