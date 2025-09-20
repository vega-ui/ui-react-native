import { spacings } from '@vega-ui/tokens';

export const getButtonSizes = () => {
  const space = spacings()
  
  return {
    xs: space['18'],
    sm: space['21'],
    md: space['24'],
    lg: space['27'],
    xl: space['30'],
  } as const
}