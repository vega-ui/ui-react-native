import { interpolateColor, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { TextStyle } from 'react-native';
import { mergeInterpolateColor } from '../../../../../shared/helpers';

export interface UseBaseButtonLabelPressAnimationsOptions {
  enabledStyle?: TextStyle
  pressedStyle?: TextStyle
  disabledStyle?: TextStyle
  disabled?: boolean
  sharedPressed: SharedValue<number>
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
    return mergeInterpolateColor([enabledStyle, pressedStyle], sharedPressed)
  })
  
  return { animatedStyle }
}