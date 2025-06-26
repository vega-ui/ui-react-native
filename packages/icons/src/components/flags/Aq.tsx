import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgAq = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="AQ_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#AQ_svg__a)">
      <Path
        fill="#5196ED"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="AQ_svg__b"
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
      <G mask="url(#AQ_svg__b)">
        <Path
          fill="#F5F8FB"
          fillRule="evenodd"
          d="M8.717 7.894s2.064 1.132 2.352 1.445c.286.314.746 1.464 1.464.814.717-.65 1.434-.145 1.434-1.181s1.072-3.44 2.626-2.838c1.554.603 2.832.226 3.19.467.359.24 1.22 1.437 1.89 1.437.669 0 1.003.699 1.051 1.71.048 1.013-.215 1.11.407 1.23.622.12.86.579.55 1.18-.31.603-.287.338-.24.965.049.626-.62 4.321-2.678 4.683-2.056.361-4.005.168-3.48-.53.527-.7 1.255-1.503.18-1.672-1.077-.169-1.755-.313-2.831-.023-1.076.289-2.2.746-2.87-.12-.67-.868-.526-1.495-1.076-1.905-.55-.41-1.22-.337-.67-1.132.55-.795 1.005-.498.55-1.125-.454-.626-2.169-.9-2.169-1.525 0-.627-1.09-2 .32-1.88z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgAq;
