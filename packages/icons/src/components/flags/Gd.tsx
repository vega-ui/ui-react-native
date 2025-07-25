import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGd = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GD_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GD_svg__a)">
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M6 6h20v12H6V6z"
        clipRule="evenodd"
      />
      <Mask
        id="GD_svg__b"
        width={20}
        height={12}
        x={6}
        y={6}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M6 6h20v12H6V6z"
          clipRule="evenodd"
        />
      </Mask>
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#GD_svg__b)">
        <Path fill="#23875F" d="M6 6l10 6-10 6V6zm20 0l-10 6 10 6V6z" />
        <Path fill="#C51918" d="M16 16a4 4 0 100-8 4 4 0 000 8z" />
        <Path
          fill="#FECA00"
          d="M15.93 13.313l-2.072 1.437.662-2.46L13 10.717l2.059-.085.87-2.433.871 2.433h2.055l-1.516 1.656.76 2.316-2.17-1.292z"
        />
      </G>
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M8.777 4.442l1.131-.702 1.186.631-.415-1.131.829-.81h-1.124l-.476-1.188-.476 1.189-1.125.041.831.768-.361 1.202zm6 0l1.131-.702 1.186.631-.415-1.131.829-.81h-1.124l-.476-1.188-.476 1.189-1.125.041.831.768-.361 1.202zm7.131-.702l-1.131.702.361-1.202-.83-.768 1.125-.041.475-1.189.476 1.189h1.123l-.828.809.415 1.131-1.186-.63zM8.776 22.167l1.131-.702 1.186.631-.415-1.13.829-.81h-1.124l-.476-1.189-.475 1.189-1.125.041.83.768-.361 1.202zm7.132-.702l-1.132.702.361-1.202-.83-.768 1.124-.041.477-1.189.475 1.189h1.123l-.828.81.415 1.13-1.185-.63zm4.868.702l1.131-.702 1.186.631-.415-1.13.828-.81h-1.123l-.476-1.189-.476 1.189-1.125.041.831.768-.361 1.202z"
        clipRule="evenodd"
      />
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M8.635 12.772s.538.48.832.643c.1-.384-.125-1.252-.125-1.252-.063-.208-.758-.58-.758-.58s-.195.655.05 1.189z"
        clipRule="evenodd"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M9.196 13.93s-1.383-.646-1.524-1.56c-.14-.913.158-2.37.158-2.37s2.246.51 2.399 1.606c.152 1.095-.355 1.783-.355 1.783s-.52-1.335-1.01-1.483c0 0 0 1.323.332 2.024z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgGd;
