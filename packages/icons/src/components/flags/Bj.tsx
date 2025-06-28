import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBj = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BJ_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#BJ_svg__a)">
      <Path
        fill="#DD2C2B"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M0 0v14h32V0H0z"
        clipRule="evenodd"
      />
      <Path fill="#5EAA22" d="M0 0h14v24H0z" />
    </G>
  </Svg>
);
export default SvgBj;
