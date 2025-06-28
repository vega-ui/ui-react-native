import { Context, createContext } from 'react';

export interface ButtonContextState {
  size?: 'small' | 'medium' | 'large'
}

export const defaultButtonContext: ButtonContextState = {
  size: 'small',
}

export const ButtonContext: Context<ButtonContextState> = createContext(defaultButtonContext)