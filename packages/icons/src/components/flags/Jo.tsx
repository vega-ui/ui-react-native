import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgJo = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="JO_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#JO_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="JO_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#JO_svg__b)">
        <Path fill="#272727" d="M0 0v8h32V0H0z" />
        <Path fill="#093" d="M0 16v8h32v-8H0z" />
      </G>
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0v24l20-12L0 0z"
        clipRule="evenodd"
      />
      <Mask
        id="JO_svg__c"
        width={20}
        height={24}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0v24l20-12L0 0z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#JO_svg__c)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M9.002 13.87L7.132 15l.426-2.204L6 11.146l2.11-.088L9.001 9l.892 2.058H12l-1.554 1.738.468 2.204-1.912-1.13z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgJo;
