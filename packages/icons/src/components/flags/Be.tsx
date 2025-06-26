import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBe = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BE_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BE_svg__a)">
      <Path fill="#FECA00" d="M10 0h11v24H10V0z" />
      <Path fill="#E31D1C" d="M21 0h11v24H21V0z" />
      <Path fill="#1D1D1D" d="M0 0h11v24H0V0z" />
    </G>
  </Svg>
);
export default SvgBe;
