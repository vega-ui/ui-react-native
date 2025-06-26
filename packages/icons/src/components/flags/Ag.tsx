import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAg = (props: SvgProps) => (
  <Svg fill='none' viewBox='0 0 32 24' width={24} height={24} {...props}>
    <Mask 
      id='AG_svg__a'
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
    >
      <Path fill='#fff' d='M0 0h32v24H0z' />
    </Mask>
    <G mask='url(#AG_svg__a)'>
      <Path
        fill='#1B1B1B'
        fillRule='evenodd'
        d='M0 0h32v24H0V0z'
        clipRule='evenodd'
      />
      <Path
        fill='#F9D313'
        fillRule='evenodd'
        d='M16 14l-2.003 3.8.05-4.196-3.658 2.65 2.093-3.76-4.59.977 3.72-2.58L7 10l4.613-.89L7.89 6.529l4.59.977-2.092-3.76 3.659 2.65-.05-4.195L16 6l2.003-3.8-.05 4.196 3.658-2.65-2.093 3.76 4.59-.977-3.72 2.58L25 10l-4.613.89 3.722 2.581-4.59-.977 2.092 3.76-3.659-2.65.05 4.195L16 14z'
        clipRule='evenodd'
      />
      <Path fill='#F1F9FF' d='M6 14h20v10H6z' />
      <Path fill='#4A80E8' d='M2 10h28v4H2z' />
      <Path
        fill='#E31D1C'
        fillRule='evenodd'
        d='M0 6l16 18L32 6v18H0V6z'
        clipRule='evenodd'
      />
    </G>
  </Svg>
);
export default SvgAg;
