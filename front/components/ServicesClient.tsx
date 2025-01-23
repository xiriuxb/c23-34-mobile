import { Colors } from "@/constants/Colors";
import React, { memo } from "react";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { Button, Card, Icon } from "react-native-paper";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ServicesClient = () => {
  /* 
 Data Example 
 */
  const data = [
    {
      type: "Electricidad",
      Empresa: "EDENOR",
      Client: "88698235",
      status: "Atrasado",
      fechVen: "01/01/2025",
      totalPagar: "75.900",
    },
    {
      type: "Agua",
      Empresa: "EDENOR",
      Client: "88698235",
      status: "Pendiente",
      fechVen: "01/01/2025",
      totalPagar: "75.900",
    },
    {
      type: "Gas",
      Empresa: "EDENOR",
      Client: "88698235",
      status: "Pagado",
      fechVen: "01/01/2025",
      totalPagar: "75.900",
    },
  ];

  const insets = useSafeAreaInsets();
  return (
    <Animated.FlatList
      entering={FadeInUp}
      exiting={FadeOutUp}
      data={data}
      scrollEnabled
      contentContainerStyle={{
        paddingBottom: insets.bottom + 310,
        flexGrow: 1,
      }}
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => (
        <Card
          mode="contained"
          style={{
            borderWidth: 0.2,
            borderColor: "black",
            backgroundColor: Colors.light.background,
            marginBottom: 10,
            padding: 10,
          }}>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <View
                style={{
                  flexDirection: "row",
                }}>
                <Icon
                  source={
                    item.type == "Agua"
                      ? "water-outline"
                      : item.type === "Gas"
                      ? "fire"
                      : "flash-outline"
                  }
                  size={45}
                  color={
                    item.type == "Agua"
                      ? "#00aeff"
                      : item.type === "Gas"
                      ? "#ff4f30"
                      : Colors.light.primary
                  }
                />
                <View style={{ marginLeft: 10 }}>
                  <Text>{item.type}</Text>
                  <Text
                    style={{
                      color:
                        item.type == "Agua"
                          ? "#00aeff"
                          : item.type === "Gas"
                          ? "#ff4f30"
                          : Colors.light.primary,
                    }}>
                    {item.Empresa}
                  </Text>
                  <Text>N° Cliente {item.Client}</Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor:
                    item.status == "Atrasado"
                      ? "#e73333"
                      : item.status === "Pendiente"
                      ? "#ffc533"
                      : "#47b747",
                  height: "50%",
                  paddingHorizontal: 10,
                  borderRadius: 10,
                }}>
                <Icon
                  source={
                    item.status == "Atrasado"
                      ? "water-outline"
                      : item.status === "Pendiente"
                      ? "dots-horizontal-circle-outline"
                      : "check-bold"
                  }
                  color={
                    item.status === "Atrasado" || item.status === "Pagado"
                      ? Colors.light.background
                      : Colors.light.text
                  }
                  size={22}
                />
                <Text
                  style={{
                    color:
                      item.status === "Atrasado" || item.status === "Pagado"
                        ? Colors.light.background
                        : Colors.light.text,
                  }}>
                  {" "}
                  {item.status}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <Text>Vencimiento</Text>
              <Text>{item.fechVen}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <Text>Total a pagar</Text>
              <Text> ARS $ {item.totalPagar}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                marginTop: 10,
              }}>
              <Button
                mode="outlined"
                textColor={Colors.light.primary}
                style={{
                  borderColor: Colors.light.primary,
                  marginEnd: 10,
                }}>
                Ver Detalles
              </Button>
              <Button mode="contained" buttonColor={Colors.light.primary}>
                Ir a Pagar
              </Button>
            </View>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default memo(ServicesClient);
