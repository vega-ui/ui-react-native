import { spacings } from '@vega-ui/tokens';
import { SwitchSize } from '../types.ts';

export const getSwitchSizes = (): Record<SwitchSize, number> => {
  const space = spacings()
  
  return {
    small: space['12'],
    medium: space['14'],
    large: space['16'],
  } as const
}