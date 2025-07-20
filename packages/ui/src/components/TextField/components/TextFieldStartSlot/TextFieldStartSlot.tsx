import { FC, PropsWithChildren } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { TextFieldSize } from '../../types.ts';
import { useTextFieldStartSlotStyle } from './hooks';

export interface TextFieldStartSlotProps extends ViewProps {
  size: TextFieldSize
}

export const TextFieldStartSlot: FC<PropsWithChildren<TextFieldStartSlotProps>> = ({
  size,
  children,
  style,
  ...props
}) => {
  const startSlotStyle = useTextFieldStartSlotStyle(size)
  
  return (
    <View style={[startSlotStyle.textFieldSlot, style, styles.slot]} {...props}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  slot: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})