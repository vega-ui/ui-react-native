import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider/context.ts';

export const useTheme = () => {
  return useContext(ThemeContext)
}