import { TextFieldSize } from '../../../types.ts';
import { getTextFieldPaddings } from '../../../styles/getTextFieldPaddings.ts';

export const getTextFieldStartSlotSizeStyle = (size: TextFieldSize) => {
  const { left } = getTextFieldPaddings(size)
  
  return {
    paddingLeft: left,
  }
}