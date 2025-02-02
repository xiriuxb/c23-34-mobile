import { Colors, ColorsBase } from "@/constants/Colors";
import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Appbar, Avatar, Button, Card, IconButton } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import IconElectricity from "@/assets/svgs/icon-electricity";
import IconNotifications from "@/assets/svgs/icon-notifications";

const HeaderApp = () => {
  const data = {
    nombre: "Nombre Apellido",
  };
  const theme = useColorScheme() ?? "light";
  return (
    <Card.Title
      title={
        <View>
          <ThemedText type="subtitle">{data.nombre}</ThemedText>
          <ThemedText type="default">Ver Perfil</ThemedText>
        </View>
      }
      style={[
        style.header_Container,
        {
          backgroundColor:
            theme === "light" ? "#e4f5f4" : Colors.dark.background,
        },
      ]}
      left={(props) => (
        <Avatar.Image
          {...props}
          size={32}
          source={require("../assets/images/IconPayFy.png")}
        />
      )}
      right={(props) => (
        <Button>
          <IconNotifications
            size={20}
            color={theme === "light" ? Colors.light.text : Colors.dark.text}
          />
        </Button>
      )}
    />
  );
};

const style = StyleSheet.create({
  header_Container: {
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    overflow: "hidden",
    marginBottom: 20,
    borderWidth: 0.5,
    borderColor: ColorsBase.cyan400,
  },
});

export default memo(HeaderApp);
