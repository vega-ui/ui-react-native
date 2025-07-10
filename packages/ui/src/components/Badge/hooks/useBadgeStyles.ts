import { BadgeAppearance, BadgeSize, BadgeVariant } from '../types.ts';
import { capitalize } from '@vega-ui/utils';
import { useMemo } from 'react';
import { getBadgeStyles } from '../styles';
import { useTheme } from '@vega-ui/theme';
import { StyleProp, ViewStyle } from 'react-native';
import { getBadgeSizeStyle } from '../styles/getBadgeSizeStyle.ts';
import { getBadgeSizes } from '../styles/getBadgeSizes.ts';

export const useBadgeStyles = (variant: BadgeVariant, appearance: BadgeAppearance, size: BadgeSize): StyleProp<ViewStyle>[] => {
  const { theme } = useTheme()
  const type = `${variant}${capitalize(appearance)}` as const
  const badgeSize = typeof size === 'number' ? size : getBadgeSizes()[size]
  
  return useMemo(() => ([
    getBadgeSizeStyle(badgeSize),
    getBadgeStyles(theme)[type]
  ]), [type, theme, badgeSize])
}