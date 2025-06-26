import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgJm = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="JM_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#JM_svg__a)">
      <Path
        fill="#093"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        stroke="#FECA00"
        strokeWidth={2.7}
        d="M-.14-1.041l-2.21-1.824v29.73l2.21-1.824 14.537-12L15.658 12l-1.26-1.041-14.539-12z"
      />
      <Path
        fill="#272727"
        stroke="#FECA00"
        strokeWidth={2.7}
        d="M32.164-1.06l2.186-1.724v29.568l-2.186-1.724-15.219-12L15.601 12l1.344-1.06 15.22-12z"
      />
    </G>
  </Svg>
);
export default SvgJm;
