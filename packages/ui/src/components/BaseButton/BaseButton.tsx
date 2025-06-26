import { FC } from 'react';
import { StyleSheet, Pressable, PressableProps } from 'react-native';
import Animated from 'react-native-reanimated'
import { useBaseButtonPressAnimations, useBaseButtonStyles } from './hooks';
import { BaseButtonAnimationProvider, BaseButtonProvider } from './providers';
import { BaseButtonAppearance, BaseButtonVariant } from './types.ts';

export interface BaseButtonProps extends PressableProps {
  /**
   * If true, renders the text as a child component using `Slot`.
   * Useful for compatibility with native elements or other components.
   */
  asChild?: boolean
  
  variant?: BaseButtonVariant
  
  appearance?: BaseButtonAppearance
  
  disabled?: boolean
  
  pressableStyle?: PressableProps['style']
}

/** Text is a UI component used to display readable content, such as labels, descriptions, or body text, with customizable styling */
export const BaseButton: FC<BaseButtonProps> = ({
  children,
  variant = 'primary',
  appearance = 'fill',
  disabled,
  style,
  pressableStyle,
  ...props
}) => {
  const buttonStyles = useBaseButtonStyles({ variant, appearance })
  
  const { animatedStyle, onPressIn, onPressOut, pressed: sharedPressed } = useBaseButtonPressAnimations({
    enabledStyle: buttonStyles.enabled,
    pressedStyle: buttonStyles.pressed,
    disabledStyle: buttonStyles.disabled,
    disabled,
  })

  return (
    <BaseButtonAnimationProvider pressed={sharedPressed}>
      <Pressable
        role='button'
        disabled={disabled}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={pressableStyle}
        {...props}
      >
        {({ pressed }) => (
          <BaseButtonProvider disabled={disabled} pressed={pressed} variant={variant} appearance={appearance}>
            <Animated.View
              style={[
                buttonStyle.button,
                pressed ? buttonStyles.pressed : buttonStyles.enabled,
                animatedStyle,
                typeof style === 'function' ? style({ pressed }) : style
              ]}
            >
              {typeof children === 'function' ? children({ pressed }) : children}
            </Animated.View>
          </BaseButtonProvider>
        )}
      </Pressable>
    </BaseButtonAnimationProvider>
  )
}

const buttonStyle = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
})