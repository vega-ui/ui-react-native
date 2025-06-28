import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGg = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GG_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GG_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="GG_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#GG_svg__b)">
        <Path fill="#E31D1C" d="M12 0h8v8h12v8H20v8h-8v-8H0V8h12V0z" />
        <Path
          fill="#FECA00"
          d="M13.005 3.046L14 4.8V10H6.865v-.057l-1.759-.998v5.96L6.771 14H14v5.051l-.995 1.754h5.96l-.956-1.759H18V14h7.2l1.665.906v-5.96l-1.759.997V10H18V4.805h.009l.957-1.759h-5.96z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgGg;
