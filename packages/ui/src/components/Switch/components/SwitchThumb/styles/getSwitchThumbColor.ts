import { Theme } from '@vega-ui/theme';

export const getSwitchThumbColor = (theme: Theme) => {
  return {
    enabled: theme.white,
    disabled: theme.disable.text,
  }
}