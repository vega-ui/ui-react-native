import {
  DerivedValue,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import { ViewStyle } from 'react-native';
import { mergeInterpolateColor } from '../../../../../shared/helpers';
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
    const target = (active ? 2 : 0)
    return (pressed.value !== 0 && !active) ? pressed.value : withTiming(target, { duration: animations.delay.normal });
  }, [active]);
  
  const animatedStyle = useAnimatedStyle(() => {
    if (disabled && disabledStyle) return disabledStyle
    return mergeInterpolateColor([enabledStyle, pressedStyle, activeStyle], animatedColor as DerivedValue<number>)
  })
  
  return {
    animatedStyle,
  }
}