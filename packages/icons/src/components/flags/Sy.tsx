import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSy = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SY_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#SY_svg__a)">
      <Path fill="#F7FCFF" d="M0 0h32v24H0V0z" />
      <Path
        fill="#409100"
        d="M9.001 13.247L7.754 14l.285-1.47L7 11.432l1.406-.06L9.001 10l.595 1.372H11L9.964 12.53l.312 1.47L9 13.247zm14 0L21.754 14l.284-1.47L21 11.432l1.406-.06.595-1.371.595 1.372H25l-1.036 1.159.312 1.469L23 13.247z"
      />
      <Path fill="#E31D1C" d="M0 0v8h32V0H0z" />
      <Path fill="#272727" d="M0 16v8h32v-8H0z" />
    </G>
  </Svg>
);
export default SvgSy;
