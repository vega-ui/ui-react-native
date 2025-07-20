import { Theme, useTheme } from '@vega-ui/theme';
import { NamedStyles, useStyle } from './useStyle.ts';
import { DependencyList } from 'react';

export const useThemedStyle = <T extends NamedStyles>(
  style: (theme: Theme) => T,
  deps: DependencyList
) => {
  const { theme } = useTheme()
  
  return useStyle(style(theme), [theme, ...deps])
}