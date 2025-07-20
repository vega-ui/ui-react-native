import { useThemedStyle } from '../../../../../shared/hooks';
import { getSwitchThumbColor } from '../styles';

export const useSwitchThumbStyle = (disabled?: boolean) => {
  return useThemedStyle((theme) => {
    const { disabled: disabledColor, enabled: enabledColor } = getSwitchThumbColor(theme)
    
    return {
      thumb: {
        backgroundColor: disabled ? disabledColor : enabledColor,
      }
    }
  }, [disabled])
}