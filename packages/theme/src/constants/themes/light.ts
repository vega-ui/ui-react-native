import { colors } from '@vega-ui/tokens';
import { Theme } from '../../types.ts';

export const lightTheme: Theme = {
  background: colors.white,
  focus: colors.blue['350'],
  text: colors.black,
  textInverse: colors.white,
  light: colors.white,
  dark: colors.black,
  error: colors.red['500'],
  
  gray: {
    0: colors.gray[0],
    50: colors.gray[50],
    100: colors.gray[100],
    150: colors.gray[150],
    200: colors.gray[200],
    250: colors.gray[250],
    300: colors.gray[300],
    350: colors.gray[350],
    400: colors.gray[400],
    450: colors.gray[450],
    500: colors.gray[500],
    550: colors.gray[550],
    600: colors.gray[600],
    650: colors.gray[650],
    700: colors.gray[700],
    750: colors.gray[750],
    800: colors.gray[800],
    850: colors.gray[850],
    900: colors.gray[900],
    950: colors.gray[950],
    1000: colors.gray[1000],
  },
} as const