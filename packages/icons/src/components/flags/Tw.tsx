import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTw = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TW_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TW_svg__a)">
      <Path
        fill="#EF0000"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="TW_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#TW_svg__b)">
        <Path fill="#2E42A5" d="M0 0v14h18V0H0z" />
        <Path
          fill="#FEFFFF"
          d="M8.73 10.81l-1.482 1.85-.359-2.342-2.207.86.86-2.208L3.2 8.611 5.048 7.13 3.2 5.648l2.342-.359-.86-2.207 2.207.86.359-2.342L8.73 3.448 10.21 1.6l.36 2.342 2.207-.86-.86 2.207 2.341.359L12.41 7.13l1.848 1.481-2.341.36.86 2.207-2.208-.86-.359 2.341-1.481-1.848zm0-.818a2.862 2.862 0 100-5.725 2.862 2.862 0 000 5.725zm2.29-2.862a2.29 2.29 0 11-4.58 0 2.29 2.29 0 014.58 0z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgTw;
