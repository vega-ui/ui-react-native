import { TextFieldSize } from '../../../types.ts';
import { useThemedStyle } from '../../../../../shared/hooks';
import { getTextFieldWrapperSizeStyle } from '../styles';

interface TextFieldWrapperStyleOptions {
  size: TextFieldSize
  textFieldOutlineWidth?: number
}

export const useTextFieldWrapperStyle = ({ size, textFieldOutlineWidth = 1 }: TextFieldWrapperStyleOptions) => {
  return useThemedStyle(() => ({
    wrapper: getTextFieldWrapperSizeStyle({ size, textFieldOutlineWidth })
  }), [size, textFieldOutlineWidth])
}