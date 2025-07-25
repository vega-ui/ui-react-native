import * as React from 'react';
import Svg, { Mask, Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
const SvgMe = (props: SvgProps) => (
  <Svg fill="none" viewBox="0 0 32 24" width={24} height={24} {...props}>
    <Mask
      id="ME_svg__a"
      width={32}
      height={24}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
    >
      <Path fill="#fff" d="M0 0h32v24H0z" />
    </Mask>
    <G mask="url(#ME_svg__a)">
      <Path
        fill="#E8AA00"
        fillRule="evenodd"
        d="M0 0h32v24H0V0z"
        clipRule="evenodd"
      />
      <Path
        fill="#C51918"
        fillRule="evenodd"
        d="M4 4h24v16H4V4z"
        clipRule="evenodd"
      />
      <Mask
        id="ME_svg__b"
        width={24}
        height={16}
        x={4}
        y={4}
        maskUnits="userSpaceOnUse"
      >
        <Path
          fill="#fff"
          fillRule="evenodd"
          d="M4 4h24v16H4V4z"
          clipRule="evenodd"
        />
      </Mask>
      <G mask="url(#ME_svg__b)">
        <Path
          fill="#1E5E91"
          fillRule="evenodd"
          d="M20.23 15.751a.748.748 0 00.74-.756.748.748 0 00-.74-.757.748.748 0 00-.738.757c0 .418.33.756.739.756z"
          clipRule="evenodd"
        />
        <Path
          fill="#F6C540"
          fillRule="evenodd"
          d="M10.628 12.332c-1.938-2.252.839-6.159.839-6.159s.415 2.334 1.951 3.904c0 .111-.145.276-.292.443a2.172 2.172 0 00-.261.334c-.135.246.328.386.553.386.101 0 .157.146.207.278.062.162.116.303.235.125.216-.324-.216-1.034-.216-1.034l.683-.721.232-.466h-.232v-.48l-.162.133s-.177-.43-.521-.43c-.344 0-.45-.195-.45-.195h.45c.225 0-.036-.3-.226-.455-.085-.07-.214-.046-.33-.024-.143.027-.267.05-.267-.11 0-.175.136-.198.293-.225a.72.72 0 00.304-.1c.147-.106.345-.074.56-.039.114.02.232.038.35.038h.556c.201 0-.325.326-.325.326l.325.29.485.495-.242.144.5.484s-.17.276 0 .276c.07 0 .115.058.145.125.03-.067.076-.125.146-.125.17 0 0-.276 0-.276l.5-.484-.242-.144.485-.495.325-.29s-.527-.325-.326-.325h.557c.118 0 .236-.02.35-.039.214-.035.413-.067.56.038.088.064.2.084.303.101.158.027.294.05.294.225 0 .16-.124.137-.267.11-.117-.022-.245-.046-.33.024-.19.156-.452.455-.226.455h.45s-.106.196-.45.196c-.344 0-.522.429-.522.429l-.162-.133v.48h-.23l.23.466.684.72s-.432.711-.216 1.035c.12.178.173.037.235-.125.05-.132.106-.278.207-.278.224 0 .688-.14.553-.386-.055-.1-.159-.218-.261-.334-.147-.167-.292-.332-.292-.443 1.536-1.57 1.951-3.904 1.951-3.904s2.777 3.907.84 6.159c-1.938 2.251-3.36 1.572-3.36 1.572l.793.713-.224.194h.661l-.243.163.18.079.189.082s-.511.377 0 .377c.08 0 .166-.003.254-.005.097-.003.196-.006.295-.006.027 0-.033-.147-.092-.293-.059-.144-.117-.287-.09-.286.055.002.163.133.272.265.087.105.174.21.235.25.039.026.19-.026.332-.075.12-.042.23-.08.258-.066.12.06.089.181.06.297-.007.03-.015.059-.02.087-.004.025.149-.074.309-.178.168-.109.345-.224.358-.206l.01.01c.057.07.149.18-.531.705 0 .1.003.183.006.25.01.214.012.27-.133.27a.925.925 0 00-.26.069c-.27.095-.633.224-.896-.07a175.79 175.79 0 00-.93-1.019v.3l-.666-.675-.128.376-.896-1.03-.243.135s.826 2.277 1.267 2.293c.22.008-.114.221-.555.503-.447.285-1.004.642-1.212.928-.061.085-.11-.045-.146-.327-.036.282-.084.412-.146.327-.207-.286-.764-.643-1.211-.928-.441-.282-.775-.495-.555-.503.441-.016 1.267-2.293 1.267-2.293l-.243-.135-.896 1.03-.128-.377-.667.677v-.3s-.562.61-.929 1.018c-.263.294-.627.165-.896.07a.907.907 0 00-.26-.07c-.23 0-.308-.322 0-.718.26-.333.8-.318 1.269-.305.088.002.173.005.254.005.511 0 0-.377 0-.377l.19-.082.179-.079-.244-.163h.662l-.225-.194.795-.713s-1.423.68-3.36-1.572z"
          clipRule="evenodd"
        />
        <Path
          fill="#F6C540"
          fillRule="evenodd"
          d="M12.433 17.03l-.875-1.534s-1.144-2.638-1.144-2.958c0-.32-.46-1.269-.46-.994v.994l1.93 4.349v.342h.26l.289-.199z"
          clipRule="evenodd"
        />
        <Path
          fill="#F6C540"
          d="M19.442 14.965l.133-.442 1.626.49-.133.442-1.626-.49z"
        />
        <Path
          fill="#F6C540"
          d="M20.308 14.16l.44.144-.43 1.378-.44-.144.43-1.378z"
        />
        <Path
          fill="#F6C540"
          fillRule="evenodd"
          d="M20.717 13.711l-.094-.021-.039.152-.173-.043-.022.093.172.042-.044.173.095.022.043-.172.171.042.021-.093-.169-.041.04-.154zm-5.023-8.489l.048.166h.144l.048-.166c.12.037.229.078.327.124l.003-.037c.772.07 1.172.394 1.13.962-.036.47-.274.717-.67.71v.351s-.647.248-.97.248c-.323 0-.97-.248-.97-.248v-.357c-.326-.04-.521-.282-.553-.704-.043-.568.357-.891 1.13-.962l.003.038c.098-.046.209-.088.33-.125zm-.817 1.445a6.14 6.14 0 00-.086.025c-.177-.034-.264-.175-.284-.441-.02-.27.106-.456.404-.564-.203.26-.218.59-.034.98zm.275-.072c.163-.04.352-.078.503-.091v-.971c-.62.217-.77.55-.503 1.062zm.78-.083c.207.028.46.09.623.134l-.082-.045c.276-.527.116-.864-.541-1.082v.993zm.787-.823c.207.267.217.608.016 1.01.244.004.359-.137.382-.448.02-.267-.104-.454-.398-.562z"
          clipRule="evenodd"
        />
        <Path
          fill="#3D58DB"
          fillRule="evenodd"
          d="M15.754 5.52a.323.323 0 100-.647.323.323 0 000 .646z"
          clipRule="evenodd"
        />
        <Path
          fill="#F6C540"
          fillRule="evenodd"
          d="M15.799 4.498l-.097.002v.157h-.18l.002.096h.177v.178l.096-.002.001-.177h.176l-.002-.096h-.174v-.158z"
          clipRule="evenodd"
        />
        <Path
          fill="#1E5E91"
          fillRule="evenodd"
          d="M13.954 10.36s1.138-.215 1.754-.215c.553 0 1.754.215 1.754.215 0 1.36.382 2.192 0 3.121-.383.929-1.319.482-1.742 1.371-.54-.843-1.271-.379-1.766-1.58-.495-1.2.3-1.753 0-2.912z"
          clipRule="evenodd"
        />
        <Mask
          id="ME_svg__c"
          width={5}
          height={5}
          x={13}
          y={10}
          maskUnits="userSpaceOnUse"
        >
          <Path
            fill="#fff"
            fillRule="evenodd"
            d="M13.954 10.36s1.138-.215 1.754-.215c.553 0 1.754.215 1.754.215 0 1.36.382 2.192 0 3.121-.383.929-1.319.482-1.742 1.371-.54-.843-1.271-.379-1.766-1.58-.495-1.2.3-1.753 0-2.912z"
            clipRule="evenodd"
          />
        </Mask>
        <G mask="url(#ME_svg__c)">
          <Path fill="#5EAA22" d="M13.954 13.197h3.508V14.9h-3.508z" />
          <Path
            fill="#F6C540"
            fillRule="evenodd"
            d="M14.991 11.03c-.134-.285.704-.318.704-.318s.181.318 0 .77c-.131.33.088.3.39.26a2.75 2.75 0 01.362-.033c.188 0 .287-.013.37.018.114.043.196.172.44.547.113.171.108.284.04.352.006.174-.183.318-.534.41l-.046-.183c.186-.049.3-.095.352-.147-.264.016-.622-.114-.622-.282 0-.248-.845-.196-1.353-.164-.13.008-.237.014-.304.014-.296 0-.069-.361.138-.69l.063-.102c.106-.171.14-.215.132-.249-.008-.035-.063-.058-.132-.203zm2.011-.044c-.506-.08-.79-.003-.79.28 0 .27.27.387.762.385l.05.019a.766.766 0 01-.067.027l.062.179c.31-.112.31-.312-.004-.41L17 11.462h-.014c-.41.003-.59-.073-.59-.196 0-.11.171-.158.577-.094l.028-.186z"
            clipRule="evenodd"
          />
        </G>
      </G>
    </G>
  </Svg>
);
export default SvgMe;
