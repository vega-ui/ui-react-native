import { FC } from 'react';
import { useAlertContext, useAlertLabelColor } from '../../hooks';
import { Text, TextProps } from '../../../Text';

export type AlertBodyProps = TextProps

export const AlertBody: FC<AlertBodyProps> = ({ children, ...props }) => {
  const { variant, appearance } = useAlertContext()
  const color = useAlertLabelColor(variant, appearance)
  
  return (
    <Text lineHeightMultiplier={1.5} color={color} size={2} {...props}>
      {children}
    </Text>
  )
}