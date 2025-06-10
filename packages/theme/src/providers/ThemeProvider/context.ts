import { Context, createContext } from 'react';
import { Theme } from '../../types.ts';

export interface ThemeContextState {
  theme: Theme | undefined
}

export const defaultThemeContext: ThemeContextState = {
  theme: undefined
}

export const ThemeContext: Context<ThemeContextState> = createContext(defaultThemeContext)