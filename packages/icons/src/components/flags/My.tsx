import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMy = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MY_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MY_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#E31D1C"
        d="M.027 5h32v2.9h-32zm0 5.2h32v2.9h-32zm.085 5h32v2.5h-32zm0 5h32v2.7h-32z"
      />
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0h32v2.5H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 0h16v12H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M3.594 6.202c0 1.376.648 2.678 1.966 2.678 1.98 0 2.364-.422 3.287-1.004.219.49-.518 2.588-3.314 2.588C3.297 10.42 1.49 8.623 1.49 6.202c0-2.778 2.044-4.279 3.987-4.262 1.716 0 3.536.974 3.48 2.216-.808-.79-1.686-.79-3.147-.79-1.462 0-2.216 1.46-2.216 2.836z"
        clipRule="evenodd"
      />
      <Path
        fill="#FECA00"
        fillRule="evenodd"
        d="M11 7.3l-.927 1.353.045-1.64-1.545.55 1-1.3L8 5.8l1.573-.464-1-1.3 1.545.55-.045-1.64L11 4.3l.927-1.353-.045 1.64 1.545-.55-1 1.3L14 5.8l-1.573.464 1 1.3-1.545-.55.045 1.64L11 7.3z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgMy;
