import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgBqSe = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BQ-SE_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#BQ-SE_svg__a)">
      <Path
        fill="#00268D"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#00268D"
        stroke="#E31D1C"
        strokeWidth={2}
        d="M1 1h30v22H1V1z"
      />
      <Path fill="#E31D1C" d="M15 0h2v24h-2z" />
      <Path fill="#E31D1C" d="M0 13v-2h32v2z" />
      <Path
        fill="#fff"
        stroke="#E31D1C"
        strokeWidth={2}
        d="M16.447 6.106L16 5.882l-.447.224-10 5-1.79.894 1.79.894 10 5 .447.224.447-.224 10-5 1.79-.894-1.79-.894-10-5z"
      />
      <Mask
        id="BQ-SE_svg__b"
        width={30}
        height={16}
        x={1}
        y={4}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          stroke="#fff"
          strokeWidth={2}
          d="M16.447 6.106L16 5.882l-.447.224-10 5-1.79.894 1.79.894 10 5 .447.224.447-.224 10-5 1.79-.894-1.79-.894-10-5z"
        />
      </Mask>
      <G mask="url(#BQ-SE_svg__b)">
        <Path
          fill="#059334"
          d="M11.609 16H25l-1.416-1.276s-2.831-2.524-3.013-2.64c-.183-.115-.484-.165-.826.203-.343.367-.54-.202-.824-.202-.285 0-.406 0-.82.471l-1.904 2.168h-2.19s-.369-.279-.58-.18c-.21.1-1.396-1.099-1.818-1.188-.423-.09-.7.325-.7.655s-.2-.303-.603-.117c-.405.185-.274.65-.274.65S11.34 16 11.609 16z"
        />
        <Path
          fill="#FEDA00"
          fillRule="evenodd"
          d="M15.505 11.301l-.927.699.34-1.154-.918-.707h1.144L15.504 9l.383 1.14H17l-.91.706.346 1.154-.931-.699z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgBqSe;
