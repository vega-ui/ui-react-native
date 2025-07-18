import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgOm = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="OM_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#OM_svg__a)">
      <Path
        fill="#F50101"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="OM_svg__b"
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
      <G mask="url(#OM_svg__b)">
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M0 0v8h32V0H0z"
          clipRule="evenodd"
        />
        <Path
          fill="#5EAA22"
          fillRule="evenodd"
          d="M0 16v8h32v-8H0z"
          clipRule="evenodd"
        />
        <Path fill="#F50101" d="M0 0h12v24H0z" />
        <Path
          fill="#F7FCFF"
          fillRule="evenodd"
          d="M10.77 2.033c.01-.091-.107-.126-.153-.047-.363.616-1.273 2.082-2.77 4v-.918c-.143-.155-.598-.572-.598-.572v-.917l.824-.745L6.94 2l-1.192.834.901.745v.917c0 .44-.546.572-.546.572l-.1.809c-1.393-1.809-2.262-3.22-2.63-3.85-.047-.081-.166-.043-.152.05.11.738.443 2.373 1.36 4.12h-.246v-.033a.087.087 0 00-.087-.087H2.14a.087.087 0 00-.087.087V7.49c0 .048.04.087.087.087h2.11a.087.087 0 00.087-.087v-.696H4.6c.09.208.297.354.54.358.168.26.352.52.55.778-.457-.046-3.478-.303-3.478.796 0 .657.735 1.004 1.656 1.183l-2.207 1.995c-.065.059-.014.161.072.14.72-.178 2.606-.729 4.402-1.954h.055c.506 0 .858-.22 1.102-.516 1.827 1.49 3.893 2.18 4.79 2.426.094.026.144-.095.065-.15a27.17 27.17 0 01-4.052-3.49l.044-.052c.343-.404.642-.82.902-1.238a.596.596 0 00.246-.276h.265v.696c0 .048.04.087.087.087h2.109a.087.087 0 00.087-.087V6.164a.087.087 0 00-.087-.087H9.64a.087.087 0 00-.058.022 12.353 12.353 0 001.188-4.066zM9.553 6.196v-.039l-.02.04h.02zm-3.913.365a.487.487 0 01-.489.484.487.487 0 01-.489-.484c0-.267.219-.484.49-.484.27 0 .488.217.488.484zm2.609 0c0 .267.219.484.49.484.27 0 .488-.217.488-.484a.487.487 0 00-.489-.484c-.27 0-.49.217-.49.484z"
          clipRule="evenodd"
        />
      </G>
    </G>
  </Svg>
);
export default SvgOm;
