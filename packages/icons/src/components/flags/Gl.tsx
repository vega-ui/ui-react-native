import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGl = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GL_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GL_svg__a)">
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M0 12h32v12H0V12z"
        clipRule="evenodd"
      />
      <Mask
        id="GL_svg__b"
        width={32}
        height={12}
        x={0}
        y={12}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 12h32v12H0V12z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#GL_svg__b)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M12 20a8 8 0 100-16 8 8 0 000 16z"
          clipRule="evenodd"
        />
      </G>
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v12H0V0z"
        clipRule="evenodd"
      />
      <Mask
        id="GL_svg__c"
        width={32}
        height={12}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M0 0h32v12H0V0z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#GL_svg__c)">
        <Path
          fill="#C51918"
          fillRule="evenodd"
          d="M12 20a8 8 0 100-16 8 8 0 000 16z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgGl;
