import { AlertAppearance, AlertVariant } from '../types.ts';
import { capitalize } from '@vega-ui/utils';
import { useMemo } from 'react';
import { getAlertStyles } from '../styles';
import { useTheme } from '@vega-ui/theme';

export const useAlertStyles = (variant: AlertVariant, appearance: AlertAppearance) => {
  const { theme } = useTheme()
  const type = `${variant}${capitalize(appearance)}` as const
  
  return useMemo(() => getAlertStyles(theme)[type], [type, theme])
}