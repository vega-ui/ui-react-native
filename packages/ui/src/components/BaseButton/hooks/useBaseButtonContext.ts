import { useContext } from 'react';
import { BaseButtonContext } from '../providers/BaseButtonProvider/context.ts';

export const useBaseButtonContext = () => useContext(BaseButtonContext)