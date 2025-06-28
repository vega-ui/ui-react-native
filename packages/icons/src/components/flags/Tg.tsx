import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTg = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TG_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TG_svg__a)">
      <Path
        fill="#5EAA22"
        stroke="#F7FCFF"
        strokeWidth={2}
        d="M0-1h-1v26h34V-1H0z"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M0 6v4h32V6H0zm0 8v4h32v-4H0z"
        clipRule="evenodd"
      />
      <Path fill="#F50101" d="M0 0h16v14H0z" />
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M8.25 10.144l-3.72 2.302 1.445-3.864L3 5.98h3.648L8.25 2.13l1.223 3.85h3.604l-2.532 2.603 1.246 3.674-3.541-2.112z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgTg;
