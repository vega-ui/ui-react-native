import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCl = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="CL_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#CL_svg__a)">
      <Path fill="#3D58DB" d="M0 0h14v14H0V0z" />
      <Path fill="#F7FCFF" d="M14-2h18v16H14V-2z" />
      <Path fill="#E31D1C" d="M0 14h32v10H0V14z" />
      <Path
        fill="#F7FCFF"
        d="M7.014 9.783l-3.803 2.272L5.088 8.19 1.764 5.68 5.6 5.639 7.05 2.21l.932 3.428 3.632.017L8.851 8.11l1.434 3.944-3.27-2.272z"
      />
    </G>
  </Svg>
);
export default SvgCl;
