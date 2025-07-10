import { IconButtonSize } from '../../../types.ts';
import { getButtonSizes } from '../../../styles';

export const getIconButtonIconSize = (buttonSize: IconButtonSize) => {
  const size = getButtonSizes()[buttonSize]
  return size / 3
}