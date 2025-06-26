import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="CN_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#CN_svg__a)">
      <Path fill="#E31D1C" d="M0 0h32v24H0V0z" />
      <Path
        fill="#FECA00"
        d="M15.016 4.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61zM7.018 9.607l-2.881 1.551.657-3.026-2.4-2.265 3.25-.123 1.374-2.826 1.374 2.826h3.243L9.24 8.132l.72 3.026-2.943-1.55zm9.998-1.059l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61zm-1 4l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61zm-3 3l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19-1.032-.61z"
      />
    </G>
  </Svg>
);
export default SvgCn;
