import * as React from 'react';
import Svg, {
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from 'react-native-svg';
const SvgBr = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="BR_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#BR_svg__a)">
      <Path
        fill="#093"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="BR_svg__b"
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
      <G mask="url(#BR_svg__b)">
        <G fillRule="evenodd" clipRule="evenodd" filter="url(#BR_svg__c)">
          <Path
            fill="#FFD221"
            d="M15.927 3.704l12.202 8.504L15.76 20.17 3.809 12.043l12.118-8.339z"
          />
          <Path
            fill="url(#BR_svg__d)"
            d="M15.927 3.704l12.202 8.504L15.76 20.17 3.809 12.043l12.118-8.339z"
          />
        </G>
        <Path
          fill="#2E42A5"
          fillRule="evenodd"
          d="M16 17.2a5 5 0 100-10 5 5 0 000 10z"
          clipRule="evenodd"
        />
        <Mask
          id="BR_svg__e"
          width={10}
          height={11}
          x={11}
          y={7}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="M16 17.2a5 5 0 100-10 5 5 0 000 10z"
            clipRule="evenodd"
          />
        </Mask>
        <G mask="url(#BR_svg__e)">
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M14.38 14.57l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117zm2 0l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117zm0 1.2l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117zm-1-4.2l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117zm0 2l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117zm-1.4-1l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117zm-1.4.8l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117zm4.6-3.4l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248-.223-.117z"
            clipRule="evenodd"
          />
          <Path
            fill="#F7FCFF"
            d="M9.925 10.997l.15-1.994c4.798.362 8.585 1.94 11.313 4.745l-1.434 1.395c-2.364-2.433-5.692-3.819-10.03-4.146z"
          />
          <Path
            fill="#093"
            d="M12.29 10.603l.05-.498c3.094.32 5.747 1.505 7.952 3.552l-.34.366c-2.125-1.971-4.677-3.11-7.663-3.42z"
          />
        </G>
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="BR_svg__d"
        x1={32}
        x2={32}
        y1={24}
        y2={0}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC600" />
        <Stop offset={1} stopColor="#FFDE42" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgBr;
