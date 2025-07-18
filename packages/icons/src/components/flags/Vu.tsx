import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgVu = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="VU_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#VU_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#C51918"
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
      <Path
        fill="#272727"
        fillRule="evenodd"
        d="M0-2l16.67 14L0 26V-2z"
        clipRule="evenodd"
      />
      <Mask
        id="VU_svg__b"
        width={36}
        height={40}
        x={-2}
        y={-8.355}
        fill="#000"
        maskUnits="userSpaceOnUse"
      >
        <Path fill="#fff" d="M-2-8.355h36v40H-2z" />
        <Path
          fillRule="evenodd"
          d="M0-3.355L17.408 10H32v4H17.17L0 26.811v-4.47L14 12 0 1.534v-4.889z"
          clipRule="evenodd"
        />
      </Mask>
      <Path
        fill="#FFD018"
        fillRule="evenodd"
        d="M0-3.355L17.408 10H32v4H17.17L0 26.811v-4.47L14 12 0 1.534v-4.889z"
        clipRule="evenodd"
      />
      <Path
        fill="#272727"
        d="M17.408 10l-1.217 1.587.539.413h.678v-2zM0-3.355l1.217-1.587L-2-7.41v4.055h2zM32 10h2V8h-2v2zm0 4v2h2v-2h-2zm-14.83 0v-2h-.665l-.532.397L17.17 14zM0 26.811h-2V30.8l3.196-2.385L0 26.811zm0-4.47l-1.188-1.61-.812.6v1.01h2zM14 12l1.188 1.609 2.165-1.6-2.156-1.61L14 12zM0 1.534h-2v1.002l.803.6L0 1.534zm18.626 6.88L1.217-4.943l-2.434 3.174L16.19 11.587l2.435-3.174zM32 8H17.408v4H32V8zm2 6v-4h-4v4h4zm-16.83 2H32v-4H17.17v4zM1.195 28.414l17.17-12.811-2.393-3.206-17.17 12.812 2.393 3.205zM-2 22.34v4.471h4v-4.47h-4zm14.812-11.949l-14 10.34 2.376 3.218 14-10.34-2.376-3.218zm-14.01-7.255l14 10.466 2.396-3.204-14-10.465-2.395 3.203zM-2-3.355v4.89h4v-4.89h-4z"
        mask="url(#VU_svg__b)"
      />
      <Path
        fill="#FFD018"
        d="M4.874 16.768l.002-1.58c1.408-.311 2.341-.715 2.795-1.201C8.79 12.609 8.046 9.38 5.75 9.4c-1.139 0-2.316.542-2.316 1.819 0 1.585.327 2.263 1.443 2.263 1.109 0 1.515.06 2.246-.936l.793.245c-.783 1.067-1.838 1.91-3.041 1.91-1.982 0-3.06-1.495-3.06-3.223 0-2.133 1.731-3.627 3.82-3.627 1.557 0 4.021 1.909 4.021 3.627 0 1.72 0 2.508-1.35 3.709-.545.483-1.893 1.347-3.431 1.58z"
      />
      <Path
        fill="#FFD018"
        fillRule="evenodd"
        d="M4.991 9.88a.143.143 0 00-.174.101l-.055.207-.008-.01a.143.143 0 10-.226.174l.098.127-.165.152a.143.143 0 00.194.21l.146-.134.25.328-.275.147a.143.143 0 10.135.252l.313-.168.214.286-.376.201a.143.143 0 00.135.252l.412-.22c.11.149.205.282.287.399l-.263.14a.143.143 0 10.136.252l.29-.155c.121.18.184.288.184.316a.143.143 0 00.285 0c0-.072-.075-.224-.232-.468a.16.16 0 00.006-.012l.212-.466a.143.143 0 10-.26-.118l-.145.318c-.09-.13-.195-.277-.316-.442l.15-.33a.143.143 0 00-.261-.117l-.084.184a48.8 48.8 0 00-.144-.192l.202-.445a.143.143 0 00-.26-.119l-.138.305a92.464 92.464 0 00-.276-.36l.111-.42a.143.143 0 00-.102-.175z"
        clipRule="evenodd"
      />
      <Path
        fill="#FFD018"
        fillRule="evenodd"
        d="M5.952 9.88a.143.143 0 01.175.101l.054.207.009-.01a.143.143 0 11.226.174l-.098.127.164.152a.143.143 0 01-.193.21l-.146-.134-.25.328.274.147a.143.143 0 11-.135.252l-.313-.168-.213.286.376.201a.143.143 0 01-.136.252l-.411-.22c-.11.149-.205.282-.287.399l.262.14a.143.143 0 11-.135.252l-.29-.155c-.121.18-.184.288-.184.316a.143.143 0 01-.286 0c0-.072.075-.224.233-.468a.167.167 0 01-.007-.012l-.211-.466a.143.143 0 11.26-.118l.145.318c.09-.13.195-.277.316-.442l-.15-.33a.143.143 0 01.26-.117l.084.184.145-.192-.203-.445a.143.143 0 01.26-.119l.139.305.275-.36-.11-.42a.143.143 0 01.101-.175z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default SvgVu;
