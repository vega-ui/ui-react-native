import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBqSa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BQ-SA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BQ-SA_svg__a)">
      <Path fill="#fff" d="M0 0h32v24H0V0z" />
      <Path fill="#F00000" d="M0 11.664V0h16L0 11.664zm32 0V0H16l16 11.664z" />
      <Path
        fill="#00268D"
        d="M0 11.664V24h16L0 11.664zm32 0v12.672L16 24l16-12.336z"
      />
      <Path
        fill="#FEDA00"
        d="M15.714 14.256l-3.518 2.507 1.291-4.141L10 10.087h4.345L15.714 6l1.452 4.087h4.226l-3.457 2.535 1.314 4.141-3.535-2.507z"
      />
    </G>
  </Svg>
);
export default SvgBqSa;
