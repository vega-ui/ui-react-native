import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGh = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GH_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#GH_svg__a)">
      <Path fill="#5EAA22" d="M0 16h32v8H0v-8z" />
      <Path fill="#FECA00" d="M0 8h32v8H0V8z" />
      <Path fill="#E11C1B" d="M0 0h32v8H0V0z" />
      <Path
        fill="#1D1D1D"
        d="M16.075 14.49l-3.485 2.418 1.114-4.14-2.944-2.646 3.85-.143 1.465-4.095 1.466 4.095h3.827l-2.92 2.788 1.278 3.897-3.65-2.174z"
      />
    </G>
  </Svg>
);
export default SvgGh;
