import IconFullSvg from "@/assets/svgs/app-icon-full";
import IconElectricity from "@/assets/svgs/icon-electricity";
import IconFlame from "@/assets/svgs/icon-flame";
import IconWater from "@/assets/svgs/icon-water";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ColorsBase } from "@/constants/Colors";
import { scaleHeight, scaleWidth } from "@/constants/Scale";
import { router } from "expo-router";
import { useEffect } from "react";
import { Platform, StyleSheet, ViewProps } from "react-native";
import Animated, { Easing, SlideInDown } from "react-native-reanimated";

export default function Welocome() {
  useEffect(() => {
    setTimeout(
      () => {
        router.replace("/auth/login");
      },
      Platform.OS == "web" ? 3000 : 2500
    );
  }, []);
  return (
    <ThemedView style={styles.container}>
      <AnimatedContainer style={{ position: undefined }}>
        <IconFullSvg />
      </AnimatedContainer>
      <AnimatedContainer delay={80} style={{ position: undefined }}>
        <ThemedText style={styles.slogan}>
          ¡Paga fácil, vive tranquilo!
        </ThemedText>
      </AnimatedContainer>
      {/* Bottom icons */}
      <AnimatedContainer delay={1000} leftUnscaled={-15} topUnscaled={377}>
        <IconFlame
          scale={1}
          bgColor={ColorsBase.cyan200}
          color={ColorsBase.cyan100}
          style={{
            transform: [{ rotate: "15deg" }],
          }}
        />
      </AnimatedContainer>
      <AnimatedContainer delay={1100} leftUnscaled={96} topUnscaled={465}>
        <IconWater
          scale={1}
          bgColor={ColorsBase.cyan300}
          color={ColorsBase.cyan100}
          style={{
            transform: [{ rotate: "15deg" }],
          }}
        />
      </AnimatedContainer>
      <AnimatedContainer delay={1050} leftUnscaled={210} topUnscaled={420}>
        <IconElectricity
          scale={1}
          bgColor={ColorsBase.cyan200}
          color={ColorsBase.cyan100}
          style={{
            transform: [{ rotate: "-15deg" }],
          }}
        />
      </AnimatedContainer>
    </ThemedView>
  );
}

function AnimatedContainer({
  style,
  duration = 1500,
  delay = 0,
  topUnscaled = 0,
  leftUnscaled = 0,
  children,
}: ViewProps & {
  duration?: number;
  delay?: number;
  topUnscaled?: number;
  leftUnscaled?: number;
  children: React.JSX.Element;
}) {
  return (
    <Animated.View
      entering={SlideInDown.duration(duration)
        .delay(delay)
        .easing(Easing.out(Easing.quad))}
      style={[
        {
          position: "absolute",
          top: topUnscaled * scaleHeight,
          left: leftUnscaled * scaleWidth,
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slogan: {
    color: "#00A599",
    fontWeight: 400,
    fontSize: 16 * scaleHeight,
    lineHeight: 19 * scaleHeight,
    paddingTop: 20 * scaleHeight,
  },
});
