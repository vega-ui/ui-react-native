import { TextFieldSize } from '../types.ts';
import { spacings } from '@vega-ui/tokens';

export const getTextFieldSizeSlottedStyle = (size: TextFieldSize) => {
  const spacing = spacings()
  
  return ({
    small: {
      paddingLeft: spacing['5'],
      paddingRight: spacing['5'],
    },
    medium: {
      paddingLeft: spacing['6'],
      paddingRight: spacing['6'],
    },
    large: {
      paddingLeft: spacing['7'],
      paddingRight: spacing['7'],
    }
  })[size]
}