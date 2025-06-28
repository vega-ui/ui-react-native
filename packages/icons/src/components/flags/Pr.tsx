import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="PR_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#PR_svg__a)">
      <Path
        fill="#EF0000"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="PR_svg__b"
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
      <G mask="url(#PR_svg__b)">
        <Path
          fill="#EF0000"
          stroke="#F7FCFF"
          strokeWidth={4}
          d="M0 8h-2v8h36V8H0z"
        />
      </G>
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 0v24l18-12L0 0z"
        clipRule="evenodd"
      />
      <Mask
        id="PR_svg__c"
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
      <G mask="url(#PR_svg__c)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M6.688 14.217l-3.672 1.938 1.787-3.894-2.277-2.08 2.812-.104 1.35-3.52 1.03 3.52h2.807l-1.87 2.184 1.488 3.894-3.455-1.938z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgPr;
