import { FC, ReactNode, Ref } from 'react';
import { SvgProps } from 'react-native-svg';
import { Slot } from '../Slot';
import { getIconSizeStyles } from './styles/getIconSizeStyles.ts';
import { useThemeColor } from '@vega-ui/theme';
import { View } from 'react-native';

export interface IconProps extends Omit<SvgProps, 'color'>, Record<string, unknown> {
  /**
   * Predefined size token for the icon.
   * Can be overridden by explicit width and height.
   */
  size?: '4xs' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | null | number
  
  /** Explicit width in pixels (overrides `size` if set) */
  width?: number
  
  /** Explicit height in pixels (overrides `size` if set) */
  height?: number
  
  /**
   * Icon content (required).
   * Accepts:
   * – icons from `~/icons`
   * – custom inline SVG
   * – third-party icon components (e.g. Lucide, Tabler)
   */
  children?: ReactNode
  
  color?: string | null
  
  ref?: Ref<View>
}

/** UI component for render SVG icons */
export const Icon: FC<IconProps> = ({
  size = 'sm',
  color,
  children,
  ref,
  ...props
}) => {
  const iconColor = useThemeColor('text')
  
  const s = typeof size === 'number'
    ? size
    : getIconSizeStyles(size ?? 'md')
  
  return (
    <Slot
      ref={ref}
      accessibilityRole='image'
      width={s}
      height={s}
      color={color === null ? undefined : color ? color : iconColor}
      {...props}
    >
      {children}
    </Slot>
  )
}