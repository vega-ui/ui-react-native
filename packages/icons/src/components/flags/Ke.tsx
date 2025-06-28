import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgKe = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="KE_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#KE_svg__a)">
      <Path
        fill="#272727"
        fillRule="evenodd"
        d="M0 0v8h32V0H0z"
        clipRule="evenodd"
      />
      <Path
        fill="#4E8B1D"
        fillRule="evenodd"
        d="M0 16v8h32v-8H0z"
        clipRule="evenodd"
      />
      <Path
        fill="#E31D1C"
        stroke="#F7FCFF"
        strokeWidth={2}
        d="M0 7h-1v10h34V7H0z"
      />
    </G>
    <Path
      fill="#fff"
      d="M19.02 3.929c.19-.39.701-.816 1.535-1.278a.1.1 0 01.138.131L12.062 20.48l-.45-.22 7.609-15.6c-.345-.056-.412-.3-.201-.731z"
    />
    <Path
      fill="#fff"
      d="M12.971 3.929c.21.431.144.675-.2.731l7.607 15.6-.449.219-8.631-17.697a.1.1 0 01.138-.131c.833.462 1.345.888 1.535 1.278z"
    />
    <Path
      fill="#E31D1C"
      fillRule="evenodd"
      d="M16 20c.997 0 5-3.582 5-8s-4.003-8-5-8c-.997 0-5 3.582-5 8s4.003 8 5 8z"
      clipRule="evenodd"
    />
    <Mask
      id="KE_svg__b"
      width={10}
      height={16}
      x={11}
      y={4}
      maskUnits="userSpaceOnUse"
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        d="M16 20c.997 0 5-3.582 5-8s-4.003-8-5-8c-.997 0-5 3.582-5 8s4.003 8 5 8z"
        clipRule="evenodd"
      />
    </Mask>
    <G mask="url(#KE_svg__b)">
      <Path
        fill="#272727"
        d="M6.5 19a7 7 0 100-14 7 7 0 000 14zm19 0a7 7 0 100-14 7 7 0 000 14z"
      />
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M16.2 10.93c.456-.324.8-1.737.8-3.43s-.344-3.106-.8-3.43v6.86zm-.5-.09c-.406-.446-.7-1.773-.7-3.34s.294-2.894.7-3.34v6.68zm0 2.32v6.68c-.406-.446-.7-1.773-.7-3.34s.294-2.894.7-3.34zm.5 6.77v-6.86c.456.324.8 1.737.8 3.43s-.344 3.106-.8 3.43z"
        clipRule="evenodd"
      />
      <Path fill="#F7FCFF" d="M16 11a1 1 0 110 2 1 1 0 010-2z" />
    </G>
  </Svg>
);
export default SvgKe;
