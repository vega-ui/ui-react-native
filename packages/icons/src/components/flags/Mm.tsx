import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMm = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MM_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#MM_svg__a)">
      <Path fill="#E31D1C" d="M0 16h32v8H0v-8z" />
      <Path fill="#5EAA22" d="M0 8h32v8H0V8z" />
      <Path fill="#FFD018" d="M0 0h32v8H0V0z" />
      <Path
        fill="#F7FCFF"
        d="M16.062 15.976l-5.15 3.274 1.727-5.733-3.674-3.745 5.065-.11 2.241-5.66 2.042 5.734 5.053.088-3.797 3.814 1.773 5.454-5.28-3.116z"
      />
    </G>
  </Svg>
);
export default SvgMm;
