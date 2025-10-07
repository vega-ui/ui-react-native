import { ViewStyle } from 'react-native';
import { Theme } from '@vega-ui/theme';

export interface TextFieldStatesStyle {
  enabled: ViewStyle
  active: ViewStyle
  disabled: ViewStyle
  error: ViewStyle
}

export const getTextFieldVariantStyle = (theme: Theme): TextFieldStatesStyle => {
  const { field, disable, primary, red } = theme
  
  return {
    enabled: {
      borderColor: 'transparent',
      backgroundColor: field.backgroundColor,
    },
    active: {
      backgroundColor: field.backgroundColor,
      borderColor: primary[500],
    },
    disabled: {
      backgroundColor: disable.background,
    },
    error: {
      backgroundColor: field.backgroundColor,
      borderColor: red[500],
    }
  }
}