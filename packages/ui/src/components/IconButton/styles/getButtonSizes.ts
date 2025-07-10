import { spacings } from '@vega-ui/tokens';

export const getButtonSizes = () => {
  const space = spacings()
  
  return {
    small: space['21'],
    medium: space['24'],
    large: space['27']
  } as const
}