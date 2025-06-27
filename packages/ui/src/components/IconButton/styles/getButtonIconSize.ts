import { BaseButtonIconProps } from '../../BaseButton';

export type ButtonIconSizes = Record<'small' | 'medium' | 'large', BaseButtonIconProps['size']>

export const getButtonIconSize = () => {
  return {
    small: 'xs',
    medium: 'sm',
    large: 'md'
  } as const satisfies ButtonIconSizes
}