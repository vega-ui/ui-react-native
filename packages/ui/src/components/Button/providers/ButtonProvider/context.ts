import { Context, createContext } from 'react';
import { ButtonSize } from '../../types.ts';

export interface ButtonContextState {
  size?: ButtonSize
}

export const defaultButtonContext: ButtonContextState = {
  size: 'md',
}

export const ButtonContext: Context<ButtonContextState> = createContext(defaultButtonContext)