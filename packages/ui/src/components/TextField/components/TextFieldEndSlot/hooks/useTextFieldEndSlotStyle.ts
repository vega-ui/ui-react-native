import { TextFieldSize } from '../../../types.ts';
import { useStyle } from '../../../../../shared/hooks';
import { getTextFieldEndSlotSizeStyle } from '../styles';

export const useTextFieldEndSlotStyle = (size: TextFieldSize) => {
  return useStyle(() => ({ textFieldSlot: getTextFieldEndSlotSizeStyle(size) }), [size])
}