import HeaderRegister from "@/components/auth/HeaderRegister";
import { ThemedView } from "@/components/ThemedView";
import { router, Slot } from "expo-router";
import { View } from "react-native";
import { useLastRouteSegment } from "@/hooks/useLastRouteSegment";

export default function RegisterLayout() {

  const lastSegment = useLastRouteSegment();

  const handleBack = () => {
    if(lastSegment==="confirm-mail"){
      router.dismissAll()
      router.replace("/auth/login")
      return;
    }
    router.back()
  };

  return (
      <ThemedView
        style={{
          height: "100%",
          width: "100%",
          padding: 15,
        }}
      >
        <HeaderRegister handleBack={handleBack} />
        <View style={{ flex: 1, width: "100%" }}>
          <Slot />
        </View>
      </ThemedView>
  );
}
