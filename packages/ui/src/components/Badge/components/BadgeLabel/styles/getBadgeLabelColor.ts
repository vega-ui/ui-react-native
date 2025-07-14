import { BadgeVariant, BadgeAppearance } from '../../../types.ts';
import { lightTheme, Theme } from '@vega-ui/theme';

type AllBadgeVariants = `${BadgeVariant}${Capitalize<BadgeAppearance>}`

export const getBadgeLabelColor = (type: AllBadgeVariants, theme?: Theme) => {
  const { orange, green, red, blue, white } = theme ?? lightTheme
  
  return {
    infoFill: white,
    infoSurface: blue[700],
    infoOutline: blue[500],
    infoGhost: blue[800],
    successFill: white,
    successSurface: green[700],
    successOutline: green[500],
    successGhost: green[800],
    errorFill: white,
    errorSurface: red[700],
    errorOutline: red[500],
    errorGhost: red[800],
    warningFill: white,
    warningSurface: orange[700],
    warningOutline: orange[500],
    warningGhost: orange[800],
  }[type]
}