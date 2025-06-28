import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgCi = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <G
      fillRule="evenodd"
      clipRule="evenodd"
      mask="url(#CI_svg__CI_-_C\xF4te_d'Ivoire_(Ivory_Coast)"
    >
      <Path fill="#67BD38" d="M22 0h10v24H22V0z" />
      <Path fill="#E47E00" d="M0 0h10v24H0V0z" />
      <Path fill="#F7FCFF" d="M10 0h12v24H10V0z" />
    </G>
  </Svg>
);
export default SvgCi;
