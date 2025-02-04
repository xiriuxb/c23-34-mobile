import IconPlane from "@/assets/svgs/icon-plane";
import authStyles from "@/components/auth/authStyles";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { scaleMin, windowHeight, windowWidth } from "@/constants/Scale";
import RegisterUserContext from "@/contexts/RegisterUserContext";
import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import Animated, { ZoomIn, Easing, Keyframe } from "react-native-reanimated";

const SAMPLE_MAIL = "nombre@email.com";

const keyframePlanes = new Keyframe({
  from: {
    transform: [
      { translateX: -windowWidth },
      { translateY: windowHeight },
      { rotate: "-45deg" },
    ],
  },
  to: {
    transform: [{ translateX: 0 }, { translateY: 0 }, { rotate: "-45deg" }],
  },
});

export default function ConfirmEmail() {

  const {getValues} = useContext(RegisterUserContext);
  return (
    <ThemedView style={{ height: "100%", overflow: "hidden" }}>
      <View style={{ gap: 20 }}>
        <View style={baseStyle.titleContainer}>
          <IconSymbol name="person.2" color={ColorsBase.cyan400} size={24} />
          <ThemedText style={authStyles.regTitle}>
            ¡Confirma tu correo!
          </ThemedText>
        </View>
        <ThemedText
          style={{
            textAlign: "center",
            fontWeight: 600,
            color: ColorsBase.neutral600,
          }}
        >
          Hemos enviado un correo a <ThemedText>{getValues!("userEmail")}</ThemedText> con
          un enlace para confirmar la cuenta.
        </ThemedText>
      </View>
      <View style={baseStyle.animationsContainer}>
        <Animated.View
          style={baseStyle.circle}
          entering={ZoomIn.duration(1000).easing(Easing.inOut(Easing.ease))}
        ></Animated.View>
        <Animated.View
          entering={keyframePlanes.duration(1000)}
          style={{
            height: 180 * scaleMin,
            width: 200 * scaleMin,
          }}
        >
          <IconPlane style={{ left: 90 * scaleMin, position: "absolute" }} />
          <IconPlane
            style={{
              top: 90 * scaleMin,
              position: "absolute",
            }}
            height={68}
          />
          <IconPlane
            style={{
              top: 110 * scaleMin,
              left: 90 * scaleMin,
              position: "absolute",
            }}
            height={40}
          />
        </Animated.View>
      </View>
    </ThemedView>
  );
}

const baseStyle = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },
  animationsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: ColorsBase.blue100,
    width: 192 * scaleMin,
    height: 192 * scaleMin,
    borderRadius: "100%",
    position: "absolute",
  },
});
