import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGbSct = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GB-SCT_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GB-SCT_svg__a)">
      <Path
        fill="#0067C3"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="GB-SCT_svg__b"
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
      <G fill="#fff" mask="url(#GB-SCT_svg__b)">
        <Path d="M1.2 25.6l32-24-2.4-3.2-32 24 2.4 3.2z" />
        <Path d="M-1.2 1.6l32 24 2.4-3.2-32-24-2.4 3.2z" />
      </G>
    </G>
  </Svg>
);
export default SvgGbSct;
