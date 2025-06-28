import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="IN_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#IN_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="IN_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#IN_svg__b)">
        <Path fill="#FF8C1A" d="M0 0v8h32V0H0z" />
        <Path fill="#5EAA22" d="M0 16v8h32v-8H0z" />
        <Path
          fill="#3D58DB"
          d="M12 12a4 4 0 108 0 4 4 0 00-8 0zm7 0a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <Path
          fill="#3D58DB"
          d="M15.995 12.86l-.571 3.121.331-3.155-1.427 2.834 1.207-2.934-2.167 2.316 1.984-2.474-2.732 1.612 2.602-1.816-3.076.777 3.007-1.009-3.17-.121 3.17-.12-3.007-1.01 3.076.777-2.602-1.815 2.732 1.612-1.984-2.475 2.167 2.316-1.207-2.934 1.427 2.834-.331-3.155.57 3.12.571-3.12-.331 3.155 1.427-2.834-1.207 2.934L18.62 8.98l-1.984 2.475 2.732-1.612-2.602 1.815 3.076-.777-3.008 1.01 3.17.12-3.17.121 3.008 1.01-3.076-.778 2.602 1.816-2.732-1.612 1.984 2.474-2.167-2.316 1.207 2.934-1.427-2.834.331 3.155-.57-3.12z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgIn;
