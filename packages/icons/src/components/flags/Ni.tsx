import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgNi = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="NI_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#NI_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="NI_svg__b"
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
      <G mask="url(#NI_svg__b)">
        <Path
          fill="#0080EC"
          fillRule="evenodd"
          d="M0 0v8h32V0H0zm0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#D0AB00"
          fillRule="evenodd"
          d="M16 8c.189 0 .374.013.555.038l-.198 1.276a2.735 2.735 0 00-.872.026l-.093-1.294A4.03 4.03 0 0116 8zm1.152.168l-.348 1.244a2.71 2.71 0 011.904 2.677l1.287.11a4.002 4.002 0 00-2.843-4.03zm2.361 5.746a4 4 0 01-3.217 2.075v-1.296a2.704 2.704 0 001.83-1.014l1.387.235zm-6.936.156a4 4 0 003.194 1.924V14.7a2.706 2.706 0 01-1.935-1.07l-1.26.44zm-.573-1.899a4.002 4.002 0 012.548-3.901l.334 1.26a2.71 2.71 0 00-1.595 2.45l-1.287.191z"
          clipRule="evenodd"
        />
        <Path
          fill="#7CDFFF"
          fillRule="evenodd"
          d="M15.975 8.95l-2.737 4.73h5.517l-2.78-4.73z"
          clipRule="evenodd"
        />
        <Mask
          id="NI_svg__c"
          width={6}
          height={6}
          x={13}
          y={8}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="M15.975 8.95l-2.737 4.73h5.517l-2.78-4.73z"
            clipRule="evenodd"
          />
        </Mask>
        <G mask="url(#NI_svg__c)">
          <Path
            stroke="#E31D1C"
            d="M16 15.118a2.39 2.39 0 100-4.782 2.39 2.39 0 000 4.782z"
          />
          <Path
            stroke="#FFD018"
            d="M16 15.118a2.39 2.39 0 100-4.782 2.39 2.39 0 000 4.782z"
          />
          <Path
            stroke="#4EDD00"
            d="M16 15.118a2.39 2.39 0 100-4.782 2.39 2.39 0 000 4.782z"
          />
          <Path
            stroke="#3D58DB"
            d="M16 15.118a2.39 2.39 0 100-4.782 2.39 2.39 0 000 4.782z"
          />
          <Path fill="#3D58DB" d="M13.018 12.218h6.255v1.818h-6.255z" />
          <Path
            fill="#97C923"
            fillRule="evenodd"
            d="M13.437 12.99l1.247-1.239.382.62.267-.756.297.567.312-.43.403.43.37-.567.316.567.363-.43.848.9.152.339-4.957.251v-.251z"
            clipRule="evenodd"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgNi;
