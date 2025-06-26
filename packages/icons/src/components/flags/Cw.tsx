import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCw = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="CW_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#CW_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="CW_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#CW_svg__b)">
        <Path
          fill="#F7FCFF"
          d="M4.254 6.15L2.266 7.198l.96-1.868L2 3.963l1.523-.056L4.254 2l.558 1.907 1.783.056-1.284 1.368.815 1.868-1.872-1.05zm7.098 4.926l-2.454 1.029.963-2.577L7.726 7.8h2.558l1.068-2.787.816 2.787h2.56l-1.82 1.73.905 2.576-2.46-1.029z"
        />
        <Path fill="#F9E813" d="M0 14v4h32v-4H0z" />
      </G>
    </G>
  </Svg>
);
export default SvgCw;
