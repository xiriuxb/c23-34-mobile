import { SafeAreaView, View, TextInput } from "react-native";
import MyInputText from "./MyInputText";
import { ThemedText } from "../ThemedText";
import authStyles from "./authStyles";
import { useContext, useRef } from "react";
import RegisterUserContext from "@/contexts/RegisterUserContext";

export default function RegisterFormPersonal() {
  const {control} = useContext(RegisterUserContext);

  const lastNameRef = useRef<TextInput>(null);
  const dniRef = useRef<TextInput>(null);
  return (
    <SafeAreaView style={authStyles.form}>
      <View style={authStyles.formGroup}>
        <ThemedText style={authStyles.label}>Nombre</ThemedText>
        <MyInputText
          control={control!}
          name="userName"
          iconName="person.2"
          placeholder="Ingresa tu nombre"
          returnKeyType="next"
          onSubmitEditing={() => {lastNameRef?.current?.focus();}}
        />
      </View>
      <View style={authStyles.formGroup}>
        <ThemedText style={authStyles.label}>Apellido</ThemedText>
        <MyInputText
          control={control!}
          name="userLastName"
          iconName="person.2"
          placeholder="Ingresa tu apellido"
          returnKeyType="next"
          myref={lastNameRef}
          onSubmitEditing={() => {dniRef?.current?.focus();}}
        />
      </View>
      <View style={authStyles.formGroup}>
        <ThemedText style={authStyles.label}>Número ID/DNI</ThemedText>
        <MyInputText
          control={control!}
          name="userDni"
          iconName="key.card"
          placeholder="Ingresa tu apellido"
          myref={dniRef}
        />
      </View>
    </SafeAreaView>
  );
}
