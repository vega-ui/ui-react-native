import React, { FC } from 'react';
import { useBaseButtonAnimationContext, useBaseButtonContext } from '../../hooks';
import { useBaseButtonIconPressAnimations, useBaseButtonIconStyles } from './hooks';
import { Icon, IconProps } from '../../../Icon/Icon.tsx';

export type BaseButtonIconProps = IconProps

export const BaseButtonIcon: FC<BaseButtonIconProps> = ({ children, color = null, ...props }) => {
  const { variant, appearance, disabled } = useBaseButtonContext()
  const { pressed: sharedPressed } = useBaseButtonAnimationContext()
  
  const iconStyles = useBaseButtonIconStyles({ variant, appearance })
  
  const { animatedProps } = useBaseButtonIconPressAnimations({
    enabledStyle: iconStyles.enabled,
    pressedStyle: iconStyles.pressed,
    disabledStyle: iconStyles.disabled,
    disabled,
    sharedPressed,
  })
  
  return (
    <Icon color={color} {...props} animatedProps={animatedProps}>
      {children}
    </Icon>
  )
}