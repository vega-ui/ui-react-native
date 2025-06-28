import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCd = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="CD_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#CD_svg__a)">
      <Path
        fill="#3195F9"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="CD_svg__b"
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
      <G mask="url(#CD_svg__b)">
        <Path
          fill="#E31D1C"
          stroke="#FECA00"
          strokeWidth={2.5}
          d="M-1.822 25.44l.694 1.039 1.04-.694L36.172 1.58l1.04-.693-.693-1.04-2.221-3.327-.694-1.04-1.04.694-36.26 24.204-1.04.694.694 1.04 2.22 3.326z"
        />
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M4.93 8.606l-3.485 2.418 1.114-4.141L0 4.238l3.465-.143L4.93 0l1.466 4.095h3.458L7.302 6.883l1.279 3.897-3.65-2.174z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgCd;
