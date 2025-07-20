import { TextFieldSize } from '../../../types.ts';
import { useStyle } from '../../../../../shared/hooks';
import { getTextFieldStartSlotSizeStyle } from '../styles';

export const useTextFieldStartSlotStyle = (size: TextFieldSize) => {
  return useStyle(() => ({ textFieldSlot: getTextFieldStartSlotSizeStyle(size) }), [size])
}