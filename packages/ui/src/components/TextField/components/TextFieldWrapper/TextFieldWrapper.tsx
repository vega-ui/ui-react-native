import { FC, PropsWithChildren } from 'react';
import { StyleSheet, ViewProps } from 'react-native';
import { TextFieldSize } from '../../types.ts';
import { useTextFieldWrapperStyle } from './hooks';
import Animated, { SharedValue } from 'react-native-reanimated';
import { useTextFieldAnimations, useTextFieldStyles } from '../../hooks';

export interface TextFieldWrapperProps extends ViewProps {
  size: TextFieldSize
  disabled?: boolean
  focused: SharedValue<number>
  error?: boolean
}

export const TextFieldWrapper: FC<PropsWithChildren<TextFieldWrapperProps>> = ({ style, error, focused, size, disabled, children, ...props }) => {
  const textFieldWrapper = useTextFieldWrapperStyle({ size })
  
  const { enabled: enabledStyle, disabled: disabledStyle, active: activeStyle, error: errorStyle } = useTextFieldStyles()

  const { animatedStyle } = useTextFieldAnimations({
    enabledStyle,
    disabledStyle,
    activeStyle,
    errorStyle,
    focused,
    disabled,
    error,
  })
  
  return (
    <Animated.View style={[styles.wrapper, textFieldWrapper.wrapper, animatedStyle, style]} {...props}>
      {children}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
  }
})