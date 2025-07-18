import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgVe = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="VE_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#VE_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="VE_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#VE_svg__b)">
        <Path fill="#FECA00" d="M0 0v8h32V0H0z" />
        <Path fill="#E31D1C" d="M0 16v8h32v-8H0z" />
        <Path
          fill="#F7FCFF"
          d="M12.737 11.86l.982-.558 1.103.557-.396-1.133.824-.832h-1.048l-.484-1.072-.412 1.072h-1.23l.925.817h-1.037L11.48 9.64l-.412 1.072h-1.23l.942.833-.18.726h-.785l-.483-1.072-.413 1.072H7.69l.942.833-.174.703h-.343l-.484-1.072-.412 1.072h-1.23l.941.833-.28 1.133.983-.558 1.102.557-.396-1.133.824-.832H9.11l.224-.127 1.103.557-.396-1.133.472-.477-.013.051.983-.557 1.102.557-.396-1.133.819-.827.01.01-.28 1.132zm6.486-.044l-.983-.558-1.102.558.396-1.133-.824-.833h1.048l.484-1.072.412 1.072h1.23l-.925.818h1.042l.483-1.073.413 1.073h1.23l-.942.832.18.727h.785l.483-1.073.412 1.073h1.23l-.941.832.174.703h.343l.484-1.072.412 1.072h1.23l-.942.833.28 1.133-.982-.558-1.102.558.396-1.133-.824-.833h.053l-.225-.127-1.102.557.396-1.133-.472-.477.013.051-.983-.557-1.103.557.396-1.133-.82-.83-.014.013.281 1.133z"
        />
        <Path
          fill="#F7FCFF"
          d="M15.833 10.535l-.983.557.28-1.133-.94-.832h1.23l.412-1.073.483 1.073h1.048l-.823.832.396 1.133-1.103-.557z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgVe;
