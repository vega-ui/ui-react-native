import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgWs = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="WS_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#WS_svg__a)">
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="WS_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#WS_svg__b)">
        <Path fill="#2E42A5" d="M0 0v14h16V0H0z" />
        <Path
          fill="#FEFFFF"
          d="M3.566 7.772l-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249-1.083-.64zm8 0l-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249-1.083-.64zm-4.1-3.634l-.998.602.227-1.175-.83-.88 1.125-.047.476-1.098.476 1.098h1.123l-.83.927.25 1.175-1.02-.602zm1.08 4.287l-.623.377.142-.735-.52-.55.704-.03.297-.685.298.686h.702l-.518.58.156.734-.638-.377zm-1.137 4.403l-1.497.904.342-1.763-1.247-1.32 1.688-.071.714-1.646.714 1.646h1.684l-1.243 1.39.374 1.764-1.53-.904z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgWs;
