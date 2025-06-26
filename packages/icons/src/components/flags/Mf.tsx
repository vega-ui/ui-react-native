import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMf = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MF_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#MF_svg__a)">
      <Path fill="#F50100" d="M22 0h10v24H22V0z" />
      <Path fill="#2E42A5" d="M0 0h12v24H0V0z" />
      <Path fill="#F7FCFF" d="M10 0h12v24H10V0z" />
    </G>
  </Svg>
);
export default SvgMf;
