import authStyles from "@/components/auth/authStyles";
import RegisterFormPersonal from "@/components/auth/RegisterFormPersonal";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { ScrollView, View } from "react-native";

export default function RegisterPersonalView() {
  return (
    <ThemedView style={{ flex:1 }}>
      <View style={authStyles.regTitleContainer}>
        <IconSymbol name="person.2" color={ColorsBase.cyan400} size={24} />
        <ThemedText style={authStyles.regTitle}>
          Información personal
        </ThemedText>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="always"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <RegisterFormPersonal />
      </ScrollView>
    </ThemedView>
  );
}
