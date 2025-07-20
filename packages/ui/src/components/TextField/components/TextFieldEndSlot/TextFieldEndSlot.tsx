import { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { TextFieldSize } from '../../types.ts';
import { useTextFieldEndSlotStyle } from './hooks';

export interface TextFieldEndSlotProps extends ViewProps {
  size: TextFieldSize
}

export const TextFieldEndSlot: FC<TextFieldEndSlotProps> = ({
  size,
  children,
  style,
  ...props
}) => {
  const endSlotStyle = useTextFieldEndSlotStyle(size)
  
  return (
    <View style={[endSlotStyle.textFieldSlot, style, styles.slot]} {...props}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  slot: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})