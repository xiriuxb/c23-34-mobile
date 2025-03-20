import HeaderRegister from "@/components/auth/HeaderRegister";
import { ThemedView } from "@/components/ThemedView";
import { router, Slot } from "expo-router";
import { View } from "react-native";
import { useLastRouteSegment } from "@/hooks/useLastRouteSegment";
import { useCallback } from "react";
export default function RegisterLayout() {
  const lastSegment = useLastRouteSegment();

  const handleBack = useCallback(() => {
    if (lastSegment === "confirm-mail") {
      router.dismissAll();
      router.replace("/auth/login");
      return;
    }
    router.back();
  }, [lastSegment]);

  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 15,
      }}
    >
      <HeaderRegister handleBack={handleBack} />
      <View style={{ flex: 1 }}>
        <Slot />
      </View>
    </ThemedView>
  );
}
