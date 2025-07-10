import { FC } from 'react';
import { AlertAppearance, AlertVariant } from '../../types.ts';
import { Icon } from '../../../Icon';
import { useAlertLabelColor } from '../../hooks';
import { iconMapper } from './utils';

export interface AlertIconProps {
  variant: AlertVariant,
  appearance: AlertAppearance,
}

export const AlertIcon: FC<AlertIconProps> = ({ variant, appearance }) => {
  const color = useAlertLabelColor(variant, appearance)
  
  return <Icon color={color} size='md'>{iconMapper[variant]}</Icon>
}