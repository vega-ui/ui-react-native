import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGbEng = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GB-ENG_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#GB-ENG_svg__a)">
      <Path fill="#F7FCFF" d="M0 0v24h32V0H0z" />
      <Path fill="#F50302" d="M18 0h-4v10H0v4h14v10h4V14h14v-4H18V0z" />
    </G>
  </Svg>
);
export default SvgGbEng;
