import * as React from 'react';
import Svg, { Mask, Path, G, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from 'react-native-svg';
const SvgCv = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="CV_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#CV_svg__a)">
      <Path
        fill="#4141DB"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="CV_svg__b"
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
      <G mask="url(#CV_svg__b)">
        <Path
          fill="#F90000"
          stroke="#F7FCFF"
          strokeWidth={2}
          d="M0 13h-1v4h34v-4H0z"
        />
        <G filter="url(#CV_svg__c)">
          <Path
            fill="#FFDE00"
            fillRule="evenodd"
            d="M9.796 10.26l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574-.245.905zm3 1.6l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574-.245.905zm3.126 1.89l-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.905-.702-.508zm-.726 4.51l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574-.245.905zm-1.674 1.89l-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.905-.702-.508zm-3.726 2.11l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574-.245.905zm-2.274-2.11l-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.905-.702-.508zm-3.126-1.89l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574-.245.905zm.726-4.51l-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.905-.702-.508zm1.674-1.89l.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574-.245.905z"
            clipRule="evenodd"
          />
        </G>
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgCv;
