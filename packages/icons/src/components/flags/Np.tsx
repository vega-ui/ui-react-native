import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNp = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Path fill="#fff" d="M0 0h32v24H0z" />
    <Path
      fill="#C51918"
      stroke="#4857A1"
      d="M11.616 12.32l9.317 11.18H.5V.842L20.04 11.5h-9.109l.684.82z"
    />
    <Mask
      id="NP_svg__a"
      width={22}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path
        fill="#fff"
        stroke="#fff"
        d="M11.616 12.32l9.317 11.18H.5V.842L20.04 11.5h-9.109l.684.82z"
      />
    </Mask>
    <G fillRule="evenodd" clipRule="evenodd" mask="url(#NP_svg__a)">
      <Path
        fill="#F7FCFF"
        d="M5.83 20.01L4.604 21.6l-.056-2.006-1.926.566 1.134-1.657-1.891-.673 1.89-.674-1.133-1.657 1.926.566.056-2.006 1.226 1.59 1.225-1.59.056 2.007 1.926-.567-1.134 1.657 1.891.674-1.89.674 1.133 1.656-1.926-.566-.056 2.006-1.225-1.59zM5.8 8.139l-.64.83-.03-1.048-1.005.296.592-.865L3.73 7l.987-.352-.592-.865 1.006.296.03-1.048.64.83.639-.83.03 1.048 1.005-.296-.592.865.988.352-.988.352.592.865-1.006-.296-.03 1.048-.639-.83z"
      />
      <Path
        fill="#F9FAFA"
        d="M5.666 7.894C7.892 7.903 9.08 6.64 9.08 6.64c.235 1.441-1.578 2.4-3.391 2.4-1.814 0-2.912-1.307-3.588-2.4 0 0 1.34 1.245 3.566 1.254z"
      />
    </G>
  </Svg>
);
export default SvgNp;
