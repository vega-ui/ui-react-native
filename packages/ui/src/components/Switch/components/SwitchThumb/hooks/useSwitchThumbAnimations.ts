import { interpolate, SharedValue, useAnimatedStyle, useDerivedValue, withTiming } from 'react-native-reanimated';
import { animations } from '@vega-ui/tokens';

export interface UseSwitchThumbAnimationsOptions {
  trackHeight: SharedValue<number>
  trackWidth: SharedValue<number>
  padding?: number
  active: boolean
}

export const useSwitchThumbAnimations = ({ active, padding = 2, trackWidth, trackHeight }: UseSwitchThumbAnimationsOptions) => {
  const size = useDerivedValue(() => trackHeight.value - padding * 2)
  
  const animatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(active),
      [0, 1],
      [0, trackWidth.value - trackHeight.value]
    );
    
    const translateValue = withTiming(moveValue, { duration: animations.delay.normal });
    
    return {
      transform: [{ translateX: translateValue }],
      borderRadius: size.value,
      width: size.value,
      height: size.value,
    };
  });
  
  return {
    animatedStyle
  }
}