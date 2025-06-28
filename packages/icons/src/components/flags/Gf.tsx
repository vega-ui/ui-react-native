import * as React from 'react';
import Svg, { Mask, Path, G, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGf = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GF_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GF_svg__a)">
      <Rect width={32} height={24} fill="#5EAA22" rx={2} />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M0 0l32 24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#E21835"
        fillRule="evenodd"
        d="M15.93 14.406l-3.485 2.418 1.114-4.141L11 10.038l3.465-.143L15.93 5.8l1.466 4.095h3.458l-2.553 2.788 1.279 3.897-3.65-2.174z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgGf;
