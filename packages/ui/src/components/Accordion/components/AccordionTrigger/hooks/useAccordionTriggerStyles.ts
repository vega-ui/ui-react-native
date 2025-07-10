import { StyleProp, ViewStyle } from 'react-native';
import { useMemo } from 'react';
import { AccordionSize } from '../../../types.ts';
import { getAccordionTriggerSizeStyles } from '../styles';

export const useAccordionTriggerStyles = (size: AccordionSize): StyleProp<ViewStyle> => {
  return useMemo(() => {
    return getAccordionTriggerSizeStyles()[size]
  }, [size])
}