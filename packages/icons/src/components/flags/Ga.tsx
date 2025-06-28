import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#GA_svg__a)">
      <Path fill="#40A8FF" d="M0 16h32v8H0v-8z" />
      <Path fill="#FECA00" d="M0 8h32v8H0V8z" />
      <Path fill="#73BE4A" d="M0 0h32v8H0V0z" />
    </G>
  </Svg>
);
export default SvgGa;
