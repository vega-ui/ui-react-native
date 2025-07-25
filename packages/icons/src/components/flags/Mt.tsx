import * as React from 'react';
import Svg, { Path, Mask, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMt = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Path fill="#F7FCFF" d="M0 0h32v24H0z" />
    <Mask
      id="MT_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MT_svg__a)">
      <Mask id="MT_svg__b" fill="#fff">
        <Path
          fillRule="evenodd"
          d="M10 4H6v2.993A1 1 0 005.232 8H2v4h3.33c.13.267.375.469.67.539V16h4v-3.449a1 1 0 00.733-.551H14V8h-3.169v-.034A1 1 0 0010 6.98V4z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#A0A0A0"
        fillRule="evenodd"
        d="M10 4H6v2.993A1 1 0 005.232 8H2v4h3.33c.13.267.375.469.67.539V16h4v-3.449a1 1 0 00.733-.551H14V8h-3.169v-.034A1 1 0 0010 6.98V4z"
        clipRule="evenodd"
      />
      <Path
        fill="#FECA00"
        d="M6 4V3H5v1h1zm4 0h1V3h-1v1zM6 6.993l.23.973.77-.183v-.79H6zM5.232 8v1h1.035l-.035-1.034-1 .034zM2 8V7H1v1h1zm0 4H1v1h1v-1zm3.33 0l.901-.435L5.958 11h-.627v1zm.67.539h1v-.791l-.77-.182-.23.973zM6 16H5v1h1v-1zm4 0v1h1v-1h-1zm0-3.449l-.167-.986-.833.142v.844h1zm.733-.551v-1h-.628l-.273.565.9.435zM14 12v1h1v-1h-1zm0-4h1V7h-1v1zm-3.169 0l-1-.034L9.798 9h1.034V8zM10 6.98H9v.844l.833.142L10 6.98zM6 5h4V3H6v2zm1 1.993V4H5v2.993h2zm-.768.973H6.23L5.769 6.02a2 2 0 00-1.537 1.946h2zm0 0h-2v.068l2-.068zM2 9h3.232V7H2v2zm1 3V8H1v4h2zm2.33-1H2v2h3.33v-2zm.9.566l.001-.001-1.8.87a2 2 0 001.338 1.077l.462-1.946zM7 16v-3.461H5V16h2zm3-1H6v2h4v-2zm-1-2.449V16h2v-3.449H9zm1.167.986c.65-.11 1.19-.531 1.466-1.102l-1.8-.87.334 1.972zM14 11h-3.267v2H14v-2zm-1-3v4h2V8h-2zm-2.169 1H14V7h-3.169v2zm-1-1.034l2 .068v-.068h-2zm.002 0c-.003 0-.002-.002-.001 0 0-.002 0-.002 0 0h2a2 2 0 00-1.665-1.972l-.334 1.972zM9 4v2.98h2V4H9z"
        mask="url(#MT_svg__b)"
      />
      <Path
        fill="#E31D1C"
        fillRule="evenodd"
        d="M16 0h16v24H16V0z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgMt;
