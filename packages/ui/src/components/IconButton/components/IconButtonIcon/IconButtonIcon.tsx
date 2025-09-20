import { FC, ReactElement } from 'react';
import { BaseButtonIcon } from '../../../BaseButton';
import { useIconButtonContext } from '../../hooks';
import { getIconButtonIconSize } from './styles';

export interface IconButtonIconProps {
  children?: ReactElement
}

export const IconButtonIcon: FC<IconButtonIconProps> = ({ children }) => {
  const { size = 'md' } = useIconButtonContext()
  
  return (
    <BaseButtonIcon size={getIconButtonIconSize(size)}>
      {children}
    </BaseButtonIcon>
  )
}