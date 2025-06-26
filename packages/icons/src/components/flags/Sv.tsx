import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSv = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SV_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#SV_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="SV_svg__b"
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
      <G mask="url(#SV_svg__b)">
        <Path
          fill="#3D58DB"
          fillRule="evenodd"
          d="M0 0v8h32V0H0zm0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Path
          stroke="#E8AA00"
          d="M19.425 11.858a3.642 3.642 0 11-7.283 0 3.642 3.642 0 017.283 0z"
        />
        <Path
          fill="#1E601B"
          fillRule="evenodd"
          d="M13.81 9.662s-.952 1.568-.952 2.644 1.14 2.429 2.934 2.429c1.75 0 3.008-1.045 3.046-2.429.038-1.384-.942-2.369-.942-2.369s.555 1.993.278 2.8c-.278.807-1.175 1.784-2.382 1.66-1.207-.125-2.353-1.61-2.353-2.09 0-.48.372-2.645.372-2.645z"
          clipRule="evenodd"
        />
        <Path stroke="#188396" d="M14.16 12.328h3.208" />
        <Path
          stroke="#E8AA00"
          d="M14.459 11.806h2.76m-.169.605h-2.457l1.24-2.056 1.217 2.056z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgSv;
