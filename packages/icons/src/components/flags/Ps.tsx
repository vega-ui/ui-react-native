import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPs = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="PS_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#PS_svg__a)">
      <Path fill="#F7FCFF" d="M0 0h32v24H0V0z" />
      <Path fill="#5EAA22" d="M0 0v8h32V0H0z" />
      <Path fill="#272727" d="M0 16v8h32v-8H0z" />
      <Path fill="#E31D1C" d="M0 2l16 10L0 22V2z" />
    </G>
  </Svg>
);
export default SvgPs;
