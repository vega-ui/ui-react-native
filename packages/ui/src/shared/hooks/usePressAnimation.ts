import { Easing, useSharedValue, withTiming } from 'react-native-reanimated'
import { useCallback } from 'react';

export interface UsePressAnimationOptions {
  duration?: number
}

export const usePressAnimation = (options?: UsePressAnimationOptions) => {
  const { duration = 125 } = options ?? {}
  const pressed = useSharedValue(0)
  
  const onPressIn = useCallback(() => {
    pressed.value = withTiming(1, { duration, easing: Easing.inOut(Easing.quad) })
  }, [duration])
  
  const onPressOut = useCallback(() => {
    pressed.value = withTiming(0, { duration, easing: Easing.inOut(Easing.quad) })
  }, [duration])
  
  return { pressed, onPressIn, onPressOut }
}