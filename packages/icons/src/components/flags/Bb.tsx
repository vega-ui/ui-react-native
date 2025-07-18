import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBb = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BB_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BB_svg__a)">
      <Path fill="#2E42A5" d="M22 0h10v24H22V0z" />
      <Path fill="#FECA00" d="M10 0h12v24H10V0z" />
      <Path fill="#2E42A5" d="M0 0h10v24H0V0z" />
      <Path
        fill="#000"
        d="M18.612 15.668c.188-1.29 1.52-4.093 1.52-4.093l.619-1.644-2.45.795.58.301-1.135 3.199-.856-.205V7.853l.677-.05-1.672-2.431-1.632 2.48h.787v6.17l-.965.16-.688-3.234.397-.333-2.665-.492.796 1.469s1.07 2.516 1.472 4.076l1.653-.128v2.398h1.84V15.54l1.722.128z"
      />
    </G>
  </Svg>
);
export default SvgBb;
