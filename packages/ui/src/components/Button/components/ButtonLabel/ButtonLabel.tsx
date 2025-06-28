import { FC } from 'react';
import { BaseButtonLabel, BaseButtonLabelProps } from '../../../BaseButton';
import { useButtonContext } from '../../hooks';
import { getButtonLabelSize } from '../../styles';

export type ButtonLabelProps = BaseButtonLabelProps;

export const ButtonLabel: FC<ButtonLabelProps> = ({ ...props }) => {
  const { size = 'medium' } = useButtonContext()
  const fontSize = getButtonLabelSize()
  
  return <BaseButtonLabel size={fontSize[size]} {...props} />
}