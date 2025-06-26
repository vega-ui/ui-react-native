import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIl = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="IL_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#IL_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="IL_svg__b"
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
      <G
        fill="#3D58DB"
        fillRule="evenodd"
        clipRule="evenodd"
        mask="url(#IL_svg__b)"
      >
        <Path d="M0 3v3h32V3H0zm0 15v3h32v-3H0zm11.381-3.061h9.377L16.116 6.62l-4.736 8.32zm7.772-1.01h-6.132l3.086-5.47 3.046 5.47z" />
        <Path d="M11.264 9.076h9.417l-4.545 8.085-4.872-8.085zm7.781.974h-5.994l3.058 5.481 2.936-5.481z" />
      </G>
    </G>
  </Svg>
);
export default SvgIl;
