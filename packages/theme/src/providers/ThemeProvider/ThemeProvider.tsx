import { FC, PropsWithChildren, useMemo } from 'react';
import { ThemeContext, ThemeContextState } from './context.ts';
import { lightTheme } from '../../constants';

export type ThemeProviderProps = ThemeContextState

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({ theme, children }) => {
  const v = useMemo(() => ({ theme: theme ?? lightTheme }), [theme]);
  
  return (
    <ThemeContext.Provider value={v}>
      {children}
    </ThemeContext.Provider>
  )
}