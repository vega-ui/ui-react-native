import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgEh = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="EH_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#EH_svg__a)">
      <Path fill="#F7FCFF" d="M0 0h32v24H0V0z" />
      <Path fill="#272727" d="M0 0v8h32V0H0z" />
      <Path fill="#5EAA22" d="M0 16v8h32v-8H0z" />
      <Path
        fill="#E31D1C"
        d="M0 0l16 12L0 24V0zm21.688 15.477s-2.275-1.375-2.275-3.646c0-2.272 2.275-3.467 2.275-3.467-1.018-.646-4.549.276-4.549 3.54 0 3.265 3.498 3.869 4.549 3.573zm1.84-4.165l-1.323-1.24.457 1.584-1.281.607 1.573.512.683 1.714.3-1.587 1.553.343-1.175-1.148.397-1.225-1.184.44z"
      />
    </G>
  </Svg>
);
export default SvgEh;
