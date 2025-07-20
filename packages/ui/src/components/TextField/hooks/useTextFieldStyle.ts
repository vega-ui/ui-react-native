import { TextFieldSize } from '../types.ts';
import { useThemedStyle } from '../../../shared/hooks';
import { getTextFieldFontSize, getTextFieldSize, getTextFieldSizeStyle } from '../styles';
import { getTextFieldSizeSlottedStyle } from '../styles';

interface UseTextFieldStyleOptions {
  size: TextFieldSize,
  withStartSlot?: boolean
  withEndSlot?: boolean
  borderRadiusRatio: number
}

export const useTextFieldStyle = ({
  size,
  withEndSlot = false,
  withStartSlot = false,
  borderRadiusRatio = 0.333,
}: UseTextFieldStyleOptions) => {
  return useThemedStyle(({ text }) => {
    const { paddingTop, paddingLeft, paddingRight, paddingBottom, ...sizeStyles } = getTextFieldSizeStyle(size)
    const { paddingLeft: slottedPaddingLeft, paddingRight: slottedPaddingRight } = getTextFieldSizeSlottedStyle(size)
    const fontSize = getTextFieldFontSize(size)
    
    return {
      input: {
        color: text,
        ...sizeStyles,
        fontSize,
        paddingTop,
        paddingBottom,
        borderRadius: Math.ceil(getTextFieldSize(size) * borderRadiusRatio),
        paddingLeft: withStartSlot ? slottedPaddingLeft : paddingLeft,
        paddingRight: withEndSlot ? slottedPaddingRight : paddingRight,
      }
    }
  }, [size, withEndSlot, withStartSlot])
}