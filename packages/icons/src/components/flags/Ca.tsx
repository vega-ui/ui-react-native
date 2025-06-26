import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="CA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#CA_svg__a)">
      <Path fill="#F7FCFF" d="M8 0h16v24H8V0z" />
      <Path
        fill="#E31D1C"
        d="M15.976 7L16 19h-.6l.368-2.97c-2.69.484-3.924.604-3.701.36.222-.244.397-.59.525-1.038L9 12.955c.378-.004.72-.098 1.028-.281.307-.183.153-.816-.461-1.9l1.813.264.687-.746 1.368 1.432h.615l-.615-3.28 1.103.615L15.976 7zm0 0l1.486 2.06 1.103-.617-.615 3.281h.615l1.368-1.432.686.746 1.814-.264c-.614 1.084-.768 1.717-.46 1.9.307.183.65.277 1.027.281l-3.593 2.397c.129.448.304.794.526 1.038.223.244-1.011.124-3.701-.36l.367 2.97H16l-.024-12zM24 0h8v24h-8V0zM0 0h8v24H0V0z"
      />
    </G>
  </Svg>
);
export default SvgCa;
