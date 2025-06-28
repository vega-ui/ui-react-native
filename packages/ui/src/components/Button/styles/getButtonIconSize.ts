import { BaseButtonIconProps } from '../../BaseButton';

export type ButtonLabelSizes = Record<'small' | 'medium' | 'large', BaseButtonIconProps['size']>

export const getButtonIconSize = () => {
  return {
    small: 'xs',
    medium: 'sm',
    large: 'md'
  } as const satisfies ButtonLabelSizes
}