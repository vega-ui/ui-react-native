import { spacings } from '@vega-ui/tokens';
import { BadgeSize } from '../types.ts';

export const getBadgeSizes = (): Record<BadgeSize, number> => {
  const space = spacings()
  
  return {
    xs: space['14'],
    sm: space['16'],
    md: space['18'],
    lg: space['20'],
    xl: space['22'],
  } as const
}