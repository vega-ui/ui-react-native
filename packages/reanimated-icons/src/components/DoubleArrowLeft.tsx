import * as React from 'react';
import { type SvgProps } from 'react-native-svg';
import { useAnimatedProps } from 'react-native-reanimated';
import { AnimatedSvg, AnimatedPath } from '../animatedFactory';
export interface AnimatedSvgProps extends SvgProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  svgProps?: Partial<React.ComponentProps<typeof AnimatedSvg>>;
  pathProps?: Partial<React.ComponentProps<typeof AnimatedPath>>;
  animatedProps?: ReturnType<typeof useAnimatedProps>;
  ref?: React.Ref<React.Component<SvgProps>>;
}
const SvgDoubleArrowLeft: React.FC<AnimatedSvgProps> = ({
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  pathProps,
  animatedProps,
  ref,
  ...props
}) => (
  <AnimatedSvg
    viewBox='0 0 24 24'
    fill='none'
    animatedProps={animatedProps}
    ref={ref}
    width={size}
    height={size}
    stroke={color}
    strokeWidth={strokeWidth}
    {...props}
  >
    <AnimatedPath
      d='M9 16L5 12L9 8'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d='M5 16L1 12L5 8'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      animatedProps={animatedProps}
      {...pathProps}
    />
    <AnimatedPath
      d='M22 12L6 12'
      stroke='currentColor'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
      animatedProps={animatedProps}
      {...pathProps}
    />
  </AnimatedSvg>
);
export default SvgDoubleArrowLeft;
