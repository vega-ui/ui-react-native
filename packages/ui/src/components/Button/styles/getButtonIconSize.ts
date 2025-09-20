import { BaseButtonIconProps } from '../../BaseButton';
import { ButtonSize } from '../types.ts';

export type ButtonLabelSizes = Record<ButtonSize, BaseButtonIconProps['size']>

export const getButtonIconSize = () => {
  return {
    xs: 'xs',
    sm: 'xs',
    md: 'sm',
    lg: 'md',
    xl: 'md'
  } as const satisfies ButtonLabelSizes
}