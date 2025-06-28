import * as React from 'react';
import { Path, Svg } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDoubleArrowLeft = (props: SvgProps) => (
  <Svg viewBox='0 0 24 24' fill='none' stroke='currentColor' width={24} height={24} {...props}>
    <Path
      d='M9 16L5 12L9 8' 
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M5 16L1 12L5 8'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M22 12L6 12'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
);
export default SvgDoubleArrowLeft;
