import * as React from 'react';
import Svg, { Mask, Path, G, Defs } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from 'react-native-svg';
const SvgSh = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="SH_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#SH_svg__a)">
      <Path
        fill="#2E42A5"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="SH_svg__b"
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
      <G mask="url(#SH_svg__b)">
        <Path fill="#2B409A" d="M0 0h18v14H0z" />
        <Mask
          id="SH_svg__c"
          width={18}
          height={14}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
        >
          <Path fill="#fff" d="M0 0h18v14H0z" />
        </Mask>
        <G mask="url(#SH_svg__c)">
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
            id="SH_svg__d"
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
            mask="url(#SH_svg__d)"
          />
        </G>
        <Path
          fill="#B7E1FF"
          stroke="#F7FCFF"
          strokeWidth={0.5}
          d="M22.038 9.783h-.25v.25c0 .433-.002.857-.004 1.271a89.36 89.36 0 00.014 2.77c.034 1.212.122 2.292.351 3.193.23.903.605 1.648 1.227 2.165.625.52 1.466.782 2.574.782 1.12 0 1.985-.327 2.634-.919.645-.586 1.055-1.412 1.311-2.37.511-1.907.436-4.43.295-6.907l-.014-.235h-8.138z"
        />
        <Mask
          id="SH_svg__e"
          width={10}
          height={12}
          x={21}
          y={9}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.5}
            d="M22.038 9.783h-.25v.25c0 .433-.002.857-.004 1.271a89.36 89.36 0 00.014 2.77c.034 1.212.122 2.292.351 3.193.23.903.605 1.648 1.227 2.165.625.52 1.466.782 2.574.782 1.12 0 1.985-.327 2.634-.919.645-.586 1.055-1.412 1.311-2.37.511-1.907.436-4.43.295-6.907l-.014-.235h-8.138z"
          />
        </Mask>
        <G mask="url(#SH_svg__e)">
          <Path fill="#2E42A5" d="M24 18h6v2h-6z" />
          <G filter="url(#SH_svg__f)">
            <Path fill="#FDFF00" d="M20 8h12v6H20z" />
          </G>
          <Path
            fill="#F7FCFF"
            stroke="#272727"
            d="M25.18 10.877a1.416 1.416 0 00-.052-.275l.473 1.468a2.025 2.025 0 00-.144-.128 2.041 2.041 0 01-.078-.066c-.1-.091-.15-.159-.158-.287l-.015-.292a8.746 8.746 0 00-.027-.42zm-.375 2.582s0 0 0 0l.089.07h0l-.089-.07z"
          />
          <Path fill="#FDFF00" d="M24.826 14.044h.2V18h-.2v-3.955z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M24.1 16.813h1.783s.017.514-.253.419c-.271-.095.027.095-.385 0-.412-.095-.775.299-.867.102-.092-.197-.45.056-.364-.233l.086-.288z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M24.133 16.764h1.733v.2h-1.733z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M24.347 16.066h1.426s.014.411-.203.335c-.216-.076.022.076-.307 0-.33-.076-.62.239-.694.081-.074-.157-.36.045-.291-.186l.069-.23z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M24.373 16.026h1.387v.2h-1.387z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M24.087 15.245h1.545s.015.412-.22.335c-.234-.076.024.076-.333 0-.357-.076-.671.24-.751.082-.08-.158-.39.044-.316-.186l.075-.231z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M24.116 15.206h1.502v.2h-1.502z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M24.214 14.556h1.426s.014.515-.203.42c-.216-.096.022.095-.308 0-.33-.096-.62.298-.693.101-.074-.197-.36.056-.291-.232l.069-.289z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M24.24 14.508h1.387v.2H24.24z" />
          <Path fill="#FDFF00" d="M26.742 14.544h.2V18.5h-.2v-3.955z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M26.1 16.976h1.783s.017.411-.253.335c-.271-.076.027.076-.385 0-.412-.076-.775.24-.867.081-.092-.157-.45.045-.364-.186l.086-.23z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M26.133 16.937h1.733v.2h-1.733z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M26.364 16.23h1.401s.014.309-.199.252c-.213-.057.021.057-.302 0-.324-.057-.609.18-.681.061-.073-.118-.354.034-.286-.14l.067-.173z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M26.39 16.201h1.362v.2H26.39z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M26.086 15.41h1.528s.015.309-.217.251c-.232-.057.023.058-.33 0-.353-.057-.664.18-.743.061-.08-.118-.386.034-.312-.14l.074-.172z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M26.114 15.38H27.6v.2h-1.486z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M26.222 14.72h1.4s.014.41-.199.335c-.212-.076.022.076-.302 0-.323-.076-.609.239-.681.081-.073-.157-.354.045-.286-.186l.068-.23z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M26.248 14.68h1.362v.2h-1.362z" />
          <Path fill="#FDFF00" d="M29.49 14.059h.2v5.258h-.2V14.06z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M28.673 17.253h2.27s.021.412-.323.335c-.345-.076.034.077-.49 0-.524-.076-.986.24-1.103.082-.118-.158-.574.045-.464-.186l.11-.23z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M28.715 17.214h2.206v.2h-2.206z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M29.01 16.256h1.782s.017.308-.253.251c-.27-.057.027.057-.385 0-.412-.057-.774.18-.867.061-.092-.118-.45.034-.364-.14l.087-.172z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M29.043 16.231h1.733v.2h-1.733z" />
          <Path
            fill="#F7FCFF"
            fillRule="evenodd"
            d="M28.828 14.935h1.782s.018.412-.253.335c-.27-.076.027.077-.385 0-.411-.076-.774.24-.867.082-.092-.158-.45.044-.364-.186l.087-.231z"
            clipRule="evenodd"
          />
          <Path fill="#212123" d="M28.861 14.896h1.733v.2h-1.733z" />
          <Path
            fill="#272727"
            fillRule="evenodd"
            d="M24.185 17.687s.926.503 2.337.416c1.411-.087 1.31.186 1.676-.202.366-.387.398-.3.855-.504.456-.204.522-.396.757-.396.236 0 2.742-.1 2.742-.1s-.229.206-.229.496c0 .29.153.32 0 .583-.153.263-.326.614-.548.716-.222.102-3.218.167-3.981.167-.765 0-2.334.085-2.514 0-.18-.085-1.095-1.176-1.095-1.176z"
            clipRule="evenodd"
          />
          <Path
            fill="#CE6201"
            fillRule="evenodd"
            d="M22.118 15.686l.893-.822s.039 0 .205.411c.166.411.174.974.346.833.173-.14.439-.01.55-.422.113-.411.106-.944.248-.677.142.266.058-.123.285.488.227.611.317-.263.442.611.124.875.23 1.176.23 1.38 0 .203 1.137.809.701 1.226-.436.417-.313.22-.701.483-.388.263-.786.11-.23.316.555.206.476.58.476.855 0 .276-.035.4-.476.337-.442-.061-.98.159-1.087.159-.107 0-1.403-.264-1.403-.808 0-.543-.48-4.37-.48-4.37z"
            clipRule="evenodd"
          />
        </G>
      </G>
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgSh;
