import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTz = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TZ_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TZ_svg__a)">
      <Path
        fill="#3195F9"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="TZ_svg__b"
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
      <G mask="url(#TZ_svg__b)">
        <Path
          fill="#73BE4A"
          fillRule="evenodd"
          d="M0 0v24L32 0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#272727"
          stroke="#FFD018"
          strokeWidth={2.5}
          d="M-1.822 25.44l.694 1.039 1.04-.694L36.172 1.58l1.04-.693-.693-1.04-2.221-3.327-.694-1.04-1.04.694-36.26 24.204-1.04.694.694 1.04 2.22 3.326z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgTz;
