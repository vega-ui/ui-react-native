import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MR_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MR_svg__a)">
      <Path
        fill="#1C7B4D"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="MR_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#MR_svg__b)">
        <Path fill="#E31D1C" d="M0 0v6h32V0H0zm0 18v6h32v-6H0z" />
        <Path
          fill="#FECA00"
          d="M16.242 14.379c5.185.028 6.646-4.314 6.646-4.314-.294 3.715-2.349 6.234-6.646 6.234s-5.875-3.263-6.646-6.518c0 0 1.46 4.569 6.646 4.598z"
        />
        <Path
          fill="#FECA00"
          d="M17.637 9.814l.337 1.963-1.764-.927-1.763.927.337-1.963-1.427-1.534h1.972l.881-1.93.882 1.93h1.972l-1.427 1.534z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgMr;
