import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBw = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BW_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#BW_svg__a)">
      <Path
        fill="#42ADDF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="BW_svg__b"
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
      <G mask="url(#BW_svg__b)">
        <Path
          fill="#58A5FF"
          fillRule="evenodd"
          d="M0 0v8h32V0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#272727"
          stroke="#F7FCFF"
          strokeWidth={2}
          d="M0 9h-1v6h34V9H0z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgBw;
