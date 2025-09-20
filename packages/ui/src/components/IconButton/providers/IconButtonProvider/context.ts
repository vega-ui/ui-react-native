import { Context, createContext } from 'react';
import { IconButtonSize } from '../../types.ts';

export interface IconButtonContextState {
  size?: IconButtonSize
}

export const defaultIconButtonContext: IconButtonContextState = {
  size: 'md'
}

export const IconButtonContext: Context<IconButtonContextState> = createContext(defaultIconButtonContext)