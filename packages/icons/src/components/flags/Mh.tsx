import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMh = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MH_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MH_svg__a)">
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="MH_svg__b"
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
      <G mask="url(#MH_svg__b)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M8 11l-.817 2.944.008-3.055-1.581 2.614.831-2.94-2.228 2.091 1.594-2.606-2.709 1.412 2.238-2.08-2.99.63 2.717-1.4-3.049-.2 2.993-.615L2.126 6.78l3.047.216-2.5-1.755 2.876 1.03-1.934-2.365 2.492 1.768-1.224-2.8 1.922 2.375-.424-3.026 1.21 2.806L8 2l.409 3.028 1.21-2.805-.424 3.025 1.922-2.375-1.224 2.8 2.492-1.768-1.934 2.365 2.876-1.03-2.5 1.755 3.047-.216-2.881 1.016 2.993.614-3.049.201 2.717 1.4-2.99-.63 2.238 2.08-2.71-1.412 1.595 2.606-2.228-2.09.831 2.94-1.58-2.615.007 3.055L8 11z"
          clipRule="evenodd"
        />
        <Path fill="#fff" d="M-.782 24.745l34.04-23.53v7.67l-34.04 15.86z" />
        <Path fill="#E2AE57" d="M-.782 24.745l34.04-29.53v7.67l-34.04 21.86z" />
      </G>
    </G>
  </Svg>
);
export default SvgMh;
