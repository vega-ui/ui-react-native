import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAu = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="AU_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#AU_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="AU_svg__b"
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
      <G mask="url(#AU_svg__b)">
        <Path fill="#2B409A" d="M0 0h18v14H0z" />
        <Mask
          id="AU_svg__c"
          width={18}
          height={14}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Path fill="#fff" d="M0 0h18v14H0z" />
        </Mask>
        <G mask="url(#AU_svg__c)">
          <Path
            fill="#F7FCFF"
            d="M-2.004 13l3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73L-2.004 13z"
          />
          <Path
            fill="#F50100"
            d="M-1.462 14.217l2.018 1.008L19.429-.933h-2.833l-18.058 15.15z"
          />
          <Path
            fill="#F7FCFF"
            d="M20.004 13l-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73L20.004 13z"
          />
          <Path
            fill="#F50100"
            d="M19.87 13.873l-2.019 1.009-8.036-6.918-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.927 7.004 5.942z"
          />
          <Mask
            id="AU_svg__d"
            width={22}
            height={18}
            x={-2}
            y={-2}
            fill="#000"
            maskUnits="userSpaceOnUse"
          >
            <Path fill="#fff" d="M-2-2h22v18H-2z" />
            <Path
              fillRule="evenodd"
              d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985V0z"
              clipRule="evenodd"
            />
          </Mask>
          <Path
            fill="#F50100"
            fillRule="evenodd"
            d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985V0z"
            clipRule="evenodd"
          />
          <Path
            fill="#F7FCFF"
            d="M7.985 0v-1.5h-1.5V0h1.5zm2 0h1.5v-1.5h-1.5V0zm-2 6v1.5h1.5V6h-1.5zM0 6V4.5h-1.5V6H0zm0 2h-1.5v1.5H0V8zm7.985 0h1.5V6.5h-1.5V8zm0 6h-1.5v1.5h1.5V14zm2 0v1.5h1.5V14h-1.5zm0-6V6.5h-1.5V8h1.5zM18 8v1.5h1.5V8H18zm0-2h1.5V4.5H18V6zM9.985 6h-1.5v1.5h1.5V6zm-2-4.5h2v-3h-2v3zm1.5 4.5V0h-3v6h3zM0 7.5h7.985v-3H0v3zm1.5.5V6h-3v2h3zm6.485-1.5H0v3h7.985v-3zm1.5 7.5V8h-3v6h3zm.5-1.5h-2v3h2v-3zM8.485 8v6h3V8h-3zM18 6.5H9.985v3H18v-3zM16.5 6v2h3V6h-3zM9.985 7.5H18v-3H9.985v3zM8.485 0v6h3V0h-3z"
            mask="url(#AU_svg__d)"
          />
        </G>
      </G>
      <Path
        fill="#F7FCFF"
        d="M9 20.5l-1.302 1.203.13-1.768-1.753-.267 1.463-1.002-.883-1.537 1.694.52L9 16l.65 1.648 1.695-.518-.883 1.536 1.463 1.002-1.752.267.129 1.768L9 20.5zM22 13l-.868.802.086-1.178-1.168-.179.975-.668-.589-1.024 1.13.346L22 10l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179L22 13zm2-8l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L24 2l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179L24 5zm5 4l-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L29 6l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179L29 9zm-4 13l-.868.802.086-1.178-1.168-.179.975-.668-.589-1.024 1.13.346L25 19l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179L25 22zm3.5-7.75l-.882.463.169-.981-.714-.695.986-.144L28.5 12l.44.893.987.143-.714.696.169.982-.882-.464z"
      />
    </G>
  </Svg>
);
export default SvgAu;
