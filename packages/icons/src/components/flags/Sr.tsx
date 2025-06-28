import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SR_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#SR_svg__a)">
      <Path
        fill="#4E8B1D"
        fillRule="evenodd"
        d="M0 16h32v8H0v-8zM0 0h32v6H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#AF0100"
        stroke="#fff"
        strokeWidth={3}
        d="M0 6.5h-1.5v11h35v-11H0z"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M16.002 14.494L13.508 16l.57-2.938-2.078-2.2 2.813-.118L16.003 8l1.19 2.744H20l-2.072 2.318.624 2.938-2.55-1.506z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgSr;
