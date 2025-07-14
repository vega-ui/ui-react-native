import { Theme, useTheme } from '@vega-ui/theme';
import { Style, useStyle } from './useStyle.ts';
import { DependencyList } from 'react';

export const useThemedStyle = (
  style: (theme: Theme) => Style,
  deps: DependencyList
) => {
  const { theme } = useTheme()
  
  return useStyle(() => style(theme), [theme, ...deps])
}