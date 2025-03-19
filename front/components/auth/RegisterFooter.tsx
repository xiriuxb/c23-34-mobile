import { View } from "react-native";
import { useContext } from "react";
import { router, Href } from "expo-router";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useLastRouteSegment } from "@/hooks/useLastRouteSegment";
import { useAuthStore } from "@/hooks/useAuthStore";
import RegisterUserContext from "@/contexts/RegisterUserContext";
import SimpleButton from "./SimpleButton";
import RegisterDots from "./RegisterDots";

const nextRoutes: Record<string, Href> = {
  personal: "/auth/(register)/register/reg-data",
  "reg-data": "/auth/confirm-mail",
};

export default function RegisterFooter() {
  const { control, getValues } = useContext(RegisterUserContext);
  const lastSegment = useLastRouteSegment();
  const { startRegister } = useAuthStore();

  const handleNext = async () => {
    if (lastSegment == "personal") {
      router.push(nextRoutes[lastSegment]);
      return;
    }
    await startRegister(getValues!());
  };

  return (
    <View
      style={{
        maxWidth: 500,
        alignSelf: "center",
        width: "100%",
      }}
    >
      <RegisterDots currentUri={lastSegment!} uris={["personal", "reg-data"]} />
      <SimpleButton
        onPress={control!.handleSubmit(handleNext)}
        style={{ backgroundColor: Colors.light.text, borderColor: Colors.light.text }}
      >
        <ThemedText style={{ fontWeight: 700, color: Colors.dark.tint }}>
          {lastSegment == "personal" ? "Siguiente" : "Finalizar"}
        </ThemedText>
      </SimpleButton>
    </View>
  );
} 