import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMs = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="MS_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#MS_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="MS_svg__b"
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
      <G mask="url(#MS_svg__b)">
        <Path
          fill="#6DC2FF"
          stroke="#F7FCFF"
          strokeWidth={0.5}
          d="M25.929 21.714c-1.296 0-2.206-.295-2.857-.815-.65-.521-1.073-1.294-1.342-2.312-.27-1.021-.38-2.268-.42-3.713a102.444 102.444 0 01-.018-3.3l.005-1.291h9.375c.167 2.908.23 5.752-.363 7.885-.303 1.09-.773 1.973-1.468 2.583-.691.605-1.63.963-2.912.963z"
        />
        <Mask
          id="MS_svg__c"
          width={11}
          height={12}
          x={21}
          y={10}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.5}
            d="M25.929 21.714c-1.296 0-2.206-.295-2.857-.815-.65-.521-1.073-1.294-1.342-2.312-.27-1.021-.38-2.268-.42-3.713a102.444 102.444 0 01-.018-3.3l.005-1.291h9.375c.167 2.908.23 5.752-.363 7.885-.303 1.09-.773 1.973-1.468 2.583-.691.605-1.63.963-2.912.963z"
          />
        </Mask>
        <G mask="url(#MS_svg__c)">
          <Path fill="#2EBED7" d="M20.933 10h10.07v7.978h-10.07z" />
          <Path fill="#A95601" d="M20.8 17.913h10.6v4.086H20.8z" />
          <Path
            stroke="#FFC6B5"
            d="M26.746 13.464s-1.867.423-1.687 0c.18-.424.664-1.95.664-1.95"
          />
          <Path
            fill="#FFC6B5"
            fillRule="evenodd"
            d="M27.307 13.766s-.34-.209-.34-.59c0-.38-.831-.521-.245-1.115.585-.594.838-.333.838 0 0 .332.47 1.116.47 1.116l-.723.589z"
            clipRule="evenodd"
          />
          <Path
            fill="#272727"
            fillRule="evenodd"
            d="M26.365 10.324h-.927v.908h-1.855v.909h1.855v7.913h.927v-7.913h1.855v-.909h-1.855v-.908z"
            clipRule="evenodd"
          />
          <Path
            fill="#0C7C38"
            fillRule="evenodd"
            d="M28.362 20.321s-.337-1.561-.337-2.63c0-1.07-.566-1.834-.404-2.399.161-.565.55-1.19.356-1.577-.195-.387.19-.575-.356-.387-.546.188-.693-.188-1.22 0s-.594 1.078-.594 1.332c0 .253.235 1.964.235 2.497 0 .534-.194 3.814.36 3.814.552 0 1.154-.854 1.364-.854.21 0 .596.204.596.204z"
            clipRule="evenodd"
          />
          <Path
            stroke="#FF9A06"
            d="M25.03 16.141c-.337 0-.027.783-.884 1.126-.857.343-1.026.826-.756.826s2.405 2.398 2.405 2.398l.524-.809v-2.555s-.952-.986-1.29-.986z"
            clipRule="evenodd"
          />
          <Path stroke="#979797" d="M27.543 20.158s.4.858 0 .858" />
          <Path
            stroke="#FFC6B5"
            d="M27.415 13.79s-.176.963-.51 1.165c-.335.201-1.71.591-1.71.925 0 .333-.136.452-.136.452"
          />
          <Path
            fill="#FF9A06"
            fillRule="evenodd"
            d="M26.748 11.803s.336.4.525 1.058c.188.659.733.883.733.575 0-.308.404-1.633 0-1.633h-1.258z"
            clipRule="evenodd"
          />
        </G>
        <Path fill="#2B409A" d="M0 0h18v14H0z" />
        <Mask
          id="MS_svg__d"
          width={18}
          height={14}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Path fill="#fff" d="M0 0h18v14H0z" />
        </Mask>
        <G mask="url(#MS_svg__d)">
          <Path
            fill="#F7FCFF"
            d="M-2.004 13l3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73L-2.004 13z"
          />
          <Path
            fill="#F50100"
            d="M-1.462 14.217l2.018 1.008L19.429-.933h-2.833l-18.058 15.15z"
          />
          <Path
            fill="#F7FCFF"
            d="M20.004 13l-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73L20.004 13z"
          />
          <Path
            fill="#F50100"
            d="M19.87 13.873l-2.019 1.009-8.036-6.918-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.927 7.004 5.942z"
          />
          <Mask
            id="MS_svg__e"
            width={22}
            height={18}
            x={-2}
            y={-2}
            fill="#000"
            maskUnits="userSpaceOnUse"
          >
            <Path fill="#fff" d="M-2-2h22v18H-2z" />
            <Path
              fillRule="evenodd"
              d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985V0z"
              clipRule="evenodd"
            />
          </Mask>
          <Path
            fill="#F50100"
            fillRule="evenodd"
            d="M9.985 0h-2v6H0v2h7.985v6h2V8H18V6H9.985V0z"
            clipRule="evenodd"
          />
          <Path
            fill="#F7FCFF"
            d="M7.985 0v-1.5h-1.5V0h1.5zm2 0h1.5v-1.5h-1.5V0zm-2 6v1.5h1.5V6h-1.5zM0 6V4.5h-1.5V6H0zm0 2h-1.5v1.5H0V8zm7.985 0h1.5V6.5h-1.5V8zm0 6h-1.5v1.5h1.5V14zm2 0v1.5h1.5V14h-1.5zm0-6V6.5h-1.5V8h1.5zM18 8v1.5h1.5V8H18zm0-2h1.5V4.5H18V6zM9.985 6h-1.5v1.5h1.5V6zm-2-4.5h2v-3h-2v3zm1.5 4.5V0h-3v6h3zM0 7.5h7.985v-3H0v3zm1.5.5V6h-3v2h3zm6.485-1.5H0v3h7.985v-3zm1.5 7.5V8h-3v6h3zm.5-1.5h-2v3h2v-3zM8.485 8v6h3V8h-3zM18 6.5H9.985v3H18v-3zM16.5 6v2h3V6h-3zM9.985 7.5H18v-3H9.985v3zM8.485 0v6h3V0h-3z"
            mask="url(#MS_svg__e)"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgMs;
