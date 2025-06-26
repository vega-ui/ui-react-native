import * as React from 'react';
import Svg, { Mask, Path, G, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBi = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BI_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#BI_svg__a)">
      <Rect width={32} height={24} fill="#5EAA22" rx={2} />
      <Mask
        id="BI_svg__b"
        width={48}
        height={30}
        x={-8}
        y={-3}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M-8-3h48v30H-8z" />
        <Path
          fillRule="evenodd"
          d="M16 12L32 0H0l16 12zm0 0L0 24h32L16 12z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#DD2C2B"
        fillRule="evenodd"
        d="M16 12L32 0H0l16 12zm0 0L0 24h32L16 12z"
        clipRule="evenodd"
      />
      <Path
        fill="#fff"
        d="M32 0l1.5 2 6-4.5H32V0zM0 0v-2.5h-7.5l6 4.5L0 0zm0 24l-1.5-2-6 4.5H0V24zm32 0v2.5h7.5l-6-4.5-1.5 2zM30.5-2l-16 12 3 4 16-12-3-4zM0 2.5h32v-5H0v5zM17.5 10L1.5-2l-3 4 16 12 3-4zm-3 0l-16 12 3 4 16-12-3-4zM0 26.5h32v-5H0v5zM33.5 22l-16-12-3 4 16 12 3-4z"
        mask="url(#BI_svg__b)"
      />
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M16 18a6 6 0 100-12 6 6 0 000 12z"
        clipRule="evenodd"
      />
      <Path
        fill="#DD2C2B"
        fillRule="evenodd"
        stroke="#5EAA22"
        strokeWidth={0.25}
        d="M15.43 10.387l-1.162.013.592-1-.592-1 1.162.013L16 7.4l.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013L16 11.4l-.57-1.013zm-2.5 4.1l-1.162.013.592-1-.592-1 1.162.013.57-1.013.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013-.57 1.013-.57-1.013zm5 0l-1.162.013.592-1-.592-1 1.162.013.57-1.013.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013-.57 1.013-.57-1.013z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgBi;
