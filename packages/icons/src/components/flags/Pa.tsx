import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="PA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#PA_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="PA_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#PA_svg__b)">
        <Path
          fill="#E31D1C"
          d="M16 0v12h16V0H16zm7.02 19.15l-2.302 1.424.894-2.391-1.957-1.811h2.374l.992-2.587.757 2.587h2.377l-1.713 1.81.839 2.392-2.26-1.424z"
        />
        <Path
          fill="#2E42A5"
          d="M9.02 8.365L6.719 9.79l.894-2.392-1.957-1.81H8.03L9.021 3l.757 2.587h2.377l-1.713 1.81.839 2.393-2.26-1.425zM0 12v12h16V12H0z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgPa;
