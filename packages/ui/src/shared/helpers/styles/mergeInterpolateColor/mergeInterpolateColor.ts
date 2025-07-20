import { DerivedValue, interpolateColor, SharedValue } from 'react-native-reanimated';
import { type Style } from './types.ts';
import { COLORS } from './constants.ts';

export const mergeInterpolateColor = (styles: (Style | undefined)[], value: DerivedValue<number> | SharedValue<number>) => {
  'worklet';
  
  const result: Style = {};
  
  color: for (const color of COLORS) {
    const colorStops: string[] = []
    
    for (let i = 0; i < styles.length; i++) {
      const style = styles[i];
      
      if (!style || typeof style[color] !== 'string') {
        continue color
      }
      
      colorStops.push(style[color])
    }
    
    result[color] = interpolateColor(
      value.value,
      styles.map((_, i) => i),
      colorStops
    ) as never;
  }
  
  return result
}