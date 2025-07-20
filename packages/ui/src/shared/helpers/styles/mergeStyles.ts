import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type Style = TextStyle | ViewStyle | ImageStyle | undefined

export const mergeStyles = (...styles: (Style | boolean)[]) => {
  'worklet';
  
  const result = {};
  
  for (const style of styles) {
    if (!style) continue;
    
    for (const key of Object.keys(style)) {
      result[key as keyof Style] = style[key as keyof Style];
    }
  }
  
  return result;
}