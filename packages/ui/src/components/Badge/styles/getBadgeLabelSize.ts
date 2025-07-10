import { BadgeSize } from '../types.ts';
import { TextSize } from '../../Text/types.ts';

export const getBadgeLabelSize = (size: BadgeSize): TextSize => {
  if (typeof size === 'number') return 3
  
  return {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  }[size] as TextSize;
}