import { lightTheme, useTheme } from '@vega-ui/theme';
import { capitalize } from '@vega-ui/utils';
import { useMemo } from 'react';
import { BaseButtonAppearance, BaseButtonVariant } from '../../../types.ts';
import { getButtonLabelStyles } from '../../../styles';

export interface UseBaseButtonLabelStylesOptions {
  variant: BaseButtonVariant
  appearance: BaseButtonAppearance
}

export const useBaseButtonLabelStyles = ({ variant, appearance }: UseBaseButtonLabelStylesOptions) => {
  const { theme = lightTheme } = useTheme()
  const key = `${variant}${capitalize(appearance)}` as const;
  
  return useMemo(() => getButtonLabelStyles(theme)[key], [theme, key])
}