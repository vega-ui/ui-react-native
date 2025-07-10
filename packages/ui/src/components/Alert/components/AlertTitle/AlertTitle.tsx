import { FC, ReactElement, ReactNode } from 'react';
import { AlertAppearance, AlertVariant } from '../../types.ts';
import { useAlertLabelColor } from '../../hooks';
import { Text } from '../../../Text';

export interface AlertTitleProps {
  variant: AlertVariant,
  appearance: AlertAppearance
  children?: ReactNode
}

export const AlertTitle: FC<AlertTitleProps> = ({ variant, appearance, children }) => {
  const color = useAlertLabelColor(variant, appearance)
  
  return (
    <Text lineHeightMultiplier={1} color={color} fontWeight={500} size={3}>
      {children}
    </Text>
  )
}