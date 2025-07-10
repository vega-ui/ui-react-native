import { useTheme } from '@vega-ui/theme';
import { capitalize } from '@vega-ui/utils';
import { getAlertLabelColor } from '../styles';
import { AlertAppearance, AlertVariant } from '../types.ts';

export const useAlertLabelColor = (variant: AlertVariant, appearance: AlertAppearance) => {
  const { theme } = useTheme()
  const type = `${variant}${capitalize(appearance)}` as const
 
  return getAlertLabelColor(theme)[type]
}