import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMk = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MK_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MK_svg__a)">
      <Path
        fill="#F50100"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="MK_svg__b"
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
      <G fill="#FFD018" mask="url(#MK_svg__b)">
        <Path
          fillRule="evenodd"
          d="M0-.042v4.084l14 5.951L3.255-.042H0zM16 12l3-12h-6l3 12zm0 0l-3 12h6l-3-12zM0 19.951v4.084h3.255L14 14 0 19.951zM32 4.066V-.018h-3.255L18 10.018l14-5.952zm0 19.994v-4.084l-14-5.952L28.745 24.06H32zM32 9l-12 3 12 3V9zm-20 3L0 9v6l12-3z"
          clipRule="evenodd"
        />
        <Path
          stroke="#F50100"
          strokeWidth={2}
          d="M16 17a5 5 0 100-10 5 5 0 000 10z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgMk;
