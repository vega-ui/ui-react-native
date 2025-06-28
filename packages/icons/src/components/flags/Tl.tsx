import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTl = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TL_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TL_svg__a)">
      <Path
        fill="#E31D1C"
        stroke="#F7FCFF"
        strokeWidth={2}
        d="M0-1h-1v26h34V-1H0z"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M0 0l24 12L0 24V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        fillRule="evenodd"
        d="M0 0l16 12L0 24V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M6.648 14.409l-2.02 2.1-.21-2.986-2.576-1.586 2.686-.843.44-2.958 1.859 2.342 2.712-.727-1.402 2.776L9.5 15.203l-2.852-.794z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgTl;
