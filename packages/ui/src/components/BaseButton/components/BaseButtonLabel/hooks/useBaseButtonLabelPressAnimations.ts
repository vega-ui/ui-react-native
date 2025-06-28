import { interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { TextStyle } from 'react-native';

export interface UseBaseButtonLabelPressAnimationsOptions {
  enabledStyle?: TextStyle
  pressedStyle?: TextStyle
  disabledStyle?: TextStyle
  disabled?: boolean
  sharedPressed?: SharedValue<number>
}

export const useBaseButtonLabelPressAnimations = ({
  enabledStyle,
  pressedStyle,
  disabledStyle,
  disabled,
  sharedPressed,
}: UseBaseButtonLabelPressAnimationsOptions) => {
  const animatedStyle = useAnimatedStyle(() => {
    if (disabled && disabledStyle) return disabledStyle
    if (!sharedPressed) return {}
    
    const { color } = enabledStyle ?? {}
    const { color: pressedColor } = pressedStyle ?? {}
    
    const c =  color && pressedColor
      ? interpolateColor(sharedPressed.value, [0, 1], [color as string, pressedColor as string])
      : undefined
    
    return { color: c }
  })
  
  return {
    animatedStyle
  }
}