import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTn = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TN_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TN_svg__a)">
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="TN_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#TN_svg__b)">
        <Path fill="#F7FCFF" d="M16 20a8 8 0 100-16 8 8 0 000 16z" />
        <Path
          fill="#E31D1C"
          d="M17.403 17.65s-4.217-1.15-4.217-5.676c0-4.527 4.217-5.776 4.217-5.776-1.744-.675-6.846.36-6.846 5.775 0 5.416 5.245 6.391 6.846 5.678zm-.232-6.662l-2.092.765 2.248.786.076 2.104 1.368-1.635 2.256.16-1.625-1.326.979-1.915-1.913.644-1.325-1.656.028 2.073z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgTn;
