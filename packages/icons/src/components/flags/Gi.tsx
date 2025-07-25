import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgGi = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="GI_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#GI_svg__a)">
      <Path fill="#F7FCFF" d="M0 0h32v24H0z" />
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M0 16h32v8H0v-8z"
        clipRule="evenodd"
      />
      <Path
        fill="#DB000B"
        fillRule="evenodd"
        d="M17.389 5H13.61v4.615h-.944V6.846H8.889v2.77H7v.923h.944v4.615H7v.923h17v-.923h-.944v-4.615H24v-.924h-1.889V6.846h-3.778v2.77h-.944V5z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        d="M9.833 8.59a.82.82 0 011.64 0V9.8h-1.64V8.59zm9.445 0a.82.82 0 011.64 0V9.8h-1.64V8.59z"
      />
      <Path
        fill="#272727"
        fillRule="evenodd"
        d="M9.567 13.47a1.086 1.086 0 012.173 0v1.868H9.567v-1.867z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        d="M19.012 13.47a1.086 1.086 0 012.172 0v1.868h-2.172v-1.867z"
      />
      <Path
        fill="#272727"
        fillRule="evenodd"
        d="M13.895 13.64a1.392 1.392 0 012.783 0v2.67h-2.784v-2.67z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        d="M14.556 7.666a.82.82 0 111.64 0V9.8h-1.64V7.666z"
      />
      <Path fill="#DE1A23" d="M7 8.692h.944v.923H7z" />
      <Path
        fill="#DE1A23"
        fillRule="evenodd"
        d="M8.5 6h1v1h-1V6zm3.818 0h1v1h-1V6zm-.568 0h-1.5v1h1.5V6zm6.34 0h1v1h-1V6zm3.728 0h1v1h-1V6zm-.614 0h-1.5v1h1.5V6zM13.8 4.023h-1v1h1v-1zm1.5 0h-1v1h1v-1zm.5 0h1v1h-1v-1zm2.5 0h-1v1h1v-1z"
        clipRule="evenodd"
      />
      <Path fill="#DE1A23" d="M22.999 8.775h1v.839h-1z" />
      <Path
        fill="#E8AA00"
        fillRule="evenodd"
        d="M15.44 18.453l2.712-1.774-2.894-1.353-2.894 1.663 3.075 1.464zm-1.06-1.611l.888-.595.937.51-.843.552-.982-.467zm-.904 4.165h1.473v1.107-.374h-.915v.374h-.558v-1.107z"
        clipRule="evenodd"
      />
      <Path
        fill="#E8AA00"
        fillRule="evenodd"
        d="M14.816 18.114h1.25v4h-1.25v-4z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgGi;
