import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSo = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SO_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#SO_svg__a)">
      <Path fill="#56C6F5" d="M0 0h32v24H0V0z" />
      <Path
        fill="#F7FCFF"
        d="M16.179 14.717l-3.764 2.393 1.262-4.189-2.684-2.737 3.701-.08 1.637-4.137 1.493 4.19 3.692.065-2.775 2.788 1.296 3.985-3.858-2.278z"
      />
    </G>
  </Svg>
);
export default SvgSo;
