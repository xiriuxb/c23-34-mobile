import IconAppSvgAnimated from "@/assets/svgs/animated-icon-svg";
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { useEffect } from "react";
import Animated, {
  interpolateColor,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const colorsBackend = [
  ColorsBase.cyan50,
  ColorsBase.blue50,
  ColorsBase.red50,
  ColorsBase.yellow50,
  ColorsBase.cyan50,
];

const easingFuncShared = Easing.inOut(Easing.bezierFn(0.29, -0.15, 0.62, 0.81));
const animationDuration = 4000;


export default function LoadingScreen({message}:{message?:string}) {
  const fillProgress = useSharedValue(0);

  const animatedBackground = useAnimatedStyle(() => {
    const fillColor = interpolateColor(
      fillProgress.value,
      colorsBackend.map((_, i) => i),
      colorsBackend
    );
    return {
      backgroundColor: fillColor,
    };
  });

  useEffect(() => {
    fillProgress.value = withRepeat(
      withTiming(colorsBackend.length - 1, {
        duration: animationDuration,
        easing: easingFuncShared,
      }),
      -1,
      false
    );
  }, []);

  return (
    <Animated.View
      style={[
        animatedBackground,
        {
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <IconAppSvgAnimated sharedValue={fillProgress} easingFunc={easingFuncShared} duration={4000} />
      {message&&<ThemedText>{message}</ThemedText>}
    </Animated.View>
  );
}
