import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSt = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="ST_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#ST_svg__a)">
      <Path fill="#FBCD17" d="M0 0v24h32V0H0z" />
      <Path fill="#73BE4A" d="M0 0v8h32V0H0zm0 16v8h32v-8H0z" />
      <Path fill="#C51918" d="M0 0v24l10-12L0 0z" />
      <Path
        fill="#272727"
        d="M17.002 13.87L15.132 15l.426-2.204L14 11.146l2.11-.088L17.001 9l.892 2.058H20l-1.554 1.738.468 2.204-1.912-1.13zm8 0L23.132 15l.426-2.204L22 11.146l2.11-.088L25.001 9l.892 2.058H28l-1.554 1.738.468 2.204-1.912-1.13z"
      />
    </G>
  </Svg>
);
export default SvgSt;
