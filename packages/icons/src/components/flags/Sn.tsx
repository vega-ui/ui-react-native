import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SN_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#SN_svg__a)">
      <Path fill="#FBCD17" d="M10 0h12v24H10V0z" />
      <Path
        fill="#006923"
        d="M16.075 14.49l-3.485 2.418 1.114-4.14-2.56-2.79h3.466l1.465-4.094 1.466 4.095h3.46l-2.554 2.788 1.279 3.897-3.65-2.174z"
      />
      <Path fill="#E11C1B" d="M22 0h10v24H22V0z" />
      <Path fill="#006923" d="M0 0h10v24H0V0z" />
    </G>
  </Svg>
);
export default SvgSn;
