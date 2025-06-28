import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgVn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="VN_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#VN_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="VN_svg__b"
        width={32}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24h32V0H0z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#VN_svg__b)">
        <Path
          fill="#FFD221"
          fillRule="evenodd"
          d="M16.062 15.98l-5.15 3.275 1.727-5.733-3.674-3.746 5.065-.11 2.241-5.66 2.042 5.734 5.053.089-3.797 3.814 1.773 5.454-5.28-3.117z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgVn;
