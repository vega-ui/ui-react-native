import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgIq = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="IQ_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#IQ_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="IQ_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#IQ_svg__b)">
        <Path fill="#BF2714" d="M0 0v8h32V0H0z" />
        <Path fill="#272727" d="M0 16v8h32v-8H0z" />
        <Path
          fill="#009C4E"
          d="M5.337 12.811C6.247 14.117 5 15 5 15s1.09 0 1.507-.874h8.917V12.2s-.186-.925-.98-.925c-.795 0-.973.925-.973.925h-3.137l3.035-2.68-.59-.52-3.371 2.976v.63h4.785v-.37s.027-.216.25-.216c.224 0 .17.215.17.215v.793h-6.03v-1.084l-.653.291v.793s-.8-.217-1.305-.217c-.506 0-.536-.576-.536-.576l-.752.576zm12.11.074l.489 1.218H15.99V9.214l.82.263v3.408h.637zm9.064 0L27 14.103h-1.946V9.214l.82.263v3.408h.637zm-2.41-3.62l-.506.343v3.274h-.517v-2.626l-.85.49v2.136h-.572V11.4l-.647.416v.402s-1.244.086-1.244 1.845h4.331l.006-4.798zm-16.61 5.7c.157 0 .284-.111.284-.25 0-.137-.127-.25-.283-.25-.157 0-.283.113-.283.25 0 .139.126.25.283.25zm14.424-5.323c-.22.29-.888 0-.888 0l1.893-.22c-.196.382-1.006.22-1.006.22z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgIq;
