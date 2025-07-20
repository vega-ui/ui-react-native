import { SwitchSize } from '../../../types.ts';
import { getSwitchSizes } from '../../../styles';
import { useThemedStyle } from '../../../../../shared/hooks';
import { getSwitchTrackSizeStyle } from '../styles';

export const useSwitchTrackSizeStyle = (size: SwitchSize, padding = 2) => {
  const switchSize = typeof size === 'number' ? size : getSwitchSizes()[size];
  
  return useThemedStyle(({ gray }) => ({
    track: {
      backgroundColor: gray['150'],
      ...getSwitchTrackSizeStyle(switchSize, padding),
    }
  }), [switchSize, padding])
}