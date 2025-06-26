import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBf = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BF_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#BF_svg__a)">
      <Path
        fill="#5EAA22"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="BF_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#BF_svg__b)">
        <Path fill="#C51918" d="M0 0v12h32V0H0z" />
        <Path
          fill="#FECA00"
          d="M16.035 15.77l-4.703 3.56 1.505-5.797-4.41-3.53h5.257l2.35-5.145 2.352 5.146h5.257l-4.457 3.534 1.551 5.792-4.702-3.56z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgBf;
