import { BadgeAppearance, BadgeVariant } from '../types.ts';
import { StyleProp, ViewStyle } from 'react-native';
import { lightTheme, Theme } from '@vega-ui/theme';

type AllBadgeVariants = `${BadgeVariant}${Capitalize<BadgeAppearance>}`

type BadgeStyles = Record<AllBadgeVariants, StyleProp<ViewStyle>>

export const getBadgeStyles = (theme?: Theme): BadgeStyles => {
  const { orange, green, red, blue } = theme ?? lightTheme
  
  return {
    infoFill: {
      backgroundColor: blue[500],
    },
    infoSurface: {
      backgroundColor: blue[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: blue[700],
    },
    infoOutline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: blue[500],
    },
    infoGhost: {
      backgroundColor: blue[100],
    },
    successFill: {
      backgroundColor: green[500],
    },
    successSurface: {
      backgroundColor: green[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: green[700],
    },
    successOutline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: green[500],
    },
    successGhost: {
      backgroundColor: green[100],
    },
    warningFill: {
      backgroundColor: orange[500],
    },
    warningSurface: {
      backgroundColor: orange[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: orange[700],
    },
    warningOutline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: orange[500],
    },
    warningGhost: {
      backgroundColor: orange[100],
    },
    errorFill: {
      backgroundColor: red[500],
    },
    errorSurface: {
      backgroundColor: red[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: red[700],
    },
    errorOutline: {
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: red[500],
    },
    errorGhost: {
      backgroundColor: red[100],
    },
  }
}