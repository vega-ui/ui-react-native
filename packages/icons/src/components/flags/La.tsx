import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="LA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#LA_svg__a)">
      <Path fill="#E31D1C" d="M0 16h32v8H0v-8z" />
      <Path fill="#2E42A5" d="M0 8h32v8H0V8z" />
      <Path fill="#E31D1C" d="M0 0h32v8H0V0z" />
      <Path
        fill="#F7FCFF"
        d="M16 15.74a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
      />
    </G>
  </Svg>
);
export default SvgLa;
