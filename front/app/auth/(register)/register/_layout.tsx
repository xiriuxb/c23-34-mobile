import { Slot } from "expo-router";
import { View } from "react-native";
import RegisterUserProvider from "@/contexts/RegisterUserProvider";
import { ThemedView } from "@/components/ThemedView";
import RegisterFooter from "@/components/auth/RegisterFooter";

export default function RegisterRegLayout() {
  return (
    <ThemedView style={{ flex: 1, height: "100%" }}>
      <RegisterUserProvider>
        <View style={{ maxHeight: 900, flex: 1 }}>
          <Slot />
          <RegisterFooter />
        </View>
      </RegisterUserProvider>
    </ThemedView>
  );
}
