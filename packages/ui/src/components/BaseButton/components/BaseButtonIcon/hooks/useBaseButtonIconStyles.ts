import { lightTheme, useTheme } from '@vega-ui/theme';
import { capitalize } from '@vega-ui/utils';
import { useMemo } from 'react';
import { getButtonLabelStyles } from '../../../styles';
import { BaseButtonAppearance, BaseButtonVariant } from '../../../types.ts';

export interface UseBaseButtonLabelStylesOptions {
  variant: BaseButtonVariant
  appearance: BaseButtonAppearance
}

export const useBaseButtonIconStyles = ({ variant, appearance }: UseBaseButtonLabelStylesOptions) => {
  const { theme = lightTheme } = useTheme()
  const key = `${variant}${capitalize(appearance)}` as const;
  
  return useMemo(() => getButtonLabelStyles(theme)[key], [theme, key])
}