import { lightTheme, Theme } from '@vega-ui/theme';
import { StyleProp, ViewStyle } from 'react-native';

export interface ButtonStatesStyle {
  enabled: StyleProp<ViewStyle>
  pressed: StyleProp<ViewStyle>
  disabled: StyleProp<ViewStyle>
}

export type ButtonStyles = Record<'primaryFill' | 'primaryOutline' | 'primaryGhost' | 'primaryTransparent' | 'secondaryFill' | 'secondaryOutline' | 'secondaryGhost' | 'secondaryTransparent', ButtonStatesStyle>

export const getButtonStyles = (theme?: Theme) => {
  const { primary, secondary, disable } = theme ?? lightTheme
  
  return {
    /* Primary/Fill */
    primaryFill: {
      enabled: {
        backgroundColor: primary[500],
      },
      pressed: {
        backgroundColor: primary[700]
      },
      disabled: {
        backgroundColor: disable.background,
      },
    },
    
    /* Primary/Outline */
    primaryOutline: {
      enabled: {
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: primary[500],
      },
      pressed: {
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: primary[50],
        borderColor: primary[700],
      },
      disabled: {
        backgroundColor: 'transparent',
        borderColor: disable.border,
      },
    },
    
    /* Primary/Ghost */
    primaryGhost: {
      enabled: {
        backgroundColor: primary[50],
      },
      pressed: {
        backgroundColor: primary[150],
      },
      disabled: {
        backgroundColor: disable.background,
      },
    },
    
    /* Primary/Transparent */
    primaryTransparent: {
      enabled: {
        backgroundColor: 'transparent',
      },
      pressed: {
        backgroundColor: primary[50],
      },
      disabled: {
        backgroundColor: 'transparent',
      },
    },
    
    /* Secondary/Fill */
    secondaryFill: {
      enabled: {
        backgroundColor: secondary[500],
      },
      pressed: {
        backgroundColor: secondary[700]
      },
      disabled: {
        backgroundColor: disable.background,
      },
    },
    
    /* Secondary/Outline */
    secondaryOutline: {
      enabled: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: secondary[500],
      },
      pressed: {
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: secondary[50],
        borderColor: secondary[700],
      },
      disabled: {
        borderColor: disable.border,
      },
    },
    
    /* Secondary/Ghost */
    secondaryGhost: {
      enabled: {
        backgroundColor: secondary[50],
      },
      pressed: {
        backgroundColor: secondary[150],
      },
      disabled: {
        backgroundColor: disable.background,
      },
    },
    
    /* Secondary/Transparent */
    secondaryTransparent: {
      enabled: {
        backgroundColor: 'transparent',
      },
      pressed: {
        backgroundColor: secondary[50],
      },
      disabled: {
        backgroundColor: 'transparent',
      },
    },
  } satisfies ButtonStyles
}