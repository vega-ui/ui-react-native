import { lightTheme, Theme } from '@vega-ui/theme';
import { StyleProp, TextStyle } from 'react-native';
import { BaseButtonTypes } from '../types';

export interface ButtonLabelStatesStyle {
  enabled: StyleProp<TextStyle>
  pressed: StyleProp<TextStyle>
  disabled: StyleProp<TextStyle>
}

export type ButtonLabelStyles = Record<BaseButtonTypes, ButtonLabelStatesStyle>

export const getButtonLabelStyles = (theme?: Theme) => {
  const { primary, secondary, white, textInverse, disable } = theme ?? lightTheme
  
  return {
    /* Primary/Fill */
    primaryFill: {
      enabled: {
        color: white,
      },
      pressed: {
        color: white,
      },
      disabled: {
        color: disable.text,
      },
    },
    
    /* Primary/Outline */
    primaryOutline: {
      enabled: {
        color: primary[500],
      },
      pressed: {
        color: primary[700],
      },
      disabled: {
        color: disable.text,
      },
    },
    
    /* Primary/Ghost */
    primaryGhost: {
      enabled: {
        color: primary[500],
      },
      pressed: {
        color: primary[700],
      },
      disabled: {
        color: disable.text,
      },
    },
    
    /* Primary/Transparent */
    primaryTransparent: {
      enabled: {
        color: primary[500],
      },
      pressed: {
        color: primary[500],
      },
      disabled: {
        color: disable.text,
      },
    },
    
    /* Secondary/Fill */
    secondaryFill: {
      enabled: {
        color: textInverse,
      },
      pressed: {
        color: textInverse
      },
      disabled: {
        color: disable.text,
      },
    },
    
    /* Secondary/Outline */
    secondaryOutline: {
      enabled: {
        color: secondary[500],
      },
      pressed: {
        color: secondary[700],
      },
      disabled: {
        color: disable.text,
      },
    },
    
    /* Secondary/Ghost */
    secondaryGhost: {
      enabled: {
        color: secondary[500],
      },
      pressed: {
        color: secondary[700],
      },
      disabled: {
        color: disable.text,
      },
    },
    
    /* Secondary/Transparent */
    secondaryTransparent: {
      enabled: {
        color: secondary[500],
      },
      pressed: {
        color: secondary[500],
      },
      disabled: {
        color: disable.text,
      },
    },
  } satisfies ButtonLabelStyles
}