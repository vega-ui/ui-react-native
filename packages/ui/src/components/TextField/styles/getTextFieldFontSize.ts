import { TextFieldSize } from '../types.ts';

export const getTextFieldFontSize = (size: TextFieldSize) => {
  return {
    small: 14,
    medium: 16,
    large: 18,
  }[size]
}