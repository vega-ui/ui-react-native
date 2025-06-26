import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMg = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MG_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#MG_svg__a)">
      <Path fill="#78D843" d="M12 12h20v12H12V12z" />
      <Path fill="#EA1A1A" d="M12 0h20v12H12V0z" />
      <Path fill="#F7FCFF" d="M0 0h12v24H0V0z" />
    </G>
  </Svg>
);
export default SvgMg;
