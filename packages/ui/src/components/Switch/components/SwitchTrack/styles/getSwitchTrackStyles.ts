import { lightTheme, Theme } from '@vega-ui/theme';
import { StyleProp, ViewStyle } from 'react-native';
import { SwitchVariant } from '../../../types.ts';

export interface SwitchTrackStatesStyle {
  enabled: StyleProp<ViewStyle>
  pressed: StyleProp<ViewStyle>
  active: StyleProp<ViewStyle>
  disabled: StyleProp<ViewStyle>
}

export type SwitchTrackStyles = Record<SwitchVariant, SwitchTrackStatesStyle>

export const getSwitchTrackStyles = (theme?: Theme) => {
  const { gray, primary, secondary, disable } = theme ?? lightTheme
  
  return {
    primary: {
      enabled: {
        backgroundColor: gray[150],
      },
      pressed: {
        backgroundColor: gray[250]
      },
      active: {
        backgroundColor: primary[500]
      },
      disabled: {
        backgroundColor: disable.background,
      },
    },
    
    secondary: {
      enabled: {
        backgroundColor: gray[150],
      },
      pressed: {
        backgroundColor: gray[250]
      },
      active: {
        backgroundColor: secondary[500]
      },
      disabled: {
        backgroundColor: disable.background,
      },
    },
  } satisfies SwitchTrackStyles
}