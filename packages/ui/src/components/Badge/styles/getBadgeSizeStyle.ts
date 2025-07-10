import { StyleProp, ViewStyle } from 'react-native';
import { getBadgePaddingInline } from './getBadgePaddingInline.ts';
import { getBadgeBorderRadius } from './getBadgeBorderRadius.ts';

export const getBadgeSizeStyle = (size: number): StyleProp<ViewStyle> => ({
  height: size,
  paddingInline: getBadgePaddingInline(size),
  borderRadius: getBadgeBorderRadius(size),
  minWidth: size,
})