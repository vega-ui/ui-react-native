import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGw = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GW_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#GW_svg__a)">
      <Path fill="#FBCD17" d="M16 0h16v12H16V0z" />
      <Path fill="#0B9E7A" d="M16 12h16v12H16V12z" />
      <Path fill="#E11C1B" d="M0 0h16v24H0V0z" />
      <Path
        fill="#1D1D1D"
        d="M8.93 14.606l-3.485 2.418 1.114-4.141L4 10.238l3.465-.143L8.93 6l1.466 4.095h3.458l-2.553 2.788 1.279 3.897-3.65-2.174z"
      />
    </G>
  </Svg>
);
export default SvgGw;
