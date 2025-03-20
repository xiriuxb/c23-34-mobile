import { LoginForm } from "@/api/auth.service";
import authStyles from "./authStyles";
import MyInputText from "./MyInputText";
import SimpleButton from "./SimpleButton";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput, View } from "react-native";
import { useAuthStore } from "@/hooks/useAuthStore";

const loginFormDefaultValues: LoginForm = {
  userEmail: "",
  userPassword: "",
};

function LoginFormSection() {
  const {
    control,
    handleSubmit,
    getValues,
  } = useForm<LoginForm>({
    defaultValues: loginFormDefaultValues,
  });
  const [hidePassword, setHidePassword] = useState(true);
  const { errorMessage, startLogin, status } = useAuthStore();

  const passwordRef = useRef<TextInput>(null);

  const handleHidePassword =() => {
    setHidePassword(prev => !prev);
  };

  const handleSubmitForm = async () => {
    await startLogin(getValues());
  };

  const handleEmailSubmit = () => {
    passwordRef?.current?.focus();
  };

  return (
    <View style={[authStyles.form]}>
      {!!errorMessage.on && errorMessage.on == "auth" && (
        <ThemedView style={authStyles.formBackError}>
          <ThemedText>{errorMessage.message}</ThemedText>
        </ThemedView>
      )}
      <MyInputText<LoginForm>
        control={control}
        id="userEmail"
        name="userEmail"
        inputMode="email"
        keyboardType="email-address"
        placeholder="Email"
        iconName="person.2"
        returnKeyType="next"
        onSubmitEditing={handleEmailSubmit}
        rules={{ required: "Requerido" }}
      />
      <MyInputText<LoginForm>
        control={control}
        id="password"
        name="userPassword"
        inputMode="text"
        placeholder="Password"
        iconName="shield"
        secureTextEntry={hidePassword}
        iconAction={hidePassword ? "eye.slash" : "eye"}
        handleIconAction={handleHidePassword}
        onSubmitEditing={handleSubmit(handleSubmitForm)}
        rules={{ required: "Requerido" }}
        myref={passwordRef}
      />
      <SimpleButton
        onPress={handleSubmit(handleSubmitForm)}
        style={{ backgroundColor: Colors.light.text }}
      >
        <ThemedText style={{ fontWeight: 700, color: Colors.dark.tint }}>
          Iniciar sesión
        </ThemedText>
      </SimpleButton>
    </View>
  );
};

export default LoginFormSection; 