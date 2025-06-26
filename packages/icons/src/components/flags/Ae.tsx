import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAe = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="AE_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#AE_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#5EAA22"
        fillRule="evenodd"
        d="M0 0v8h32V0H0z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        fillRule="evenodd"
        d="M0 16v8h32v-8H0z"
        clipRule="evenodd"
      />
      <Path fill="#E31D1C" d="M0 0h10v24H0z" />
    </G>
  </Svg>
);
export default SvgAe;
