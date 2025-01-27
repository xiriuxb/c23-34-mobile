import RegisterUserContext from "@/app/contexts/RegisterUserContext";
import RegisterDot from "@/components/auth/RegisterDot";
import SimpleButton from "@/components/auth/SimpleButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { Href, router, Stack, usePathname } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { View } from "react-native";

const nextRoutes: Record<string, Href> = {
  personal: "/auth/(register)/register/data",
  data: "/auth/confirm-mail",
};

export default function RegisterLayout() {
  const { control, getValues } = useContext(RegisterUserContext);
  const segments = usePathname();
  const [path, setPath] = useState("personal");

  useEffect(() => {
    setPath(segments.split("/").pop()!);
  }, [segments]);

  const handleNext = () => {
    if (path === "data") {
      //Submit form
      console.log(getValues!())
      router.replace(nextRoutes[path]);
      return;
    }
    router.push(nextRoutes[path]);
  };

  return (
    <ThemedView style={{ flex: 1, height: "100%" }}>
      <View style={{ flex: 1, maxHeight: 900 }}>
        <Stack>
          <Stack.Screen name="personal" options={{ headerShown: false }} />
          <Stack.Screen name="data" options={{ headerShown: false }} />
        </Stack>
        <View
          style={{
            maxWidth: 500,
            alignSelf: "center",
            width: "100%",
          }}
        >
          <RegisterDots currentUri={path} uris={["personal", "data"]} />
          <SimpleButton
            onPress={control!.handleSubmit(handleNext)}
            style={{ backgroundColor: Colors.light.text, width: "100%" }}
          >
            <ThemedText style={{ fontWeight: 700, color: Colors.dark.tint }}>
              {path === "personal" ? "Siguiente" : "Finalizar"}
            </ThemedText>
          </SimpleButton>
        </View>
      </View>
    </ThemedView>
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
