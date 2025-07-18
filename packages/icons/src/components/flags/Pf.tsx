import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgPf = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="PF_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#PF_svg__a)">
      <Path
        fill="#F7FCFF"
        fillRule="evenodd"
        d="M0 0v24h32V0H0z"
        clipRule="evenodd"
      />
      <Mask
        id="PF_svg__b"
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
      <G mask="url(#PF_svg__b)">
        <Path
          fill="#BF2714"
          fillRule="evenodd"
          d="M0 0v6h32V0H0zm0 18v6h32v-6H0z"
          clipRule="evenodd"
        />
        <Mask
          id="PF_svg__c"
          width={12}
          height={12}
          x={10}
          y={6}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="M16 18a6 6 0 100-12 6 6 0 000 12z"
            clipRule="evenodd"
          />
        </Mask>
        <G mask="url(#PF_svg__c)">
          <Path
            fill="#5277B9"
            fillRule="evenodd"
            d="M10.549 13.765a.197.197 0 01.286-.23l.374.217a.197.197 0 00.182.008l.922-.432a.197.197 0 01.199.018l.996.72 1.378-.742a.197.197 0 01.171-.007l1.038.45a.197.197 0 00.164-.003l.93-.448a.197.197 0 01.158-.005l1.152.46c.052.02.11.018.16-.007l.892-.44a.197.197 0 01.179.001l.818.429c.059.03.13.03.188-.004l.425-.24a.197.197 0 01.287.221l-.088.335H10.645l-.096-.301zm-.004 1.185a.197.197 0 01.29-.226l.34.205a.197.197 0 00.187.008l.877-.426a.197.197 0 01.204.02l.956.715 1.323-.739a.197.197 0 01.177-.007l.99.445a.197.197 0 00.168-.003l.888-.443a.197.197 0 01.163-.006l1.1.456c.053.022.114.02.165-.007l.85-.436a.197.197 0 01.183.002l.778.423c.06.033.134.031.194-.004l.39-.229c.15-.088.333.05.29.219l-.085.329H10.636l-.091-.295zm.197.788a.197.197 0 01.289-.227l.34.205a.197.197 0 00.187.008l.877-.426a.197.197 0 01.204.02l.956.715 1.324-.739a.197.197 0 01.176-.008l.99.446a.197.197 0 00.169-.003l.887-.443a.197.197 0 01.164-.006l1.1.456c.053.022.113.02.165-.007l.85-.436a.197.197 0 01.183.002l.778.422c.06.033.134.032.193-.003l.39-.229a.197.197 0 01.29.219l-.084.329H10.833l-.091-.296zm1.18.786a.197.197 0 01.29-.226l.34.204a.197.197 0 00.187.009l.877-.426a.197.197 0 01.204.02l.955.715 1.324-.739a.197.197 0 01.177-.008l.99.446a.197.197 0 00.168-.003l.888-.443a.197.197 0 01.163-.006l1.1.456c.053.022.114.02.165-.007l.85-.436a.197.197 0 01.183.002l.778.422c.06.033.134.032.194-.003l.39-.229a.197.197 0 01.29.219l-.085.329H12.013l-.091-.296zm-1.574.984a.197.197 0 01.29-.226l.34.204a.197.197 0 00.187.008l.877-.425a.197.197 0 01.204.02l.956.714 1.323-.738a.197.197 0 01.177-.008l.99.446a.197.197 0 00.168-.004l.888-.443a.197.197 0 01.163-.005l1.1.455c.054.022.114.02.165-.006l.85-.436a.197.197 0 01.184.002l.777.422c.06.033.134.032.194-.003l.39-.23a.197.197 0 01.29.22l-.084.328H10.439l-.09-.295z"
            clipRule="evenodd"
          />
          <Path
            fill="red"
            d="M14.422 14.138v1c-.844 0-1.441-.518-1.732-1.44l-.023-.15V9.446h1v4.022c.167.48.401.67.755.67zm2.77 0v1c.844 0 1.442-.518 1.732-1.44l.023-.15V9.446h-1v4.022c-.166.48-.4.67-.755.67z"
          />
          <Path
            fill="red"
            fillRule="evenodd"
            d="M16.725 6.909s-1.66-.434-1.66.666v3.462L17 11.61V8.78s-.967-.59-.967-1.052c0-.463.692-.82.692-.82z"
            clipRule="evenodd"
          />
          <Path
            stroke="#000"
            d="M13.934 12.89l.63-.805m-.055.779l-.604-.81m.934.836l.63-.805m-.055.779l-.605-.81m.895.836l.63-.805m-.054.779l-.605-.81m.934.836l.63-.805m-.055.779l-.604-.81m.934.836l.63-.805m-.054.779l-.605-.81"
          />
          <Path
            fill="#FA8F21"
            fillRule="evenodd"
            d="M13.454 7.095l1.197 2.338.148-2.338-.148-.46-1.197.46zm-.6 1.995l-.861-.914.862-1.028 1.812 2.898v.736l-.871-.736V9.09h-.941zm-1.897.705l1.572.753.123-1.164-1.31-1.119-.386 1.53zm1.652 1.93l-2.07-.211v-1.46l2.07.797v.875zm-2.125 1.434l-.246-1.24 2.332.115v1.125h-2.086zm3.283-2.039v-.7l.872.7-.094.37-.778-.37zm8.114.798l-.246 1.24H19.55v-1.124l2.332-.116zm-2.37-.192l2.068-.212v-1.46l-2.069.797v.875zm1.651-1.931l-1.572.753-.123-1.164 1.31-1.119.385 1.53zm-1.898-.705l.862-.914-.862-1.028-1.813 2.898v.736l.872-.736V9.09h.94zm-.6-1.995l-1.197 2.338-.147-2.338.148-.46 1.196.46zm-.312 4.025v-.7l-.873.7.095.37.778-.37z"
            clipRule="evenodd"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgPf;
