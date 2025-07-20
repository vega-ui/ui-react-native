import { useMemo } from 'react';
import { getTextFieldVariantStyle } from '../styles';
import { useTheme } from '@vega-ui/theme';

export const useTextFieldStyles = () => {
  const { theme } = useTheme()
  
  return useMemo(() => getTextFieldVariantStyle(theme), [theme])
}