import SimpleButton from "@/components/auth/SimpleButton";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import UserProfileAvatar from "@/components/user/UserProfileAvatar";
import { ColorsBase } from "@/constants/Colors";
import { useAuthStore } from "@/hooks/useAuthStore";
import fontStyles from "@/styles/fontStyles";
import { StyleSheet, View } from "react-native";

const userExample = {
  userName: "User",
  userLastname: "Apellido",
  userEmail: "email@example.com",
  userPhone: "52948343844",
  userDni: "xxxxxxxxx",
};

export default function UserProfile() {
  const {startLogout} = useAuthStore()
  return (
    <ThemedView style={baseStyle.viewContainer}>
      <UserProfileAvatar
        userName={`${userExample.userName} ${userExample.userLastname}`}
      />
      <View style={baseStyle.viewBody}>
        <View style={baseStyle.tableData}>
          <DataRow
            label="Nombre"
            message={`${userExample.userName} ${userExample.userLastname}`}
          />
          <DataRow label="Email" message={userExample.userEmail} />
          <DataRow label="Teléfono" message={userExample.userPhone} />
          <DataRow label="DNI" message={userExample.userDni} />
        </View>
        <SimpleButton onPress={()=>startLogout()} style={baseStyle.closeButton}>
          <ThemedText
            style={[fontStyles.bold, { color: ColorsBase.neutral50 }]}
          >
            Cerrar Sesión
          </ThemedText>
          <IconSymbol
            name="arrow.right.square"
            color={ColorsBase.neutral50}
          ></IconSymbol>
        </SimpleButton>
      </View>
    </ThemedView>
  );
}

function DataRow({ label, message }: { label: string; message: string }) {
  return (
    <View style={baseStyle.dataRow}>
      <ThemedText style={baseStyle.rowLabel}>{label}</ThemedText>
      <ThemedText style={fontStyles.bold}>{message}</ThemedText>
    </View>
  );
}
const baseStyle = StyleSheet.create({
  viewContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  viewBody: {
    width: "100%",
    flex: 1,
    paddingTop: 40,
    maxWidth: 400,
    maxHeight: 1000,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tableData: {
    width: "100%",
    gap: 16,
  },
  dataRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  rowLabel: {
    color: ColorsBase.neutral600,
  },
  closeButton: {
    width: "100%",
    backgroundColor: ColorsBase.red300,
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: ColorsBase.red400,
  },
});
