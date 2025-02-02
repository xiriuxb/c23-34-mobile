import authStyles from "@/components/auth/authStyles";
import MyInputText from "@/components/auth/MyInputText";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";

const userExample = {
  userName: "User",
  userLastname: "Apellido",
  userEmail: "email@example.com",
  userPhone: "52948343844",
  userDni: "xxxxxxxxx",
};

export default function PersonalInfoView() {
  const { control } = useForm({ values: userExample });
  return (
    <ThemedView style={baseStyle.viewContainer}>
      <View style={authStyles.regTitleContainer}>
        <IconSymbol name="person.2" color={ColorsBase.cyan500} />
        <ThemedText type="subtitle">Información Personal</ThemedText>
      </View>
      <View style={{ height: "100%", gap: 20, paddingVertical: 20, width:700 }}>
        <MyInputText
          readOnly
          name="userName"
          control={control}
          iconName="person.2"
          iconAction="pencil"
        />
        <MyInputText
          readOnly
          name="userLastname"
          control={control}
          iconName="person.2"
          iconAction="pencil"
        />
        <MyInputText
          readOnly
          name="userEmail"
          control={control}
          iconName="mail"
          iconAction="pencil"
        />
        <MyInputText
          readOnly
          name="userPhone"
          control={control}
          iconName="phone.fill"
          iconAction="pencil"
        />
        <MyInputText
          readOnly
          name="userDni"
          control={control}
          iconName="key.card"
          iconAction="pencil"
        />
      </View>
    </ThemedView>
  );
}

const baseStyle = StyleSheet.create({
  viewContainer: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});