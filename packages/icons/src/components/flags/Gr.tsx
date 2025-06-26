import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GR_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GR_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#4564F9"
        fillRule="evenodd"
        d="M0 5.5h32v2.957H0V5.5zm0 5.315h32v2.957H0v-2.957zm32 5.128H0V18.9h32v-2.957zM0 0h32v3H0V0z"
        clipRule="evenodd"
      />
      <Path fill="#4564F9" d="M0 21h32v3H0z" />
      <Path
        fill="#4564F9"
        fillRule="evenodd"
        d="M0 0h15v13.8H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M6 0h3v5.504h6v2.935H9V14.5H6V8.439H0V5.504h6V0z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgGr;
