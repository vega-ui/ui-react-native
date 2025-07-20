import { interpolateColor, SharedValue, useAnimatedProps } from 'react-native-reanimated'
import { TextStyle } from 'react-native';
import { mergeInterpolateColor } from '../../../../../shared/helpers';

export interface UseBaseButtonLabelPressAnimationsOptions {
  enabledStyle?: TextStyle
  pressedStyle?: TextStyle
  disabledStyle?: TextStyle
  disabled?: boolean
  sharedPressed: SharedValue<number>
}

export const useBaseButtonIconPressAnimations = ({
  enabledStyle,
  pressedStyle,
  disabledStyle,
  disabled,
  sharedPressed,
}: UseBaseButtonLabelPressAnimationsOptions) => {
  const animatedProps = useAnimatedProps(() => {
    if (disabled && disabledStyle) return disabledStyle
    return mergeInterpolateColor([enabledStyle, pressedStyle], sharedPressed)
  })
  
  return {
    animatedProps
  }
}