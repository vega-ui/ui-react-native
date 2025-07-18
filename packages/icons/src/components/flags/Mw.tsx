import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMw = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MW_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MW_svg__a)">
      <Path
        fill="#E11C1B"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="MW_svg__b"
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
      <G fillRule="evenodd" clipRule="evenodd" mask="url(#MW_svg__b)">
        <Path fill="#272727" d="M0 0v10h32V0H0z" />
        <Path fill="#5EAA22" d="M0 16v8h32v-8H0z" />
        <Path
          fill="#E11C1B"
          d="M4.002 11.946v-.002l-.01.001h.01zm.628-3.82h.103l-.158-.023.055.024zm2.928 0c.052-.1.107-.2.164-.298l-2.29-1.515 2.7.878c.152-.211.313-.416.486-.614L6.633 4.688l2.529 1.32c.186-.177.38-.347.583-.51L8.14 3.281l2.266 1.734c.211-.14.43-.273.654-.397L9.904 2.137l1.914 2.102c.229-.102.462-.197.7-.282l-.65-2.665 1.482 2.404c.24-.063.482-.12.728-.167L13.97.774l.986 2.624c.243-.026.49-.045.739-.054L16.14.6l.447 2.744c.248.01.494.03.737.056l.987-2.626-.109 2.76c.246.047.488.103.726.167l1.485-2.409-.652 2.671c.237.086.469.18.696.282l1.92-2.108-1.16 2.49c.223.124.44.256.648.395l2.276-1.74-1.612 2.226c.2.162.393.33.577.506l2.542-1.326-1.995 1.9c.17.196.33.399.48.608l2.716-.883-2.304 1.525c.055.095.108.191.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134-2.829 0-5.304 1.257-6.658 3.134H7.558zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176H10.56zm16.989 0h.103l.055-.023-.158.024zm.733 3.818l.008.001h-.008v-.001z"
        />
      </G>
    </G>
  </Svg>
);
export default SvgMw;
