import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="KN_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#KN_svg__a)">
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Path
        fill="#5EAA22"
        fillRule="evenodd"
        d="M0 0v24L32 0H0z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        stroke="#FFD018"
        strokeWidth={2.5}
        d="M.636 27.952l.723.807.902-.602L38.52 3.954l1.2-.8-.963-1.074-5.32-5.936-.724-.807-.901.602-36.261 24.203-1.2.8.963 1.074 5.32 5.936z"
      />
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M12.089 16.918L11 18.813l-.695-2.134-2.162-.688 1.801-1.1-.217-2.233 1.778 1.367 1.842-1.02-.516 2.273 1.477 1.701-2.22-.06zm10-6.553L21 12.26l-.695-2.134-2.162-.688 1.801-1.1-.217-2.233 1.778 1.367 1.842-1.02-.516 2.273 1.477 1.701-2.22-.06z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgKn;
