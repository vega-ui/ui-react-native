import { Easing, useSharedValue, withTiming } from 'react-native-reanimated'
import { useCallback } from 'react';
import { animations } from '@vega-ui/tokens';

export interface UseFocusAnimationOptions {
  duration?: number
}

export const useFocusAnimation = (options?: UseFocusAnimationOptions) => {
  const { duration = animations.delay.normal } = options ?? {}
  const focused = useSharedValue(0)
  
  const onFocus = useCallback(() => {
    focused.value = withTiming(1, { duration, easing: Easing.inOut(Easing.quad) })
  }, [duration])
  
  const onBlur = useCallback(() => {
    focused.value = withTiming(0, { duration, easing: Easing.inOut(Easing.quad) })
  }, [duration])
  
  return { focused, onFocus, onBlur }
}