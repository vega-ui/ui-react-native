import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgDj = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="DJ_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#DJ_svg__a)">
      <Path
        fill="#73BE4A"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="DJ_svg__b"
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
      <G mask="url(#DJ_svg__b)">
        <Path
          fill="#69F"
          fillRule="evenodd"
          d="M0-2v14h32V-2H0z"
          clipRule="evenodd"
        />
      </G>
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M0 0v24l18-12L0 0z"
        clipRule="evenodd"
      />
      <Mask
        id="DJ_svg__c"
        width={18}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24l18-12L0 0z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#DJ_svg__c)">
        <Path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M7.002 14.07l-1.87 1.13.426-2.204L4 11.347l2.11-.09.892-2.057.892 2.058H10l-1.554 1.738.468 2.204-1.912-1.13z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgDj;
