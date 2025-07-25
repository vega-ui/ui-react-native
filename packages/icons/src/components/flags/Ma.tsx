import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMa = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MA_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#MA_svg__a)">
      <Path fill="#C51918" d="M0 0h32v22a2 2 0 01-2 2H2a2 2 0 01-2-2V0z" />
      <Path fill="#E31D1C" d="M0 0h32v24H0V0z" />
      <Path
        fill="#579D20"
        d="M22.482 19.626L16.166 2.701h-.274L9.795 19.626l6.332-3.805 6.355 3.805zM15.467 8.222l.677-2.638.702 2.714 2.019 5.656 1.185 2.739-2.559-1.803-1.366-.818-1.344.808-2.5 1.813 1.156-2.795 2.03-5.676z"
      />
      <Path
        fill="#579D20"
        d="M12.662 13.473l3.496 2.324 3.263-2.324 6.195-5.237H6.386l6.276 5.237zm.073-1.999l-2.377-1.455H21.58l-2.041 1.293-3.397 2.577-3.408-2.415z"
      />
    </G>
  </Svg>
);
export default SvgMa;
