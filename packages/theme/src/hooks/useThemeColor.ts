import { darkTheme, lightTheme } from '../constants';
import { ThemePath } from '../types.ts';
import { getThemeValueByPath } from '../helpers';
import { useTheme } from './useTheme.ts';

export function useThemeColor(
  colorName: ThemePath,
  theme: 'dark' | 'light',
) {
  const { theme: providedTheme } = useTheme()
  const colors = theme === 'dark' ? darkTheme : lightTheme;
  return getThemeValueByPath(providedTheme ?? colors, colorName)
}
