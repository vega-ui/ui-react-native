import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgHn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="HN_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#HN_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="HN_svg__b"
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
      <G
        fill="#4564F9"
        fillRule="evenodd"
        clipRule="evenodd"
        mask="url(#HN_svg__b)"
      >
        <Path d="M0 0v8h32V0H0zm0 16v8h32v-8H0zm16.402-3.33l-.866.448.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948-.867-.447zm-6.084-2.167l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948-.867-.447zm0 4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948-.867-.447zm12-4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948-.867-.447zm0 4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948-.867-.447z" />
      </G>
    </G>
  </Svg>
);
export default SvgHn;
