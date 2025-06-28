import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBs = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BS_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BS_svg__a)">
      <Path fill="#FECA00" d="M0 0h32v24H0V0z" />
      <Path fill="#3CB1CF" d="M0 0v8h32V0H0zm0 16v8h32v-8H0z" />
      <Path fill="#272727" d="M0 0l16 12L0 24V0z" />
    </G>
  </Svg>
);
export default SvgBs;
