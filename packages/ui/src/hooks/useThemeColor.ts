import { type ThemePath, useThemeColor as useNativeThemeColor } from '@vega-ui/theme';
import { useColorScheme } from './useColorScheme.ts';

export function useThemeColor(
  colorName: ThemePath,
  theme?: 'dark' | 'light',
) {
  const colorScheme = useColorScheme() ?? 'light';
  return useNativeThemeColor(colorName, theme ?? colorScheme)
}
