import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPy = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="PY_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#PY_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="PY_svg__b"
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
      <G mask="url(#PY_svg__b)">
        <Path
          stroke="#272727"
          strokeWidth={0.35}
          d="M19.825 12a3.825 3.825 0 11-7.65 0 3.825 3.825 0 017.65 0z"
        />
        <Path
          fill="#272727"
          fillRule="evenodd"
          d="M13 12a3 3 0 106 0 3 3 0 00-6 0zm5.65 0a2.65 2.65 0 11-5.3 0 2.65 2.65 0 015.3 0z"
          clipRule="evenodd"
        />
        <Path
          fill="#F05234"
          fillRule="evenodd"
          d="M0 0v8h32V0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#3D58DB"
          fillRule="evenodd"
          d="M0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#73BE4A"
          d="M14.617 10.002l.284.411c-.66.457-.958.993-.714 1.904.241.9.808 1.348 1.75 1.381l-.017.5c-1.162-.04-1.947-.517-2.245-1.631-.296-1.106.1-1.982.942-2.565z"
        />
        <Path
          fill="#FBCD17"
          fillRule="evenodd"
          d="M16 12.315l-.882.599.297-1.024-.842-.654 1.066-.034L16 10.2l.361 1.003 1.066.034-.842.653.297 1.024-.882-.599z"
          clipRule="evenodd"
        />
        <Path
          stroke="#73BE4A"
          strokeWidth={0.5}
          d="M17.168 10.176s1.126.78.72 2.291c-.404 1.512-1.983 1.567-1.983 1.567"
        />
        <Path fill="#F7FCFF" d="M14.564 9.044l.467.718-.467-.718z" />
      </G>
    </G>
  </Svg>
);
export default SvgPy;
