import { interpolateColor, SharedValue, useAnimatedProps } from 'react-native-reanimated'
import { TextStyle } from 'react-native';

export interface UseBaseButtonLabelPressAnimationsOptions {
  enabledStyle?: TextStyle
  pressedStyle?: TextStyle
  disabledStyle?: TextStyle
  disabled?: boolean
  sharedPressed?: SharedValue<number>
}

export const useBaseButtonIconPressAnimations = ({
  enabledStyle,
  pressedStyle,
  disabledStyle,
  disabled,
  sharedPressed,
}: UseBaseButtonLabelPressAnimationsOptions) => {
  const { color: enabledColor } = enabledStyle ?? {}
  const { color: pressedColor } = pressedStyle ?? {}
  const { color: disabledColor } = disabledStyle ?? {}
  
  const animatedProps = useAnimatedProps(() => {
    if (disabled && disabledColor) return { color: disabledColor }
    if (!sharedPressed) return { color: '' }
    
    return {
      color: interpolateColor(sharedPressed.value, [0, 1], [enabledColor as string, pressedColor as string])
    }
  })
  
  return {
    animatedProps
  }
}