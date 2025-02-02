import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TouchableOutlineIncon from "@/components/TouchableOutlineIcon";
import { IconSymbol } from "@/components/ui/IconSymbol";
import MySwitch from "@/components/ui/MySwitch";
import { ColorsBase } from "@/constants/Colors";
import fontStyles from "@/styles/fontStyles";
import { router } from "expo-router";
import { SFSymbol } from "expo-symbols";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function UserSettings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledAutoPay, setIsEnabledAutoPay] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitchAutoPay = () =>
    setIsEnabledAutoPay((previousState) => !previousState);
  return (
    <ThemedView style={{ height: "100%", width: "100%", alignItems: "center" }}>
      <View style={{ gap: 40, flex: 1, width: "100%", maxWidth: 700 }}>
        <SettingGroup title="Configuración de cuenta" icon="person.2">
          <TouchableOutlineIncon title="Información Personal" onPress={()=>router.push("/dashboard/user/personal-info")}/>
        </SettingGroup>
        <SettingGroup
          title="Pagos y Facturación"
          icon="creditcard.trianglebadge.exclamationmark"
        >
          <View style={baseStyle.toggleOption}>
            <ThemedText>Auto-Pago</ThemedText>
            <MySwitch
              value={isEnabledAutoPay}
              onValueChange={toggleSwitchAutoPay}
            />
          </View>
        </SettingGroup>
        <SettingGroup title="Notificaciones" icon="checkmark.message">
          <View style={baseStyle.toggleOption}>
            <ThemedText>Recordatorio de pagos</ThemedText>
            <MySwitch value={isEnabled} onValueChange={toggleSwitch} />
          </View>
        </SettingGroup>
        <SettingGroup title="Ayuda & Soporte" icon="person.2">
          <TouchableOutlineIncon title="Contactar Soporte" onPress={()=>router.push("/dashboard/user/support")}></TouchableOutlineIncon>
          <TouchableOutlineIncon title="Preguntas Frecuentes"></TouchableOutlineIncon>
        </SettingGroup>
      </View>
    </ThemedView>
  );
}

const baseStyle = StyleSheet.create({
  toggleOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

function SettingGroup({
  title,
  icon,
  children,
}: {
  title: string;
  icon: SFSymbol;
  children: React.ReactNode;
}) {
  return (
    <View style={{ gap: 16, width: "100%" }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <IconSymbol name={icon} color={ColorsBase.cyan500} size={24} />
        <ThemedText style={[fontStyles.bold]}>{title}</ThemedText>
      </View>
      <View style={{ gap: 8 }}>{children}</View>
    </View>
  );
}
