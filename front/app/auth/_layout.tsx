import { AUTH_STATUS } from "@/constants/enums/AuthStatus";
import { useAuthStore } from "@/hooks/useAuthStore";
import { Stack } from "expo-router";
import { useEffect } from "react";
import { Modal, View } from "react-native";
import LoadingScreen from "../loading";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthLayout() {
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    if (status == AUTH_STATUS.not_authenticated) {
      return;
    } else {
      checkAuthToken();
    }
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        visible={status === AUTH_STATUS.checking}
        animationType="slide"
      >
        <LoadingScreen />
      </Modal>

      <Stack screenOptions={{ headerShown: false, animation: "fade" }}>
        <Stack.Screen
          name="login"
          options={{ headerShown: false, title: "Login" }}
        />
        <Stack.Screen name="(register)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}
