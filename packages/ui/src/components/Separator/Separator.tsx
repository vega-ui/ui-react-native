import { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useThemeColor } from '../../hooks/useThemeColor.ts';

export interface SeparatorProps extends Partial<ViewProps> {
  orientation?: 'horizontal' | 'vertical';
}

interface SeparatorStyleProps extends Pick<SeparatorProps, 'orientation'> {
  color?: string
}

export const Separator: FC<SeparatorProps> = ({
  orientation = 'horizontal',
  style,
  ...props
}) => {
  const separatorColor = useThemeColor('gray.150')

  return (
    <View
      role='separator'
      style={[getStyles({ orientation, color: separatorColor }).separator, style]}
      {...props}
    />
  )
}

const getStyles = ({ orientation, color }: SeparatorStyleProps) => StyleSheet.create({
  separator: {
    width: orientation === 'horizontal' ? '100%' : 1,
    height: orientation === 'horizontal' ? 1 : '100%',
    backgroundColor: color
  }
})