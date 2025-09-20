import { BaseButtonLabelProps } from '../../BaseButton';
import { ButtonSize } from '../types.ts';

export type ButtonLabelSizes = Record<ButtonSize, BaseButtonLabelProps['size']>

export const getButtonLabelSize = () => {
  return {
    xs: 2,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 4,
  } as const satisfies ButtonLabelSizes
}