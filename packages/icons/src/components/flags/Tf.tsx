import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgTf = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="TF_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#TF_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="TF_svg__b"
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
      <G mask="url(#TF_svg__b)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M18.789 6.2h8.048l-.784 1.504h-2.442v.808h1.872l-.762 1.4h-1.11v2.797L25.44 9.83l2.364 4.095h-.966l-.337-.449h-2.14l-1.506 2.781v.154l-.041-.077-.042.077v-.154l-1.504-2.78h-2.14l-.338.448h-.966l2.364-4.095 1.828 2.88V7.703h-2.442L18.789 6.2zm6.697 5.31l-.526.807h.995l-.47-.808zm-5.346 0l.526.807h-.995l.47-.808zm-3.826-.897l.83-.612.832.612-.293-1.026.806-.648-1.012-.022-.332-1.014-.333 1.014-1.012.022.807.648-.293 1.026zm12.141-.612l-.83.612.293-1.026-.807-.648 1.012-.022.332-1.014.333 1.014 1.012.022-.807.648.293 1.026-.83-.612zm-3.375 7.802l.83-.612.831.612-.293-1.026.807-.648-1.012-.022-.332-1.013-.333 1.013-1.012.022.807.648-.294 1.026zm-5.39-.612l-.831.612.293-1.026-.807-.648 1.012-.022.333-1.013.332 1.013 1.012.022-.806.648.293 1.026-.831-.612zm2.279 3.009l.831-.613.831.613-.293-1.027.807-.648-1.012-.022-.333-1.013-.332 1.013-1.013.022.807.648-.293 1.027z"
          clipRule="evenodd"
        />
        <Path fill="#2E42A5" stroke="#fff" d="M-.5-.5h13v11h-13z" />
        <Mask
          id="TF_svg__c"
          width={14}
          height={12}
          x={-1}
          y={-1}
          maskUnits="userSpaceOnUse"
        >
          <Path fill="#fff" stroke="#fff" d="M-.5-.5h13v11h-13z" />
        </Mask>
        <G fillRule="evenodd" clipRule="evenodd" mask="url(#TF_svg__c)">
          <Path fill="#F50100" d="M8 0h4v10H8V0z" />
          <Path fill="#2E42A5" d="M0 0h4v10H0V0z" />
          <Path fill="#F7FCFF" d="M4 0h4v10H4V0z" />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgTf;
