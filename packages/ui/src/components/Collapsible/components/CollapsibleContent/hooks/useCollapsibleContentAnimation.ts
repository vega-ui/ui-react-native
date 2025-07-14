import { useAnimatedStyle, useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';
import { LayoutChangeEvent } from 'react-native';
import type { AnimationCallback } from 'react-native-reanimated/src/commonTypes.ts';
import { animations } from '@vega-ui/tokens';

export interface UseCollapsibleContentAnimationOptions {
  opened?: boolean
  callback?: AnimationCallback
}

export const useCollapsibleContentAnimation = ({ opened, callback }: UseCollapsibleContentAnimationOptions) => {
  const height = useSharedValue(0);
  
  const derivedHeight = useDerivedValue(() =>
    withTiming(height.value * Number(opened ?? 0), {
      duration: animations.delay.normal,
    }, callback)
  );
  
  const animatedStyle = useAnimatedStyle(() => ({
    height: derivedHeight.value,
  }));
  
  const onLayout = (e: LayoutChangeEvent) => {
    height.value = e.nativeEvent.layout.height;
  }
  
  return { onLayout, animatedStyle }
}