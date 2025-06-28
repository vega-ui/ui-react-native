import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSc = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SC_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#SC_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="SC_svg__b"
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
      <G mask="url(#SC_svg__b)">
        <Path
          fill="#FFD018"
          fillRule="evenodd"
          d="M0 23.997L16.151-2h16.151L0 23.997z"
          clipRule="evenodd"
        />
        <Path fill="#E31D1C" d="M0 23.997l34.463-12.999V-5.103L0 23.997z" />
        <Path fill="#F7FCFF" d="M0 23.997l34.463-4.999v-8.101L0 23.997z" />
        <Path
          fill="#5EAA22"
          fillRule="evenodd"
          d="M0 23.997h34.463v-7.1L0 23.997z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgSc;
