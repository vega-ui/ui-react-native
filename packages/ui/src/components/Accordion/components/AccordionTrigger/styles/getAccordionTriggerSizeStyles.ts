import { spacings } from '@vega-ui/tokens';
import { AccordionSize } from '../../../types.ts';
import { StyleProp, ViewStyle } from 'react-native';

export const getAccordionTriggerSizeStyles = (): Record<AccordionSize, StyleProp<ViewStyle>> => {
  const space = spacings()
  
  return {
    small: {
      paddingBlock: space['6'],
    },
    medium: {
      paddingBlock: space['7'],
    },
    large: {
      paddingBlock: space['8'],
    }
  }
}