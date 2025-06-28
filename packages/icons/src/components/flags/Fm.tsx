import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgFm = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="FM_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#FM_svg__a)">
      <Path
        fill="#63B3E1"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="FM_svg__b"
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
      <G
        fill="#F7FCFF"
        fillRule="evenodd"
        clipRule="evenodd"
        mask="url(#FM_svg__b)"
      >
        <Path d="M16 7.3l-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 2.8l.882 1.786 1.971.287-1.426 1.39.336 1.964L16 7.3zm0 12l-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 14.8l.882 1.787 1.971.286-1.426 1.39.336 1.964L16 19.3zm-6.2-5.8l-1.763.927.336-1.963-1.426-1.391 1.971-.287L9.8 9l.882 1.787 1.971.286-1.426 1.39.336 1.964L9.8 13.5zm12.2 0l-1.763.927.336-1.963-1.426-1.391 1.971-.287L22 9l.882 1.787 1.971.286-1.426 1.39.336 1.964L22 13.5z" />
      </G>
    </G>
  </Svg>
);
export default SvgFm;
