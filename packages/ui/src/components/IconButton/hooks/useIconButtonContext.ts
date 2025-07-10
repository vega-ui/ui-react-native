import { useContext } from 'react';
import { IconButtonContext } from '../providers/IconButtonProvider/context.ts';

export const useIconButtonContext = () => useContext(IconButtonContext)