import { getSwitchTrackStyles } from '../styles';
import { useMemo } from 'react';
import { useTheme } from '@vega-ui/theme';
import { SwitchVariant } from '../../../types.ts';

export interface UseSwitchTrackStylesOptions {
  variant: SwitchVariant
}

export const useSwitchTrackStyles = ({ variant }: UseSwitchTrackStylesOptions) => {
  const { theme } = useTheme()
  
  return useMemo(() => getSwitchTrackStyles(theme)[variant], [variant, theme])
}