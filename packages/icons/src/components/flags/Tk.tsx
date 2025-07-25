import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTk = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TK_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TK_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="TK_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#TK_svg__b)">
        <Path
          fill="#F7FCFF"
          d="M3.294 10.063l-.885.548.344-.92L2 8.995h.913L3.294 8l.292.995H4.5l-.659.696.323.92-.87-.548zm4-4l-.885.548.344-.92L6 4.995h.913L7.294 4l.292.995H8.5l-.659.696.323.92-.87-.548zm4 4l-.885.548.344-.92L10 8.995h.913L11.294 8l.292.995h.914l-.659.696.323.92-.87-.548zm-4 4l-.885.548.344-.92L6 12.995h.913L7.294 12l.292.995H8.5l-.659.697.323.92-.87-.549z"
        />
        <Path
          fill="#FECA00"
          d="M24.842 5.463c-4.083 2.017-17.5 11.082-17.5 11.082h22.35c-.223-.05-.431-.091-.628-.13-1.64-.327-2.45-.488-4.222-4.018-1.984-3.952 0-6.934 0-6.934zM6.616 17.965l-.306.76.306.835 22.753.44.631-1.16-.63-.835-22.754-.04z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgTk;
