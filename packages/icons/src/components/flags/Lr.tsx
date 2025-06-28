import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="LR_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#LR_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path fill="#E31D1C" d="M.027 5.5h32v3h-32z" />
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0h32v3H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#E31D1C"
        d="M-.059 11h32v3h-32zm.171 5.4h32v3h-32zm-.01 5.1h32v3h-32z"
      />
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 0h16v14H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M8.132 9.213l-2.92 2.026.933-3.47L4 5.552l2.904-.12L8.132 2l1.23 3.432h2.898l-2.14 2.337 1.072 3.266-3.06-1.822z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgLr;
