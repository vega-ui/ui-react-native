import { AlertAppearance, AlertVariant } from '../types.ts';
import { StyleProp, ViewStyle } from 'react-native';
import { lightTheme, Theme } from '@vega-ui/theme';

type AllAlertVariants = `${AlertVariant}${Capitalize<AlertAppearance>}`

type AlertStyles = Record<AllAlertVariants, StyleProp<ViewStyle>>

export const getAlertStyles = (theme?: Theme): AlertStyles => {
  const { orange, green, red, blue } = theme ?? lightTheme
  
  return {
    infoFill: {
      backgroundColor: blue[100],
    },
    infoSurface: {
      backgroundColor: blue[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: blue[700],
    },
    successFill: {
      backgroundColor: green[100],
    },
    successSurface: {
      backgroundColor: green[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: green[700],
    },
    errorFill: {
      backgroundColor: red[100],
    },
    errorSurface: {
      backgroundColor: red[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: red[700],
    },
    warningFill: {
      backgroundColor: orange[100],
    },
    warningSurface: {
      backgroundColor: orange[50],
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: orange[700],
    },
  }
}