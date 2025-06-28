import { FC } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { useThemeColor } from '../../shared/hooks/useThemeColor.ts';

export interface SeparatorProps extends Partial<ViewProps> {
  /**
   * Orientation of the separator
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
}

interface SeparatorStyle extends Pick<SeparatorProps, 'orientation'> {
  color?: string
}

/** A Separator is a UI component used to visually divide content into distinct sections, often represented as a line or space to enhance clarity and organization in layouts */
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

const getStyles = ({ orientation, color }: SeparatorStyle) => StyleSheet.create({
  separator: {
    width: orientation === 'horizontal' ? '100%' : 1,
    height: orientation === 'horizontal' ? 1 : '100%',
    backgroundColor: color
  }
})