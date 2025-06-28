import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDz = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Path
      fill="#F7FCFF"
      fillRule="evenodd"
      d="M16 0h16v24H16V0z"
      clipRule="evenodd"
    />
    <Path
      fill="#36A400"
      fillRule="evenodd"
      d="M0 0h16v24H0V0z"
      clipRule="evenodd"
    />
    <Path
      fill="red"
      fillRule="evenodd"
      d="M17.791 6.795c1.522 0 2.913.562 3.976 1.49a7.353 7.353 0 100 9.123 6.051 6.051 0 11-3.976-10.612zm2.82 2.749l-1.703 1.929-2.445-.674 1.356 2.12-1.356 2.258 2.565-.924 1.402 2.189v-2.54l2.292-.982-2.292-.821.18-2.555z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgDz;
