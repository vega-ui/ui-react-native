import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGy = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GY_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GY_svg__a)">
      <Path
        fill="#5EAA22"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#FECA00"
        stroke="#F7FCFF"
        strokeWidth={2}
        d="M1 22.587V1.413L30.995 12 1 22.587z"
      />
      <Path
        fill="#E11C1B"
        stroke="#272727"
        strokeWidth={2}
        d="M-1 23.955V.045L14.371 12-1 23.955z"
      />
    </G>
  </Svg>
);
export default SvgGy;
