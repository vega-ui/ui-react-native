import { FC } from 'react';
import { Text, TextProps } from '../../../Text';
import { useAccordionItemContext } from '../../hooks';
import { sizeMapper } from './utils';

export type AccordionTriggerLabelProps = TextProps

export const AccordionTriggerLabel: FC<AccordionTriggerLabelProps> = ({ children, ...props }) => {
  const { size } = useAccordionItemContext()
 
  return (
    <Text {...props} fontWeight={500} size={sizeMapper(size)}>
      {children}
    </Text>
  )
}