import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAz = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="AZ_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#AZ_svg__a)">
      <Path
        fill="#AF0100"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="AZ_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#AZ_svg__b)">
        <Path fill="#3CA5D9" d="M0 0v8h32V0H0z" />
        <Path fill="#73BE4A" d="M0 16v8h32v-8H0z" />
        <Path
          fill="#F7FCFF"
          d="M17.14 15.024c-1.347-.31-2.53-1.47-2.516-3.024.013-1.455.87-2.632 2.35-2.967 1.482-.334 3.018.301 3.018.301-.408-.907-1.83-1.544-2.995-1.541-2.17.006-4.486 1.663-4.509 4.193-.023 2.623 2.473 4.114 4.67 4.108 1.761-.005 2.598-1.138 2.772-1.62 0 0-1.443.86-2.79.55zm.878-1.603l1.175-.818 1.176.818-.415-1.371 1.142-.865-1.432-.03-.47-1.352-.47 1.352-1.433.03 1.142.865-.415 1.37z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgAz;
