import { ColorsBase } from "@/constants/Colors";
import { useEffect } from "react";
import Animated, {
  Easing,
  EasingFunction,
  interpolateColor,
  SharedValue,
  useAnimatedProps,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import Svg, { Path, SvgProps } from "react-native-svg";

const AnimatedPath = Animated.createAnimatedComponent(Path);

const colorsLight = [
  ColorsBase.cyan200,
  ColorsBase.blue200,
  ColorsBase.red200,
  ColorsBase.yellow200,
  ColorsBase.cyan200,
];

const colorsDark = [
  ColorsBase.cyan600,
  ColorsBase.blue600,
  ColorsBase.red600,
  ColorsBase.yellow600,
  ColorsBase.cyan600,
];

const colorsNormal = [
  ColorsBase.cyan400,
  ColorsBase.blue400,
  ColorsBase.red400,
  ColorsBase.yellow400,
  ColorsBase.cyan400,
];

export type IconFullSvgProps = SvgProps & {
  size?: number;
  top?: number;
  left?: number;
  colors?: {
    light: string;
    normal: string;
    dark: string;
  };
  sharedValue?: SharedValue<number>;
  easingFunc?: EasingFunction;
  duration?: number;
};

const animatedFill = (sv: SharedValue<number>, colorsArray: string[]) => {
  return useAnimatedProps(() => {
    const fillColor = interpolateColor(
      sv.value,
      colorsArray.map((_, i) => i),
      colorsArray
    );
    return {
      fill: fillColor,
    };
  });
};

const IconAppSvgAnimated = ({
  size = 64,
  top = 0,
  left = 0,
  colors = {
    light: ColorsBase.cyan200,
    normal: ColorsBase.cyan400,
    dark: ColorsBase.cyan600,
  },
  sharedValue,
  easingFunc = Easing.inOut(Easing.bezierFn(0.29, -0.15, 0.62, 0.81)),
  duration = 4000,
  ...rest
}: IconFullSvgProps) => {
  const fillProgress = useSharedValue(sharedValue ? sharedValue.value : 0);

  const animatedPropsLight = animatedFill(fillProgress, colorsLight);
  const animatedPropsNormal = animatedFill(fillProgress, colorsNormal);
  const animatedPropsDark = animatedFill(fillProgress, colorsDark);

  useEffect(() => {
    fillProgress.value = withRepeat(
      withTiming(colorsLight.length - 1, {
        duration: duration,
        easing: easingFunc,
      }),
      -1,
      false
    );
  }, []);

  return (
    <Svg width={size} height={size} viewBox="0 0 64 64" fill="none" {...rest}>
      <AnimatedPath
        d="M0 16C0 7.16344 7.16344 0 16 0H32V42H0V16Z"
        animatedProps={animatedPropsNormal}
      />
      <AnimatedPath
        d="M32 0H43C54.598 0 64 9.40202 64 21C64 32.598 54.598 42 43 42H32V0Z"
        animatedProps={animatedPropsDark}
      />
      <AnimatedPath
        d="M0 42H32V48C32 56.8366 24.8366 64 16 64C7.16344 64 0 56.8366 0 48V42Z"
        animatedProps={animatedPropsLight}
      />
    </Svg>
  );
};
export default IconAppSvgAnimated;
