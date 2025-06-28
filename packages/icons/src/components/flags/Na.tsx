import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="NA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#NA_svg__a)">
      <Path
        fill="#093"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="NA_svg__b"
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
      <G mask="url(#NA_svg__b)">
        <Path
          fill="#3195F9"
          fillRule="evenodd"
          d="M0 0v24L32 0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#E31D1C"
          stroke="#F7FCFF"
          strokeWidth={2}
          d="M-1.012 27.094l.53.96.908-.617 34.832-23.71.702-.477-.358-.77-2.342-5.04-.491-1.057-.97.647-35.356 23.556-.766.51.445.805 2.866 5.193z"
        />
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M6.23 9.245l-1.294 1.614-.314-2.045-1.928.751.751-1.928L1.4 7.324 3.015 6.03 1.4 4.736l2.045-.314-.75-1.928 1.927.751.314-2.045L6.23 2.815 7.524 1.2l.313 2.045 1.928-.75-.751 1.927 2.045.314L9.445 6.03l1.614 1.294-2.045.313.751 1.928-1.928-.751-.313 2.045L6.23 9.245zm0-.715a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm2-2.5a2 2 0 11-4 0 2 2 0 014 0z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgNa;
