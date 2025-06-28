import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgSg = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SG_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#SG_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="SG_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#SG_svg__b)">
        <Path fill="#E31D1C" d="M0 0v12h32V0H0z" />
        <Path
          fill="#F1F9FF"
          d="M8.868 10.59S6.043 9.453 6.043 6.374s2.825-4.179 2.825-4.179c-1.373-.347-5.017-.037-5.017 4.179s3.589 5.01 5.017 4.216zm.724-.51l.811-.489.829.49-.203-.955.673-.754h-.912l-.387-.891-.387.891-.914.039.675.715-.185.955zm3.757-.543l-.81.489.185-.955-.675-.715.914-.038.386-.892.387.892h.912l-.673.753.203.955-.829-.49zM11.287 5.77l.81-.49.83.49-.204-.955.674-.753h-.912l-.387-.892-.387.892-.914.038.675.715-.185.955zM9.37 7.223l-.81.489.184-.955-.675-.715.914-.038.387-.892.387.892h.912l-.673.753.202.955-.828-.49zm4.548.445l.81-.49.829.49-.203-.955.673-.753h-.912l-.387-.892-.386.892-.915.039.675.714-.184.955z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgSg;
