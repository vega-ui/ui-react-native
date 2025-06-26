import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMz = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MZ_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MZ_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="MZ_svg__b"
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
      <G mask="url(#MZ_svg__b)">
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M0 0v8h32V0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#093"
          fillRule="evenodd"
          d="M0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#272727"
          stroke="#fff"
          strokeWidth={2}
          d="M0 7h-1v10h34V7H0z"
        />
      </G>
      <Path
        fill="#F50100"
        fillRule="evenodd"
        d="M0 0v24l18-12L0 0z"
        clipRule="evenodd"
      />
      <Mask
        id="MZ_svg__c"
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
      <G mask="url(#MZ_svg__c)">
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M8.069 14.353l-3.78 3.05 1.734-4.076-2.978-2.868H6.56L8.003 7l1.532 3.459h3.51l-3.136 2.868 1.57 4.077-3.41-3.05z"
          clipRule="evenodd"
        />
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M6.156 11.984l-.641 2.14s2.164-.02 2.424.198c.783-.488 2.395-.197 2.395-.197l-.858-2.291S8.39 11.34 7.94 11.61c-1.105-.249-1.783.373-1.783.373z"
          clipRule="evenodd"
        />
        <Path
          fill="#000"
          d="M11.564 15.216a.5.5 0 01-.8.602l-4.18-5.551a.5.5 0 01.8-.602l4.18 5.551z"
        />
        <Path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.974 9.84l-.4-.48"
        />
        <Path
          fill="#000"
          fillRule="evenodd"
          d="M5.605 9.363l-1.209 1.935L5 12.345l1.383-2.055.248-.635-.248-.292h-.778zm-1.566 5.745l.583.822 4.495-5.319.187.209 1.036-.975 1.656-1.802-1.656 1.354-.536-.149-.5.787H8.8l-3.67 4.087-1.09.986z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgMz;
