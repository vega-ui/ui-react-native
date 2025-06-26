import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAw = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="AW_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#AW_svg__a)">
      <Path
        fill="#5BA3DA"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="AW_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#AW_svg__b)">
        <Path
          fill="red"
          stroke="#F7FCFF"
          strokeWidth={0.35}
          d="M5.773 7.96l-4.38-.925 4.434-.878 1.283-4.59L8.122 6.12l3.96.92-3.914.92-1.129 3.743L5.773 7.96z"
        />
        <Path fill="#FAD615" d="M32 14H0v2h32v-2zm0 4H0v2h32v-2z" />
      </G>
    </G>
  </Svg>
);
export default SvgAw;
