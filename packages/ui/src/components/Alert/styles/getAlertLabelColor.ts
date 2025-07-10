import { AlertAppearance, AlertVariant } from '../types.ts';
import { lightTheme, Theme } from '@vega-ui/theme';

type AllAlertVariants = `${AlertVariant}${Capitalize<AlertAppearance>}`

type AlertStyles = Record<AllAlertVariants, string>

export const getAlertLabelColor = (theme?: Theme): AlertStyles => {
  const { orange, green, red, blue } = theme ?? lightTheme
  
  return {
    infoFill: blue[800],
    infoSurface: blue[700],
    successFill: green[800],
    successSurface: green[700],
    errorFill: red[800],
    errorSurface: red[700],
    warningFill: orange[800],
    warningSurface: orange[700],
  }
}