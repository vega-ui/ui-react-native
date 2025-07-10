import { BaseButtonLabelProps } from '../../BaseButton';
import { ButtonSize } from '../types.ts';

export type ButtonLabelSizes = Record<ButtonSize, BaseButtonLabelProps['size']>

export const getButtonLabelSize = () => {
  return {
    small: 2,
    medium: 3,
    large: 4
  } as const satisfies ButtonLabelSizes
}