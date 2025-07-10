import { useAnimatedStyle, withTiming } from 'react-native-reanimated';

export interface UseAccordionTriggerArrowAnimationsOptions {
  opened: boolean
}

export const useAccordionTriggerArrowAnimations = ({
  opened,
}: UseAccordionTriggerArrowAnimationsOptions) => {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateZ: withTiming(opened ? '180deg' : '0deg', { duration: 125 }) },
      ],
    }
  })
  
  return {
    animatedStyle
  }
}