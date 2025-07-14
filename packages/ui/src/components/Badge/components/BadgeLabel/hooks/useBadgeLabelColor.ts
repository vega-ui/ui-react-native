import { useTheme } from '@vega-ui/theme';
import { capitalize } from '@vega-ui/utils';
import { BadgeVariant, BadgeAppearance } from '../../../types.ts';
import { getBadgeLabelColor } from '../styles';

export const useBadgeLabelColor = (variant: BadgeVariant, appearance: BadgeAppearance) => {
  const { theme } = useTheme()
  const type = `${variant}${capitalize(appearance)}` as const
  
  return getBadgeLabelColor(type, theme)
}