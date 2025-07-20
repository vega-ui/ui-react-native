import { TextFieldSize } from '../types.ts';
import { spacings } from '@vega-ui/tokens';

export const getTextFieldSize  = (size: TextFieldSize) => {
  const spacing = spacings()
  
  return ({
    small: spacing['21'],
    medium: spacing['24'],
    large: spacing['27'],
  } as const)[size]
}