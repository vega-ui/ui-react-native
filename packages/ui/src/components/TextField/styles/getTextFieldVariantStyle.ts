import { ViewStyle } from 'react-native';
import { Theme } from '@vega-ui/theme';

export interface TextFieldStatesStyle {
  enabled: ViewStyle
  active: ViewStyle
  disabled: ViewStyle
  error: ViewStyle
}

export const getTextFieldVariantStyle = (theme: Theme): TextFieldStatesStyle => {
  const { field, disable, surface, primary, red } = theme
  
  return {
    enabled: {
      borderColor: field.border,
      backgroundColor: surface.foreground,
    },
    active: {
      backgroundColor: surface.foreground,
      borderColor: primary[500],
    },
    disabled: {
      borderColor: field.border,
      backgroundColor: disable.background,
    },
    error: {
      borderColor: red[500],
    }
  }
}