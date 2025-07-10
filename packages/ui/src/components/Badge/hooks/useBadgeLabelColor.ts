import { useTheme } from '@vega-ui/theme';
import { capitalize } from '@vega-ui/utils';
import { getBadgeLabelColor } from '../styles';
import { BadgeVariant, BadgeAppearance } from '../types.ts';

export const useBadgeLabelColor = (variant: BadgeVariant, appearance: BadgeAppearance) => {
  const { theme } = useTheme()
  const type = `${variant}${capitalize(appearance)}` as const
  
  return getBadgeLabelColor(type, theme)
}