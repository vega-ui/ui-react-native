import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNu = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="NU_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#NU_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="NU_svg__b"
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
      <G mask="url(#NU_svg__b)">
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Mask
          id="NU_svg__c"
          width={32}
          height={16}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Path fill="#fff" d="M0 0h32v16H0z" />
        </Mask>
        <G mask="url(#NU_svg__c)">
          <Path
            fill="#fff"
            d="M-2.262 15.13l6.343 1.467L17.6 9.126l1.431-.837 12.844-6.716 3.043-2.12-6.96-.642-11.222 6.33-8.109 3.985-10.89 6.003z"
          />
          <Path
            fill="#F50100"
            d="M-1.705 16.019l3.415 1.12L33.649-.814h-4.795L-1.705 16.019z"
          />
          <Path
            fill="#fff"
            d="M34.37 14.73l.253 1.51-6.704.357-10.806-6.33-1.019.348L-4.08.411l8.33-1.604L15.384 4.96l8.712 4.21 10.274 5.56z"
          />
          <Path
            fill="#F50100"
            d="M34.394 15.637l-3.415 1.12-13.6-7.686-4.032-.86L-3.26-.537h4.795l16.596 8.542 4.409 1.03 11.853 6.603z"
          />
          <Path
            fill="#fff"
            d="M13.189-1.25V-2.5h-1.25v1.25h1.25zm0 6V6h1.25V4.75h-1.25zm-14.439 0V3.5H-2.5v1.25h1.25zm0 6.5H-2.5v1.25h1.25v-1.25zm14.439 0h1.25V10h-1.25v1.25zm0 8h-1.25v1.25h1.25v-1.25zm5.689 0v1.25h1.25v-1.25h-1.25zm0-8V10h-1.25v1.25h1.25zm14.372 0v1.25h1.25v-1.25h-1.25zm0-6.5h1.25V3.5h-1.25v1.25zm-14.372 0h-1.25V6h1.25V4.75zm0-6h1.25V-2.5h-1.25v1.25zm-2.5 6V6h1.25V4.75h-1.25zm0-3.5h1.25V0h-1.25v1.25zm-.689 0V0h-1.25v1.25h1.25zm0 3.5h-1.25V6h1.25V4.75zm.689 2.5h1.25V6h-1.25v1.25zm-.689 0V6h-1.25v1.25h1.25zm.689 1.5V10h1.25V8.75h-1.25zm-.689 0h-1.25V10h1.25V8.75zm-2.5-1.5h1.25V6h-1.25v1.25zm-11.939 0V6H0v1.25h1.25zm0 1.5H0V10h1.25V8.75zm11.939 0V10h1.25V8.75h-1.25zm2.5 2.5V10h-1.25v1.25h1.25zm0 5.5h-1.25V18h1.25v-1.25zm.689 0V18h1.25v-1.25h-1.25zm0-5.5h1.25V10h-1.25v1.25zm2.5-4V6h-1.25v1.25h1.25zm0 1.5h-1.25V10h1.25V8.75zm11.872-1.5H32V6h-1.25v1.25zm0 1.5V10H32V8.75h-1.25zM13.189 0h1.25v-2.5h-1.25V0zm1.25 0v-1.25h-2.5V0h2.5zm0 4.75V0h-2.5v4.75h2.5zM0 6h13.189V3.5H0V6zm-1.25 0H0V3.5h-1.25V6zM0 6V4.75h-2.5V6H0zm0 4V6h-2.5v4H0zm0 1.25V10h-2.5v1.25H0zM0 10h-1.25v2.5H0V10zm13.189 0H0v2.5h13.189V10zm1.25 8v-6.75h-2.5V18h2.5zm0 1.25V18h-2.5v1.25h2.5zm0-1.25h-1.25v2.5h1.25V18zm3.189 0h-3.189v2.5h3.189V18zm1.25 0h-1.25v2.5h1.25V18zm-1.25 0v1.25h2.5V18h-2.5zm0-6.75V18h2.5v-6.75h-2.5zM32 10H18.878v2.5H32V10zm1.25 0H32v2.5h1.25V10zM32 10v1.25h2.5V10H32zm0-4v4h2.5V6H32zm0-1.25V6h2.5V4.75H32zM32 6h1.25V3.5H32V6zM18.878 6H32V3.5H18.878V6zm-1.25-6v4.75h2.5V0h-2.5zm0-1.25V0h2.5v-1.25h-2.5zm0 1.25h1.25v-2.5h-1.25V0zm-3.189 0h3.189v-2.5h-3.189V0zm3.189 4.75v-3.5h-2.5v3.5h2.5zM16.378 0h-.689v2.5h.689V0zm-1.939 1.25v3.5h2.5v-3.5h-2.5zM15.689 6h.689V3.5h-.689V6zm.689 0h-.689v2.5h.689V6zm1.25 2.75v-1.5h-2.5v1.5h2.5zM15.689 10h.689V7.5h-.689V10zm-1.25-2.75v1.5h2.5v-1.5h-2.5zM13.189 6H1.25v2.5h11.939V6zM0 7.25v1.5h2.5v-1.5H0zM1.25 10h11.939V7.5H1.25V10zm13.189-1.25v-1.5h-2.5v1.5h2.5zm0 2.5v5.5h2.5v-5.5h-2.5zm1.25 6.75h.689v-2.5h-.689V18zm1.939-1.25v-5.5h-2.5v5.5h2.5zM16.378 10h-.689v2.5h.689V10zm1.25-2.75v1.5h2.5v-1.5h-2.5zM30.75 6H18.878v2.5H30.75V6zM32 8.75v-1.5h-2.5v1.5H32zM18.878 10H30.75V7.5H18.878V10z"
          />
          <Path
            fill="#F50100"
            fillRule="evenodd"
            d="M17.692-1.333h-3.384V6H0v4h14.308v9.333h3.384V10H34V6H17.692v-7.333z"
            clipRule="evenodd"
          />
        </G>
        <Path
          fill="#2E42A5"
          fillRule="evenodd"
          d="M16.05 10.6a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z"
          clipRule="evenodd"
        />
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M16.1 8.691l-1.298.903.458-1.513L14 7.126l1.58-.032.52-1.494.52 1.494 1.58.032-1.26.955.458 1.513-1.298-.903zm-9-.115l-1.082.753.382-1.261-1.05-.797 1.317-.026L7.1 6l.433 1.245 1.317.026-1.05.797.382 1.26L7.1 8.577zm18 0l-1.082.753.382-1.261-1.05-.797 1.317-.026L25.1 6l.433 1.245 1.317.026-1.05.797.381 1.26-1.081-.752zm-9-4.8l-1.082.753.382-1.261-1.05-.797 1.317-.026L16.1 1.2l.433 1.245 1.317.026-1.05.797.381 1.26-1.081-.752zm0 10.6l-1.082.753.382-1.261-1.05-.796 1.317-.027.433-1.245.433 1.245 1.317.027-1.05.796.381 1.26-1.081-.752z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgNu;
