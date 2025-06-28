import { interpolateColor, useAnimatedStyle } from 'react-native-reanimated'
import { ViewStyle } from 'react-native';
import { usePressAnimation } from '../../../shared/hooks';

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
    
    const { backgroundColor, borderColor } = enabledStyle ?? {}
    const { backgroundColor: pressedBackgroundColor, borderColor: pressedBorderColor } = pressedStyle ?? {}

    const bgColor =  backgroundColor && pressedBackgroundColor
      ? interpolateColor(pressed.value, [0, 1], [backgroundColor as string, pressedBackgroundColor as string])
      : undefined
    
    const bColor =  borderColor && pressedBorderColor
      ? interpolateColor(pressed.value, [0, 1], [borderColor as string, pressedBorderColor as string])
      : undefined
    
    return { backgroundColor: bgColor, borderColor: bColor }
  })
  
  return {
    animatedStyle,
    onPressIn,
    onPressOut,
    pressed,
  }
}