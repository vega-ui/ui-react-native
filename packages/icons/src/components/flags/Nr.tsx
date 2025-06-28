import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Path
      fill="#2E42A5"
      fillRule="evenodd"
      d="M0 0v24h32V0H0z"
      clipRule="evenodd"
    />
    <Mask
      id="NR_svg__a"
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
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#NR_svg__a)">
      <Path fill="#FECA00" d="M0 8v4h32V8H0z" />
      <Path
        fill="#F7FCFF"
        d="M8.83 19.58l-1.545 2.005-.072-2.53-2.428.714 1.43-2.09-2.385-.85 2.384-.85-1.43-2.088 2.43.714.07-2.53L8.83 14.08l1.545-2.006.071 2.53 2.429-.713-1.43 2.089 2.385.85-2.385.85 1.43 2.089-2.429-.715-.071 2.53L8.83 19.58z"
      />
    </G>
  </Svg>
);
export default SvgNr;
