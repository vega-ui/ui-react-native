import { FC } from 'react';
import { ViewProps } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSwitchAnimationContext, useSwitchContext } from '../../hooks';
import { useSwitchThumbAnimations, useSwitchThumbStyle } from './hooks';

export type SwitchThumbProps = ViewProps

export const SwitchThumb: FC<SwitchThumbProps> = ({ ...props }) => {
  const { trackHeight, trackWidth } = useSwitchAnimationContext()
  const { padding = 2, active, disabled } = useSwitchContext()
  
  const { animatedStyle } = useSwitchThumbAnimations({
    trackHeight,
    trackWidth,
    padding,
    active,
  })
  
  const style = useSwitchThumbStyle(disabled)

  return (
    <Animated.View style={[animatedStyle, style.thumb]} {...props} />
  )
}