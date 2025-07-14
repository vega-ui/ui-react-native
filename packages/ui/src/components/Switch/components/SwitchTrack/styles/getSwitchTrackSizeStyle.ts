import { StyleProp, ViewStyle } from 'react-native';
import { getSwitchTrackWidth } from './getSwitchTrackWidth.ts';

export const getSwitchTrackSizeStyle = (size: number, padding = 2) => ({
  height: size,
  borderRadius: size,
  width: getSwitchTrackWidth(size, padding),
  padding,
} satisfies StyleProp<ViewStyle>)