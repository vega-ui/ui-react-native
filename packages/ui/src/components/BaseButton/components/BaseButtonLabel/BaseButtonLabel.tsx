import { FC } from 'react';
import Animated from 'react-native-reanimated';
import { Text, TextProps } from '../../../Text';
import { useBaseButtonAnimationContext, useBaseButtonContext } from '../../hooks';
import { useBaseButtonLabelPressAnimations, useBaseButtonLabelStyles } from './hooks';

export type BaseButtonLabelProps = TextProps

const AnimatedText = Animated.createAnimatedComponent(Text)

export const BaseButtonLabel: FC<BaseButtonLabelProps> = ({ style, ...props }) => {
  const { variant, appearance, disabled, pressed } = useBaseButtonContext()
  const { pressed: sharedPressed } = useBaseButtonAnimationContext()
  
  const labelStyles = useBaseButtonLabelStyles({ variant, appearance })

  const { animatedStyle } = useBaseButtonLabelPressAnimations({
    enabledStyle: labelStyles.enabled,
    pressedStyle: labelStyles.pressed,
    disabledStyle: labelStyles.disabled,
    disabled,
    sharedPressed,
  })
  
  return (
    <AnimatedText
      fontWeight={500}
      {...props}
      style={[
        pressed ? labelStyles.pressed : labelStyles.enabled,
        !disabled && animatedStyle,
        disabled && labelStyles.disabled,
        style,
      ]}
    />
  )
}