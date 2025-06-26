import * as React from 'react';
import Svg, { Mask, Path, G, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from 'react-native-svg';
const SvgAo = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="AO_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#AO_svg__a)">
      <Path
        fill="#1D1D1D"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="AO_svg__b"
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
      <G mask="url(#AO_svg__b)">
        <Path
          fill="#F50100"
          fillRule="evenodd"
          d="M0 0v12h32V0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#FFEA42"
          d="M9.933 5.897l.427-1.405c3.2.977 5.13 2.689 5.672 5.132.36 1.62.196 3.069-.386 4.358-.415.92-.942 1.605-1.7 2.378-1.263 1.288-3.34 2.11-5.217 1.76a10.498 10.498 0 01-3.61-1.375l.766-1.252a9.039 9.039 0 003.111 1.184c1.355.252 2.961-.384 3.906-1.347.647-.66 1.08-1.222 1.41-1.953.453-1.005.58-2.13.29-3.434-.414-1.864-1.932-3.211-4.669-4.046z"
        />
        <G fillRule="evenodd" clipRule="evenodd" filter="url(#AO_svg__c)">
          <Path
            fill="#FCFF01"
            d="M9.846 9.464l-.95.658.336-1.102-.922-.695L9.466 8.3l.38-1.087.38 1.087 1.156.024-.921.695.335 1.102-.95-.658z"
          />
          <Path
            fill="#FFEA42"
            d="M9.846 9.464l-.95.658.336-1.102-.922-.695L9.466 8.3l.38-1.087.38 1.087 1.156.024-.921.695.335 1.102-.95-.658z"
          />
        </G>
        <G fillRule="evenodd" clipRule="evenodd" filter="url(#AO_svg__d)">
          <Path
            fill="#FCFF01"
            d="M7.614 9.86s-1.684 2.468-.358 3.37c1.326.903 8.337 4.707 8.337 4.707s1.449-.008 1.655.3c.206.309.635.671.816.671.18 0 .647-.327.647-.327s.364-.297 0-.643c-.364-.347-2.287-1.532-2.287-1.532s-7.508-4.792-8.147-5.266c-.638-.475-.663-1.28-.663-1.28z"
          />
          <Path
            fill="#FFEA42"
            d="M7.614 9.86s-1.684 2.468-.358 3.37c1.326.903 8.337 4.707 8.337 4.707s1.449-.008 1.655.3c.206.309.635.671.816.671.18 0 .647-.327.647-.327s.364-.297 0-.643c-.364-.347-2.287-1.532-2.287-1.532s-7.508-4.792-8.147-5.266c-.638-.475-.663-1.28-.663-1.28z"
          />
        </G>
        <Path
          fill="#FFEA42"
          fillRule="evenodd"
          d="M11.712 4.074l-.39.883 1.278.553.363-.883-1.251-.553zm2.613 1.41l-.704.66.96 1.01.679-.672-.935-.998zm.961 2.653l.9-.35.493 1.277-.88.368-.513-1.295zm1.753 2.5l-.965-.032-.034 1.393.955.005.044-1.367zm-1.192 2.557l.883.39-.553 1.25-.883-.362.553-1.278zm-.523 3.008l-.66-.704-1.01.96.672.68.998-.936zm-2.647.965l.348.9-1.276.493-.368-.88 1.296-.513zm-2.494 1.754l.03-.964-1.392-.035-.005.955 1.367.044zm-2.551-1.193l-.39.883-1.251-.553.362-.883 1.279.553z"
          clipRule="evenodd"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgAo;
