import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKp = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <G mask="url(#KP_svg__KP_-_Korea_(North)">
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <G mask="url(#KP_svg__KP_-_Korea_(North)">
        <Path
          fill="#C51918"
          stroke="#F7FCFF"
          strokeWidth={2}
          d="M0 5h-1v14h34V5H0z"
        />
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M10 17a5 5 0 100-10 5 5 0 000 10z"
          clipRule="evenodd"
        />
        <Path
          fill="#C51918"
          fillRule="evenodd"
          d="M9.995 13.87L7.28 15.76l.958-3.168L5.6 10.593l3.309-.067L9.995 7.4l1.087 3.126 3.308.067-2.637 2 .958 3.167-2.716-1.89z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgKp;
