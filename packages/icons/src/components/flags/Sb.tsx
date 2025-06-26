import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSb = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SB_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#SB_svg__a)">
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="SB_svg__b"
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
      <G mask="url(#SB_svg__b)">
        <Path
          fill="#579D20"
          fillRule="evenodd"
          d="M0 24h32V0L0 24z"
          clipRule="evenodd"
        />
        <Path
          fill="#FECA00"
          d="M-.782 24.745l-1.804-2.496L33.675-1.954 35.48.542-.781 24.745z"
        />
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M3.653 6.547L5.017 5.6l1.428.85-.5-1.524.998-1.091H5.59l-.573-1.602-.574 1.602-1.355.056 1.001 1.035-.436 1.62zm5.658 0l1.364-.946 1.428.85-.5-1.524.999-1.091h-1.354l-.573-1.602-.573 1.602-1.356.056 1.001 1.035-.436 1.62z"
          clipRule="evenodd"
        />
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M6.648 9.455l1.364-.946 1.428.85-.5-1.524.998-1.091H8.585l-.573-1.602-.574 1.602-1.355.056 1 1.035-.435 1.62zM5.017 11.6l-1.364.946.436-1.62-1.001-1.035 1.355-.056.574-1.602.573 1.602h1.353l-.998 1.09.5 1.525-1.428-.85zm5.658 0l-1.364.946.436-1.62-1-1.035 1.355-.056.573-1.602.573 1.602h1.354l-1 1.09.501 1.525-1.428-.85z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgSb;
