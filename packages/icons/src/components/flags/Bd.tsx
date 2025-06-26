import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBd = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BD_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#BD_svg__a)">
      <Path fill="#38A17E" d="M0 0h32v24H0z" />
      <Path
        fill="#F72E45"
        fillRule="evenodd"
        d="M13 19a7 7 0 100-14 7 7 0 000 14z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgBd;
