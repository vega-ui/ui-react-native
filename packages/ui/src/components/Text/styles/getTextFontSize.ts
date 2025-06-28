import { TextProps } from '../Text.tsx';
import { TextSize } from '../types.ts';

export const getTextFontSize = (size: TextSize = 3) => {
  return ({
    1: 12,
    2: 14,
    3: 16,
    4: 18,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 40,
    10: 48,
    11: 64,
  })[size]
}