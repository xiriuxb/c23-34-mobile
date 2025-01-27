import authStyles from "@/components/auth/authStyles";
import RegisterFormData from "@/components/auth/RegisterFormData";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { ScrollView, View } from "react-native";

export default function RegisterView() {
  return (
    <ThemedView style={{ height: "100%" }}>
      <View style={authStyles.regTitleContainer}>
        <IconSymbol name="person.2" color={ColorsBase.cyan400} size={24} />
        <ThemedText style={authStyles.regTitle}>
          Información de registro
        </ThemedText>
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <RegisterFormData />
      </ScrollView>
    </ThemedView>
  );
}
