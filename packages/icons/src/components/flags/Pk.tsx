import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPk = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="PK_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#PK_svg__a)">
      <Path fill="#2F8D00" d="M8 0h24v24H8V0z" />
      <Path fill="#F7FCFF" d="M0 0h8v24H0V0z" />
      <Path
        fill="#F1F9FF"
        d="M22.43 15.306s-4.466 1.165-8.011-1.21c-3.545-2.375-1.763-7.848-1.763-7.848-1.849.269-4.752 7.015-.072 10.398 4.68 3.384 9.164.131 9.845-1.34zm-4.956-6.44l-2.372 1.16 2.502.446.338 2.445 1.417-2.083 2.788.189-2.184-1.63 1.163-2.176-2.174.996-1.616-1.519.138 2.172z"
      />
    </G>
  </Svg>
);
export default SvgPk;
