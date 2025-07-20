import { TextFieldSize } from '../types.ts';
import { getTextFieldPaddings } from './getTextFieldPaddings.ts';

export const getTextFieldSizeStyle = (size: TextFieldSize) => {
  const { left, top, right, bottom } = getTextFieldPaddings(size)
  
  return {
    paddingTop: top,
    paddingBottom: bottom,
    paddingLeft: left,
    paddingRight: right
  }
}