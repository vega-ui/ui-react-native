import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKm = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="KM_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#KM_svg__a)">
      <Path
        fill="#5196ED"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="KM_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#KM_svg__b)">
        <Path fill="#AF0100" d="M0 12v6h32v-6H0z" />
        <Path fill="#F7FCFF" d="M0 6v6h32V6H0z" />
        <Path fill="#FECA00" d="M0 0v6h32V0H0z" />
        <Path fill="#5EAA22" d="M0 0l19 12L0 24V0z" />
        <Path
          fill="#F7FCFF"
          d="M7.305 16.501S3.72 15.278 3.848 11.45c.127-3.83 3.775-4.58 3.775-4.58-1.277-.923-5.85.159-5.996 4.58-.146 4.42 4.315 5.402 5.678 5.051zm.107-6.692l.112-.654-.475-.464.657-.096L8 8l.294.595.657.096-.475.464.112.654L8 9.5l-.588.309zm.112 1.346l-.112.654L8 11.5l.588.309-.112-.654.475-.464-.657-.096L8 10l-.294.595-.657.096.475.463zm-.112 2.654l.112-.654-.475-.464.657-.096L8 12l.294.595.657.096-.475.463.112.655L8 13.5l-.588.309zm0 2l.112-.654-.475-.464.657-.096L8 14l.294.595.657.096-.475.463.112.655L8 15.5l-.588.309z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgKm;
