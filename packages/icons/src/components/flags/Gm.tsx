import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGm = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GM_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GM_svg__a)">
      <Path
        fill="#5EAA22"
        fillRule="evenodd"
        d="M0 16h32v8H0v-8z"
        clipRule="evenodd"
      />
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0h32v8H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#3D58DB"
        stroke="#fff"
        strokeWidth={3}
        d="M0 8.5h-1.5v7h35v-7H0z"
      />
    </G>
  </Svg>
);
export default SvgGm;
