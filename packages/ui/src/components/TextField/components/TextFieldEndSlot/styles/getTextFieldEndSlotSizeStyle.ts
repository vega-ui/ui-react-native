import { TextFieldSize } from '../../../types.ts';
import { getTextFieldPaddings } from '../../../styles/getTextFieldPaddings.ts';

export const getTextFieldEndSlotSizeStyle = (size: TextFieldSize) => {
  const { right } = getTextFieldPaddings(size)
  
  return {
    paddingRight: right,
  }
}