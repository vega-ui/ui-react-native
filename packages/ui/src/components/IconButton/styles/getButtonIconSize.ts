import { BaseButtonLabelProps } from '../../BaseButton';

export type ButtonLabelSizes = Record<'small' | 'medium' | 'large', BaseButtonLabelProps['size']>

export const getButtonLabelSize = () => {
  return {
    small: 2,
    medium: 3,
    large: 4
  } as const satisfies ButtonLabelSizes
}