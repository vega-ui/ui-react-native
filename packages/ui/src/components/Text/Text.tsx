import { FC } from 'react';
import { StyleSheet, Text as RNText, TextProps as RNTextProps, TextStyle as RNTextStyle } from 'react-native';
import { useThemeColor } from '../../shared/hooks/useThemeColor.ts';
import { Slot } from '../Slot';
import { TextSize } from './types.ts';
import { getTextFontSize } from './styles';

export interface TextProps extends RNTextProps {
  /**
   * Visual size of the text, typically mapped to the design system’s type scale.
   */
  size?: TextSize;
  
  /**
   * Optional custom fontSize override (in pixels)
   */
  fontSize?: RNTextStyle['fontSize']
  
  /**
   * Optional font weight override ('normal', 'bold', '500', etc.)
   */
  fontWeight?: RNTextStyle['fontWeight']
  
  /**
   * Text color — may be raw value or token name (e.g., '#333' or 'text.primary').
   */
  color?: string
  
  /**
   * If true, renders the text as a child component using `Slot`.
   * Useful for compatibility with native elements or other components.
   */
  asChild?: boolean
}

type TextStyle = Pick<TextProps, 'size' | 'color' | 'fontSize' | 'fontWeight'>

/** Text is a UI component used to display readable content, such as labels, descriptions, or body text, with customizable styling */
export const Text: FC<TextProps> = ({
  size = 3,
  color,
  fontSize,
  fontWeight,
  asChild,
  style,
  ...props
}) => {
  const Element = asChild ? Slot : RNText;
  const textColor = useThemeColor('text')

  return (
    <Element
      style={[getStyles({ size, color: color ?? textColor, fontWeight, fontSize }).text, style]}
      {...props}
    />
  )
}

const getStyles = ({ size, color, fontSize, fontWeight }: TextStyle) => StyleSheet.create({
  text: {
    fontSize: fontSize ?? getTextFontSize(size),
    fontWeight,
    color,
  }
})