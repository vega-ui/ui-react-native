import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgZa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="ZA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#ZA_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0v8h32V0H0z"
        clipRule="evenodd"
      />
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 16v8h32v-8H0z"
        clipRule="evenodd"
      />
      <Mask
        id="ZA_svg__b"
        width={36}
        height={38}
        x={-2}
        y={-7}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M-2-7h36v38H-2z" />
        <Path
          fillRule="evenodd"
          d="M15.429 10L0-2v28l15.429-12H32v-4H15.429z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#5EAA22"
        fillRule="evenodd"
        d="M15.429 10L0-2v28l15.429-12H32v-4H15.429z"
        clipRule="evenodd"
      />
      <Path
        fill="#F7FCFF"
        d="M0-2l1.228-1.579L-2-6.089V-2h2zm15.429 12L14.2 11.579l.541.421h.687v-2zM0 26h-2v4.09l3.228-2.511L0 26zm15.429-12v-2h-.687l-.541.421L15.429 14zM32 14v2h2v-2h-2zm0-4h2V8h-2v2zM-1.228-.421l15.429 12 2.456-3.158-15.43-12L-1.227-.42zM2 26V-2h-4v28h4zm12.2-13.579l-15.428 12 2.456 3.158 15.429-12L14.2 12.42zM32 12H15.429v4H32v-4zm-2-2v4h4v-4h-4zm-14.571 2H32V8H15.429v4z"
        mask="url(#ZA_svg__b)"
      />
      <Path
        fill="#272727"
        stroke="#FECA00"
        strokeWidth={2}
        d="M.6 5.2L-1 4v16l1.6-1.2 8-6 1.067-.8-1.067-.8-8-6z"
      />
    </G>
  </Svg>
);
export default SvgZa;
