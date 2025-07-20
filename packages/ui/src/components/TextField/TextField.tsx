import { FC, ReactElement } from 'react';
import { StyleProp, StyleSheet, TextInput, TextInputProps, ViewStyle } from 'react-native';
import { TextFieldSize } from './types.ts';
import { TextFieldEndSlot, TextFieldStartSlot, TextFieldWrapper } from './components';
import { useTextFieldStyle } from './hooks';
import { useThemeColor } from '@vega-ui/theme';
import { useFocusAnimation } from '../../shared/hooks';

export interface TextFieldProps extends TextInputProps {
  startSlot?: ReactElement
  endSlot?: ReactElement
  size?: TextFieldSize
  borderRadiusRatio?: number
  disabled?: boolean
  error?: boolean
  endSlotStyle?: StyleProp<ViewStyle>
  startSlotStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
}

export const TextField: FC<TextFieldProps> = ({
  startSlot,
  endSlot,
  size = 'medium',
  disabled = false,
  editable = true,
  selectTextOnFocus = true,
  borderRadiusRatio = 0.333,
  wrapperStyle,
  endSlotStyle,
  startSlotStyle,
  error,
  style,
  ...props
}) => {
  const { focused, onFocus, onBlur } = useFocusAnimation()

  const textFieldStyle = useTextFieldStyle({
    size,
    borderRadiusRatio,
    withStartSlot: startSlot !== undefined,
    withEndSlot: endSlot !== undefined,
  })
  
  const placeholderColor = useThemeColor('field.placeholder')
  const disabledPlaceholderColor = useThemeColor('disable.placeholderText')
  
  return (
    <TextFieldWrapper error={error} style={wrapperStyle} focused={focused} disabled={disabled} size={size}>
      {startSlot && <TextFieldStartSlot style={startSlotStyle} size={size}>{startSlot}</TextFieldStartSlot>}
      <TextInput
        onFocus={onFocus}
        onBlur={onBlur}
        accessible
        accessibilityState={{ disabled }}
        editable={!disabled && editable}
        selectTextOnFocus={!disabled && selectTextOnFocus}
        placeholderTextColor={disabled ? disabledPlaceholderColor : placeholderColor}
        style={[styles.input, textFieldStyle.input, style]}
        {...props}
      />
      {endSlot && <TextFieldEndSlot style={endSlotStyle} size={size}>{endSlot}</TextFieldEndSlot>}
    </TextFieldWrapper>
  )
}

const styles = StyleSheet.create({
  input: {
    height: '100%',
    minWidth: 250,
  }
})