import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLv = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="LV_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#LV_svg__a)">
      <Path fill="#C51918" d="M0 14h32v10H0V14z" />
      <Path fill="#F7FCFF" d="M0 8h32v6H0V8z" />
      <Path fill="#C51918" d="M0 0h32v10H0V0z" />
    </G>
  </Svg>
);
export default SvgLv;
