import { lightTheme, useTheme } from '@vega-ui/theme';
import { getButtonStyles } from '../styles';
import { useMemo } from 'react';
import { BaseButtonAppearance, BaseButtonVariant } from '../types.ts';
import { capitalize } from '@vega-ui/utils';

export interface UseBaseButtonStylesOptions {
  variant: BaseButtonVariant
  appearance: BaseButtonAppearance
}

export const useBaseButtonStyles = ({ variant, appearance }: UseBaseButtonStylesOptions) => {
  const { theme = lightTheme } = useTheme()
  const key = `${variant}${capitalize(appearance)}` as const;
  
  return useMemo(() => getButtonStyles(theme)[key], [theme, key])
}