import { ViewStyle } from 'react-native';
import { TextFieldSize } from '../../../types.ts';
import { getTextFieldSize } from '../../../styles';

interface TextFieldWrapperSizeStyleOptions {
  size: TextFieldSize
  borderRadiusRatio?: number
  textFieldOutlineWidth?: number
}

export const getTextFieldWrapperSizeStyle = ({
  size,
  borderRadiusRatio = 0.333,
  textFieldOutlineWidth = 1,
}: TextFieldWrapperSizeStyleOptions): ViewStyle => {
  const s = getTextFieldSize(size)
  
  return {
    height: s + 2 * textFieldOutlineWidth,
    borderRadius: Math.ceil(s * borderRadiusRatio),
  }
}