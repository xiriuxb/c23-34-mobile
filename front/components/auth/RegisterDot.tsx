import { ColorsBase } from "@/constants/Colors";
import { useEffect } from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

export default function RegisterDot({
  isAnimated = false,
  initialWidth = 10,
  finalWidth = 24,
}: {
  isAnimated?: boolean;
  initialWidth?: number;
  finalWidth?: number;
}) {
  const widthx = useSharedValue(initialWidth);
  const animWidth = useAnimatedStyle(() => {
    const width = withTiming(widthx.value, { duration: 300 });
    const backgroundColor = interpolateColor(
      widthx.value,
      [initialWidth, finalWidth],
      [ColorsBase.cyan200, ColorsBase.cyan400]
    );
    return {
      width,
      backgroundColor,
    };
  });

  useEffect(() => {
    widthx.value = isAnimated ? finalWidth : initialWidth;
  }, [isAnimated]);

  return (
    <Animated.View
      style={[
        animWidth,
        {
          height: initialWidth,
          borderRadius: 24,
        },
      ]}
    ></Animated.View>
  );
}
