import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgVc = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="VC_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#VC_svg__a)">
      <Path fill="#FFDC17" d="M8 0h16v24H8V0z" />
      <Path fill="#5FBF2B" d="M24 0h8v24h-8V0z" />
      <Path fill="#2E42A5" d="M0 0h8v24H0V0z" />
      <Path
        fill="#5FBF2B"
        d="M19.726 5.6l-3.04 4.463 3.04 4.305 3.04-4.305-3.04-4.463zm-7.449.079L9 10.063l3.04 4.226 3.04-4.226-2.803-4.384zm.566 9.31l3.277-4.384 2.803 4.384L16.12 19.5l-3.277-4.512z"
      />
    </G>
  </Svg>
);
export default SvgVc;
