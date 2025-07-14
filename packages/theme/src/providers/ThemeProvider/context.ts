import { Context, createContext } from 'react';
import { Theme } from '../../types.ts';
import { lightTheme } from '../../constants';

export interface ThemeContextState {
  theme: Theme
}

export const defaultThemeContext: ThemeContextState = {
  theme: lightTheme
}

export const ThemeContext: Context<ThemeContextState> = createContext(defaultThemeContext)