import React, { memo } from "react";
import { Colors, ColorsBase } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { Text, View } from "react-native";
import { Button, Card, Icon } from "react-native-paper";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import IconWater from "@/assets/svgs/icon-water";
import IconElectricity from "@/assets/svgs/icon-electricity";
import IconFlame from "@/assets/svgs/icon-flame";
import { ThemedView } from "./ThemedView";
import { MaterialIcons } from "@expo/vector-icons";

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
      Empresa: "MetroGas",
      Client: "88698235",
      status: "Pagado",
      fechVen: "01/01/2025",
      totalPagar: "75.900",
    },
    {
      type: "Internet",
      Empresa: "Movistar",
      Client: "88698235",
      status: "Pagado",
      fechVen: "01/01/2025",
      totalPagar: "75.900",
    },
  ];

  const theme = useColorScheme() ?? "light";
  const insets = useSafeAreaInsets();
  return (
    <Animated.FlatList
      entering={FadeInUp}
      exiting={FadeOutUp}
      data={data}
      ListEmptyComponent={() => (
        <ThemedView
          style={{
            backgroundColor: "transparent",
            alignItems: "center",
            gap: 10,
          }}>
          <Icon source={"check-decagram-outline"} size={40} color={"#75C975"} />
          <ThemedText type="title" style={{ color: ColorsBase.cyan400 }}>
            ¡Parece que estas al dia!
          </ThemedText>
          <ThemedText type="default" style={{ color: ColorsBase.cyan400 }}>
            ¿Tienes algún otro servicio que agregar?
          </ThemedText>
        </ThemedView>
      )}
      scrollEnabled
      keyboardShouldPersistTaps="handled"
      renderItem={({ item }) => (
        <Card
          mode="contained"
          style={{
            borderWidth: 0.2,
            borderColor: "black",
            backgroundColor:
              theme === "light"
                ? Colors.light.background
                : Colors.dark.background,
            marginBottom: 16,
          }}>
          <Card.Content style={{ gap: 10 }}>
            <ThemedView
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <View
                style={{
                  flexDirection: "row",
                }}>
                {item.type === "Agua" ? (
                  <IconWater
                    bgColor={"#e6f0f9"}
                    color={"#3385cd"}
                    size={32}
                    scale={1.4}
                  />
                ) : item.type === "Electricidad" ? (
                  <IconElectricity
                    scale={1.4}
                    size={32}
                    color={"#ffc533"}
                    bgColor="#fff8e6"
                  />
                ) : item.type === "Gas" ? (
                  <IconFlame
                    bgColor="#fce6e6"
                    color={"#e73333"}
                    size={32}
                    scale={1.5}
                  />
                ) : (
                  <MaterialIcons
                    name="wifi"
                    color={"#834E9C"}
                    size={30}
                    style={{
                      backgroundColor: "#e2cced",
                      padding: 8,
                      borderRadius: 10,
                    }}
                  />
                )}

                <ThemedView style={{ marginLeft: 10 }}>
                  <ThemedText type="defaultSemiBold">{item.type}</ThemedText>
                  <ThemedText
                    type="default"
                    style={{
                      color:
                        item.type == "Agua"
                          ? "#3385cd"
                          : item.type === "Gas"
                          ? "#ff4f30"
                          : item.type === "Internet"
                          ? "#834E9C"
                          : "#ffc533",
                    }}>
                    {item.Empresa}
                  </ThemedText>
                </ThemedView>
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
                {/* "hourglass-disabled" */}
                <MaterialIcons name={"pending"} />
                {/* <Icon
									source={
										item.status == 'Atrasado'
											? 'water-outline'
											: item.status === 'Pendiente'
											? 'dots-horizontal-circle-outline'
											: 'check-bold'
									}
									color={
										item.status === 'Atrasado' ||
										item.status === 'Pagado'
											? Colors.light.background
											: Colors.light.text
									}
									size={22}
								/> */}
                <ThemedText
                  style={{
                    color:
                      item.status === "Atrasado" || item.status === "Pagado"
                        ? Colors.light.background
                        : Colors.light.text,
                  }}>
                  {item.status}
                </ThemedText>
              </View>
            </ThemedView>
            {/* <ThemedView
              style={{
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#ccedeb",
                gap: 5,
                width: "%",
                paddingHorizontal: 14,
              }}> */}
            <ThemedText
              type="default"
              style={{
                color: ColorsBase.cyan500,
                alignItems: "center",
                backgroundColor: "#ccedeb",
                padding: 2,
              }}>
              N° Cliente{" "}
              <ThemedText
                type="defaultSemiBold"
                style={{ color: ColorsBase.cyan500 }}>
                {item.Client}
              </ThemedText>{" "}
              <MaterialIcons name="copy-all" size={18} />
            </ThemedText>

            {/* </ThemedView> */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <ThemedText>Vencimiento</ThemedText>
              <ThemedText>{item.fechVen}</ThemedText>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}>
              <ThemedText>Total a pagar</ThemedText>
              <ThemedText> ARS $ {item.totalPagar}</ThemedText>
            </View>
            <View
              style={{
                justifyContent: "center",
                gap: 10,
                alignSelf: "center",
                width: "98%",
                marginTop: 10,
              }}>
              <Button
                mode="outlined"
                textColor={ColorsBase.cyan500}
                style={{
                  borderColor: ColorsBase.cyan500,
                  marginEnd: 10,
                }}>
                <ThemedText
                  type="default"
                  style={{ color: ColorsBase.cyan500 }}>
                  Ver Detalles
                </ThemedText>
              </Button>
              <Button mode="contained" buttonColor={ColorsBase.cyan500}>
                <ThemedText
                  type="default"
                  style={{ color: Colors.light.background }}>
                  Pagar ahora
                </ThemedText>
              </Button>
            </View>
          </Card.Content>
        </Card>
      )}
    />
  );
};

export default memo(ServicesClient);
