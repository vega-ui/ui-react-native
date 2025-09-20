import { FC } from 'react';
import { BaseButtonIcon, BaseButtonIconProps } from '../../../BaseButton';
import { useButtonContext } from '../../hooks';
import { getButtonIconSize } from '../../styles/getButtonIconSize.ts';

export type ButtonIconProps = BaseButtonIconProps;

export const ButtonIcon: FC<ButtonIconProps> = ({ ...props }) => {
  const { size = 'md' } = useButtonContext()
  const iconSize = getButtonIconSize()

  return <BaseButtonIcon size={iconSize[size]} {...props} />
}