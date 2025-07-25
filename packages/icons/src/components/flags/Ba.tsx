import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BA_svg__a"
      width={34}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h34v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#BA_svg__a)">
      <Path fill="#2E42A5" d="M0 0h32v24H0V0z" />
      <Path fill="#FECA00" d="M9 0h20v24L9 0z" />
      <Path
        fill="#F7FCFF"
        d="M6.108 2.794l-1.176.618.225-1.31-.951-.926L5.52.985l.588-1.191.588 1.19 1.314.192-.95.927.224 1.309-1.176-.618zm3.487 4.28l-1.176.618.225-1.31-.951-.926 1.314-.191.588-1.191.587 1.19 1.315.192-.951.927.224 1.309-1.175-.618zm3.268 4.164l-1.175.618.224-1.309-.95-.927 1.314-.19.587-1.192.588 1.191 1.314.191-.95.927.224 1.31-1.176-.619zm3.202 3.992l-1.175.617.224-1.309-.95-.927 1.313-.19.588-1.192.588 1.191 1.314.191-.95.927.224 1.31-1.176-.619zm3.449 4.107l-1.175.618.224-1.31-.95-.926 1.314-.191.587-1.191.588 1.19 1.314.192-.95.927.224 1.309-1.176-.618zm3.813 3.974l-1.176.618.225-1.309-.951-.927 1.314-.191.588-1.191.588 1.191 1.314.191-.951.927.225 1.31-1.176-.619z"
      />
    </G>
  </Svg>
);
export default SvgBa;
