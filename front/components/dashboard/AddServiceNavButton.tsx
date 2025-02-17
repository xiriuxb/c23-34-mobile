import { ColorsBase } from "@/constants/Colors";
import { router } from "expo-router";
import { View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { ThemedText } from "../ThemedText";
import SimpleButton from "../auth/SimpleButton";

export default function AddServiceNavButton() {
  return (
    <SimpleButton
      onPress={() => router.push("/dashboard/home/services/list")}
      style={{
        borderColor: ColorsBase.cyan400,
        borderWidth: 1,
        borderRadius: 32,
        backgroundColor: "#ffffff",
        paddingVertical: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          gap: 8,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            right: 5,
          }}
        >
          <IconSymbol
            name="plus.app"
            color={ColorsBase.cyan400}
            size={20}
            style={{ right: -5 }}
          />
          <IconSymbol name="house.slash" color={ColorsBase.cyan400} size={30} />
        </View>
        <View>
          <ThemedText
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: ColorsBase.cyan400,
            }}
          >
            Agregar Servicio
          </ThemedText>
        </View>
      </View>
    </SimpleButton>
  );
}
