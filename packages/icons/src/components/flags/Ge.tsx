import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGe = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GE_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GE_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="GE_svg__b"
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
        fill="#E31D1C"
        fillRule="evenodd"
        clipRule="evenodd"
        mask="url(#GE_svg__b)"
      >
        <Path d="M14 0h4v10h14v4H18v10h-4V14H0v-4h14V0z" />
        <Path d="M9.999 17.222L12.2 17v2s-2.201-.138-2.201-.098c0 .04.201 2.098.201 2.098h-2l.16-2H6.2v-2l2.16.222L8.2 15h2l-.201 2.222zm0-12L12.2 5v2s-2.201-.138-2.201-.098c0 .04.201 2.098.201 2.098h-2l.16-2H6.2V5l2.16.222L8.2 3h2l-.201 2.222zm14 0L26.2 5v2s-2.201-.138-2.201-.098c0 .04.201 2.098.201 2.098h-2l.16-2H20.2V5l2.16.222L22.2 3h2l-.201 2.222zm0 12L26.2 17v2s-2.201-.138-2.201-.098c0 .04.201 2.098.201 2.098h-2l.16-2H20.2v-2l2.16.222L22.2 15h2l-.201 2.222z" />
      </G>
    </G>
  </Svg>
);
export default SvgGe;
