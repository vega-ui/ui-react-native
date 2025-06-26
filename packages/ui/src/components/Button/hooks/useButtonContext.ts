import { useContext } from 'react';
import { ButtonContext } from '../providers/ButtonProvider/context.ts';

export const useButtonContext = () => useContext(ButtonContext)