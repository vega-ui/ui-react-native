import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMv = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MV_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MV_svg__a)">
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M0 0h32v22a2 2 0 01-2 2H2a2 2 0 01-2-2V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#579D20"
        fillRule="evenodd"
        d="M6 6h20v12H6V6z"
        clipRule="evenodd"
      />
      <Path
        stroke="#B6EB9A"
        strokeOpacity={0.238}
        strokeWidth={2}
        d="M7 7h18v10H7V7z"
      />
      <Mask
        id="MV_svg__b"
        width={20}
        height={12}
        x={6}
        y={6}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M6 6h20v12H6V6z"
          clipRule="evenodd"
        />
        <Path stroke="#fff" strokeWidth={2} d="M7 7h18v10H7V7z" />
      </Mask>
      <G mask="url(#MV_svg__b)">
        <Path
          fill="#F9FAFA"
          fillRule="evenodd"
          d="M16.033 12.463c-.017 3.065 2.396 4.7 2.396 4.7-2.753.323-4.586-2.174-4.586-4.67 0-2.498 2.498-4.56 4.586-5.492 0 0-2.379 2.396-2.396 5.462z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgMv;
