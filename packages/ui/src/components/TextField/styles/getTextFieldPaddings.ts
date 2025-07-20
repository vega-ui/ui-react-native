import { TextFieldSize } from '../types.ts';
import { spacings } from '@vega-ui/tokens';

export const getTextFieldPaddings = (size: TextFieldSize) => {
  const spacing = spacings();
  
  return {
    small: {
      top: spacing['6'],
      bottom: spacing['6'],
      left: spacing['10'],
      right: spacing['10'],
    },
    medium: {
      top: spacing['6'],
      bottom: spacing['6'],
      left: spacing['12'],
      right: spacing['12'],
    },
    large: {
      top: spacing['7'],
      bottom: spacing['7'],
      left: spacing['14'],
      right: spacing['14'],
    }
  }[size]
}