import { interpolateColor, SharedValue, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated'
import { ViewStyle } from 'react-native';
import { animations } from '@vega-ui/tokens';

export interface UseBaseButtonPressAnimationsOptions {
  enabledStyle: ViewStyle
  pressedStyle: ViewStyle
  activeStyle: ViewStyle
  disabledStyle: ViewStyle
  disabled?: boolean
  active?: boolean
  pressed: SharedValue<number>
}

export const useSwitchPressAnimations = ({
  enabledStyle,
  pressedStyle,
  disabledStyle,
  activeStyle,
  disabled,
  active,
  pressed,
}: UseBaseButtonPressAnimationsOptions) => {
  const animatedColor = useDerivedValue(() => {
    if (pressed.value === 1 && !active) return pressed.value
    return active ? 2 : 0
  }, [active])
  
  const animatedStyle = useAnimatedStyle(() => {
    const enabledBgColor = enabledStyle?.backgroundColor as string
    const disabledBgColor = disabledStyle?.backgroundColor as string
    const preseedBgColor = pressedStyle?.backgroundColor as string
    const activeBgColor = activeStyle?.backgroundColor as string
    
    if (!enabledBgColor && !preseedBgColor && !activeBgColor) return {}
    if (disabled && disabledBgColor) return { backgroundColor: disabledBgColor }
    
    const bg = interpolateColor(
      animatedColor.value,
      [0, 1, 2],
      [enabledBgColor, preseedBgColor, activeBgColor]
    )
    const animatedBg = withTiming(bg, { duration: animations.delay.normal })
    
    return { backgroundColor: animatedBg }
  })
  
  
  return {
    animatedStyle,
  }
}