import { View } from "react-native";
import MyInputText from "./MyInputText";
import { ThemedText } from "../ThemedText";
import authStyles from "./authStyles";
import { useContext, useRef, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import RegisterUserContext from "@/contexts/RegisterUserContext";

export default function RegisterFormData() {
  const {control} = useContext(RegisterUserContext);

  const passwordRef = useRef<TextInput>(null);
  const passwordConfRef = useRef<TextInput>(null);

  const [hidePassword, setHidePassword] = useState(true);
  const [hidePasswordConf, setHidePasswordConf] = useState(true);

  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  const handleHidePasswordConf = () => {
    setHidePasswordConf(!hidePasswordConf);
  };

  return (
    <View style={authStyles.form}>
      <View style={authStyles.formGroup}>
        <ThemedText style={authStyles.label}>Correo electrónico</ThemedText>
        <MyInputText
          control={control!}
          name="userEmail"
          keyboardType="email-address"
          iconName="mail"
          placeholder="Ingresa tu correo electrónico"
          returnKeyType="next"
          onSubmitEditing={() => {passwordRef?.current?.focus();}}
        />
      </View>
      <View style={authStyles.formGroup}>
        <ThemedText style={authStyles.label}>Contraseña</ThemedText>
        <MyInputText
          control={control!}
          name="userPassword"
          iconName="key"
          placeholder="Ingresa tu contraseña"
          returnKeyType="next"
          iconAction={hidePassword ? "eye.slash" : "eye"}
          handleIconAction={handleHidePassword}
          secureTextEntry={hidePassword}
          myref={passwordRef}
          onSubmitEditing={() => {passwordConfRef?.current?.focus();}}
        />
      </View>
      <View style={authStyles.formGroup}>
        <ThemedText style={authStyles.label}>Confirmar contraseña</ThemedText>
        <MyInputText
          control={control!}
          name="userPasswordConf"
          iconName="key"
          placeholder="Re-ingresa tu contraseña"
          iconAction={hidePasswordConf ? "eye.slash" : "eye"}
          secureTextEntry={hidePassword}
          handleIconAction={handleHidePasswordConf}
          myref={passwordConfRef}
        />
      </View>
    </View>
  );
}
