import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIm = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="IM_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#IM_svg__a)">
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="IM_svg__b"
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
      <G mask="url(#IM_svg__b)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M6.094 4.141c-.008-.093.103-.137.165-.069.45.492 1.636 1.716 2.323 1.716.859 0 4.232-2.843 5.23-2.38.997.463 3.016 5.305 3.016 5.305l-1.316 1.65-1.7-.927-.322-3.648S10.217 7.47 8.582 6.86l-.92.773S6.778 5.88 6.43 5.343c-.231-.354-.31-.884-.335-1.202z"
          clipRule="evenodd"
        />
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M8.262 8.124l-.56.34.107-.719-.453-.509.626-.104.28-.654.28.654.626.104-.453.51.107.718-.56-.34zm4.751-4.332a.363.363 0 01.725 0v1.714a.363.363 0 01-.725 0V3.792z"
          clipRule="evenodd"
        />
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M25.22 5.103c.083.043.062.16-.03.177-.654.12-2.321.479-2.685 1.061-.455.728.168 5.096-.753 5.696-.921.6-6.097-.253-6.097-.253l-.703-1.99 1.688-.951 3.264 1.66s.307-3.667 1.692-4.73l-.168-1.19s1.955.179 2.595.167c.423-.007.914.207 1.197.353z"
          clipRule="evenodd"
        />
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M20.693 4.831l.009-.654.553.471.671-.114-.243.586.406.584-.702-.11-.421.476-.191-.654-.666-.29.584-.295zm1.221 6.374a.392.392 0 11-.424.659l-1.549-1.035a.36.36 0 01.39-.606l1.583.982z"
          clipRule="evenodd"
        />
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M14.863 20.984c-.079.05-.17-.027-.139-.114.223-.628.747-2.25.424-2.857-.403-.758-4.497-2.402-4.556-3.5-.06-1.098 3.268-5.153 3.268-5.153l2.075.386-.021 1.937-3.07 1.997s3.023 2.1 3.251 3.83l1.114.449s-1.132 1.605-1.442 2.164c-.205.37-.636.688-.904.86z"
          clipRule="evenodd"
        />
        <Path
          fill="#FECA00"
          fillRule="evenodd"
          d="M17.362 17.199l.562.335-.684.243-.237.639-.387-.504-.708.06.446-.554-.202-.602.662.161.584-.431-.036.653zm-6.259-2.242a.406.406 0 01-.292-.758l1.668-.651a.413.413 0 11.298.77l-1.674.64z"
          clipRule="evenodd"
        />
        <Path
          fill="#FECA00"
          d="M13.663 9.765a.245.245 0 01-.149-.31c.043-.127.242-.34.366-.297l1.736.607a.24.24 0 01.16.21l.156 1.904c.01.135-.185.243-.316.254a.24.24 0 01-.257-.222l-.144-1.638-1.552-.508z"
        />
        <Path
          fill="#FECA00"
          d="M16.68 8.768c.104-.083.29.013.37.119a.247.247 0 01-.041.342l-1.203 1.233c-.103.082-.337-.079-.417-.185-.081-.106-.104-.396 0-.479l1.292-1.03z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgIm;
