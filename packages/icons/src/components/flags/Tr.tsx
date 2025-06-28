import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TR_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TR_svg__a)">
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="TR_svg__b"
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
      <G mask="url(#TR_svg__b)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M16.026 16.113c-2.142-.527-3.819-2.32-3.8-4.947.019-2.46 1.508-4.538 3.862-5.1 2.354-.563 4.426.631 4.426.631-.65-1.536-2.91-2.615-4.764-2.612-3.449.006-7.126 2.804-7.157 7.081-.033 4.435 3.937 6.961 7.429 6.955 2.799-.005 4.127-1.92 4.402-2.734 0 0-2.257 1.254-4.398.726zm4.877-5.786l-2.133.783 2.407.85-.041 2.537 1.586-1.904 2.62.19L23.266 11l1.363-1.904-2.22.747-1.586-1.764.08 2.249z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgTr;
