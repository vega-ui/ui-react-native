import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTh = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TH_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TH_svg__a)">
      <Path
        fill="#F50101"
        fillRule="evenodd"
        d="M0 16h32v8H0v-8zM0 0h32v6H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#3D58DB"
        stroke="#fff"
        strokeWidth={3}
        d="M0 6.5h-1.5v11h35v-11H0z"
      />
    </G>
  </Svg>
);
export default SvgTh;
