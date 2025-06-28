import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTt = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TT_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TT_svg__a)">
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="TT_svg__b"
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
      <G mask="url(#TT_svg__b)">
        <Path
          fill="#272727"
          stroke="#F7FCFF"
          strokeWidth={1.5}
          d="M29.56 29.496l-.543.444-.48-.512L-1.807-2.971l-.548-.585.62-.508 3.097-2.532.543-.444.48.512L32.727 25.87l.549.586-.621.508-3.096 2.532z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgTt;
