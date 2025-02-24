import RegisterUserContext from "@/contexts/RegisterUserContext";
import RegisterDot from "@/components/auth/RegisterDot";
import SimpleButton from "@/components/auth/SimpleButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Href, router, Slot } from "expo-router";
import { useContext } from "react";
import { View } from "react-native";
import { useLastRouteSegment } from "@/hooks/useLastRouteSegment";
import { apiRegister } from "@/api/auth.service";
import { useAuthStore } from "@/hooks/useAuthStore";

const nextRoutes: Record<string, Href> = {
  personal: "/auth/(register)/register/reg-data",
  "reg-data": "/auth/confirm-mail",
};

export default function RegisterRegLayout() {
  return (
    <ThemedView style={{ flex: 1, height: "100%" }}>
      <View style={{ maxHeight: 900, flex: 1 }}>
        <Slot />
        <RegFooter />
      </View>
    </ThemedView>
  );
}

function RegFooter() {
  const { control, getValues } = useContext(RegisterUserContext);
  const lastSegment = useLastRouteSegment();

  const {startRegister} = useAuthStore();

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
        style={{ backgroundColor: Colors.light.text, width: "100%" }}
      >
        <ThemedText style={{ fontWeight: 700, color: Colors.dark.tint }}>
          {lastSegment == "personal" ? "Siguiente" : "Finalizar"}
        </ThemedText>
      </SimpleButton>
    </View>
  );
}

function RegisterDots({
  currentUri,
  uris,
}: {
  currentUri: string;
  uris: string[];
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        paddingBlock: 12,
      }}
    >
      {uris.map((uri: string) => {
        return <RegisterDot key={uri} isAnimated={currentUri === uri} />;
      })}
    </View>
  );
}
