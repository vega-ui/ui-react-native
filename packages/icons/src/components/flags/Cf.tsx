import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCf = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="CF_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#CF_svg__a)">
      <Path fill="#3D58DB" d="M0 0h32v6H0V0z" />
      <Path fill="#F7FCFF" d="M0 6h32v6H0V6z" />
      <Path fill="#73BE4A" d="M0 12h32v6H0v-6z" />
      <Path fill="#FFD018" d="M0 18h32v6H0v-6z" />
      <Path
        fill="#FECA00"
        d="M4.53 5.416L2.104 7.098l.775-2.88-1.78-1.84 2.41-.1L4.53-.57l1.019 2.848h2.406l-1.776 1.94.89 2.71-2.54-1.512z"
      />
      <Path fill="#E11C1B" d="M12 0h8v24h-8V0z" />
    </G>
  </Svg>
);
export default SvgCf;
