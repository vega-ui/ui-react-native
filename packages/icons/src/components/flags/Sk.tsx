import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSk = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SK_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#SK_svg__a)">
      <Path
        fill="#3D58DB"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="SK_svg__b"
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
      <G mask="url(#SK_svg__b)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M0 0v8h32V0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#E31D1C"
          fillRule="evenodd"
          d="M0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#E31D1C"
          stroke="#fff"
          d="M15.604 6.03l.497-.053-.047-.447H5.877l-.031.467.499.033-.499-.033h0v.004l-.001.012-.003.046-.011.176a124.712 124.712 0 00-.143 2.688c-.064 1.54-.107 3.342.005 4.184.218 1.642 1.218 5.33 5.087 7l.202.087.2-.09c3.674-1.642 4.903-4.95 5.187-6.995.143-1.031.07-2.836-.03-4.336a81.662 81.662 0 00-.232-2.737l-.004-.043-.002-.012v-.003h0l-.497.052z"
        />
        <Mask
          id="SK_svg__c"
          width={12}
          height={16}
          x={5}
          y={5}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            stroke="#fff"
            d="M15.604 6.03l.497-.053-.047-.447H5.877l-.031.467.499.033-.499-.033h0v.004l-.001.012-.003.046-.011.176a124.712 124.712 0 00-.143 2.688c-.064 1.54-.107 3.342.005 4.184.218 1.642 1.218 5.33 5.087 7l.202.087.2-.09c3.674-1.642 4.903-4.95 5.187-6.995.143-1.031.07-2.836-.03-4.336a81.662 81.662 0 00-.232-2.737l-.004-.043-.002-.012v-.003h0l-.497.052z"
          />
        </Mask>
        <G fillRule="evenodd" clipRule="evenodd" mask="url(#SK_svg__c)">
          <Path
            fill="#F7FCFF"
            d="M10.257 6.59s.207.314.299.795c.093.482.108 1.324.108 1.324l-1.958-.24v1.485l2.002-.256-.032 1.41s-.6.062-1.09 0c-.492-.062-1.46-.322-1.46-.322v1.7s.983-.314 1.46-.386c.475-.073 1.09 0 1.09 0v2.088h.813V12.1s.888-.078 1.419.006c.53.084 1.033.38 1.033.38v-1.7s-.51.254-.99.317-1.462.005-1.462.005l.032-1.41s.665-.068 1.039-.018c.373.05.84.274.84.274V8.468s-.455.248-.814.293c-.358.045-1.109-.052-1.109-.052s.014-.87.09-1.293c.078-.424.296-.826.296-.826h-1.606z"
          />
          <Path
            fill="#2E42A5"
            d="M6.897 16.245s.44-.943 1.155-1.122c.715-.18 1.465.56 1.465.56s.458-1.495 1.574-1.495 1.508 1.496 1.508 1.496.476-.561 1.16-.561c.685 0 1.32 1.122 1.32 1.122s-2.045 3.714-4.09 3.714c-2.046 0-4.092-3.714-4.092-3.714z"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgSk;
