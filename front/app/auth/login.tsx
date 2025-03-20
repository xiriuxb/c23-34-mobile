import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ColorsBase } from "@/constants/Colors";
import { ScrollView, StyleSheet, View } from "react-native";
import ThemedLink from "@/components/auth/ThemedLink";
import LoginFormSection from "@/components/auth/LoginFormSection";
import LoginHeader from "@/components/auth/LoginHeader";

export default function LoginView() {
  return (
    <ThemedView style={{ height: "100%", width: "100%" }}>
      <LoginHeader />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ maxHeight: 900 }}
        contentContainerStyle={baseStyle.scrollContainer}
      >
        <View>
          <ThemedText style={baseStyle.title}>Ingresa a tu cuenta</ThemedText>
          <ThemedText style={baseStyle.subtitle}>
            ¡Y paga tus servicios cuando quieras!
          </ThemedText>
        </View>
        <LoginFormSection />
        <View style={{ alignItems: "center", gap: 16 }}>
          <ThemedText>
            ¿No Tienes Cuenta?{" "}
            <ThemedLink href={"/auth/(register)/register/personal"}>
              ¡Créala aquí!
            </ThemedLink>
          </ThemedText>
          <ThemedText>
            <ThemedLink href={"/"}>¿Olvidaste tu Contraseña?</ThemedLink>
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

export const baseStyle = StyleSheet.create({
  scrollContainer: {
    alignItems: "center",
    flex: 1,
    padding: 15,
    justifyContent: "space-around",
  },

  title: {
    fontWeight: 700,
    fontSize: 32,
    lineHeight: 38,
  },
  subtitle: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: ColorsBase.neutral500,
  },
});
