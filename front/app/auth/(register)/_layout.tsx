import RegisterUserProvider from "@/app/contexts/RegisterUserProvider";
import HeaderRegister from "@/components/auth/HeaderRegister";
import { ThemedView } from "@/components/ThemedView";
import { Href, router, Stack, usePathname } from "expo-router";
import { useEffect, useState } from "react";
import { View } from "react-native";

const backRoutes: Record<string, Href> = {
  personal: "/auth/login",
  data: "/auth/register/personal",
  "confirm-mail": "/auth/login",
};

export default function RegisterLayout() {
  const segments = usePathname();
  const [path, setPath] = useState("personal");

  useEffect(() => {
    setPath(segments.split("/").pop()!);
  }, [segments]);

  const handleBack = () => {
    router.replace(backRoutes[path]);
  };

  return (
    <RegisterUserProvider>
      <ThemedView
        style={{
          height: "100%",
          width: "100%",
          padding: 15,
        }}
      >
        <HeaderRegister handleBack={handleBack} />
        <View style={{ flex: 1, width: "100%" }}>
          <Stack>
            <Stack.Screen name="register" options={{ headerShown: false }} />
            <Stack.Screen
              name="confirm-mail"
              options={{ headerShown: false }}
            />
          </Stack>
        </View>
      </ThemedView>
    </RegisterUserProvider>
  );
}
