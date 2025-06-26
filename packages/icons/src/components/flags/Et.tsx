import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEt = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="ET_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#ET_svg__a)">
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="ET_svg__b"
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
      <G mask="url(#ET_svg__b)">
        <Path
          fill="#5EAA22"
          fillRule="evenodd"
          d="M0 0v8h32V0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#2B77B8"
          fillRule="evenodd"
          d="M16 18a6 6 0 100-12 6 6 0 000 12z"
          clipRule="evenodd"
        />
        <Path
          stroke="#FECA00"
          strokeWidth={1.5}
          d="M16 14l-2.762.927.86-2.309-1.874-2.236h2.6L16 8l1.176 2.382h2.657l-1.93 2.236.684 2.309L16 14z"
          clipRule="evenodd"
        />
        <Path
          stroke="#2B77B8"
          d="M15.696 12.034l-2.085 4.36m1.757-4.914h-4m4.754 1.358l3.909 1.804m-3.064-2.768l2.83-3.098"
        />
      </G>
    </G>
  </Svg>
);
export default SvgEt;
