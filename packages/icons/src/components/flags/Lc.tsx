import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLc = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="LC_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#LC_svg__a)">
      <Path fill="#7CCFF5" d="M0 0h32v24H0V0z" />
      <Path fill="#F7FCFF" d="M16 4l8 16H8l8-16z" />
      <Path fill="#272727" d="M16 8l7 12H9l7-12z" />
      <Path fill="#FECA00" d="M16 14l8 6H8l8-6z" />
    </G>
  </Svg>
);
export default SvgLc;
