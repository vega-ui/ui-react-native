import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgLy = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="LY_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#LY_svg__a)">
      <Path fill="#55BA07" d="M0 18h32v6H0v-6z" />
      <Path fill="#1D1D1D" d="M0 6h32v12H0V6z" />
      <Path fill="#E11C1B" d="M0 0h32v6H0V0z" />
      <Path
        fill="#fff"
        d="M15.798 15.066c-1.793-.37-2.258-1.308-2.238-2.755 0-1.53.806-3.08 2.22-3.249 1.413-.169 2.57.358 3.178 1.094-.508-1.997-2.19-2.216-3.48-2.216-1.944-.017-3.938 1.46-3.938 4.239 0 2.42 1.757 4.24 3.994 4.285 2.795 0 3.233-1.93 3.313-2.588a5.065 5.065 0 00-.466.397c-.562.517-1.178 1.084-2.583.793zm4.465-3.775l-1.324.417 1.483.58-.207 1.554 1.005-1.07 1.458.3-.985-1.151.872-1.177-1.218.257-.86-.972-.224 1.262z"
      />
    </G>
  </Svg>
);
export default SvgLy;
