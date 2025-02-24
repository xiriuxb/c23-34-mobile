import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { Slot } from "expo-router";
import { TouchableOpacity, View } from "react-native";

export default function ServicesLayout() {
  return (
    <ThemedView style={{ padding: 15, gap:16 }}>
      <TouchableOpacity style={{ maxWidth: 26 }}>
        <IconSymbol
          name="arrow.backward"
          color={ColorsBase.cyan400}
          size={24}
        />
      </TouchableOpacity>
      <View style={{ maxWidth: 900, gap: 16, width: "100%", alignSelf:"center", height:"100%" }}>
        <Slot />
      </View>
    </ThemedView>
  );
}
