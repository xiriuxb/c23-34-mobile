import React, { memo, useState } from "react";
import AllCards from "@/components/AllCards";
import HeaderApp from "@/components/HeaderApp";
import ServicesClient from "@/components/ServicesClient";
import TotalPayment from "@/components/TotalPayment";
import { Colors, ColorsBase } from "@/constants/Colors";
import { FlatList, View } from "react-native";
import { Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";

const BodyDashboard = () => {
  const [totalDebt, setTotalDebt] = useState(0.1);
  const [pressCards, setPressCards] = useState(true);
  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      ListHeaderComponent={() => (
        <View style={{paddingTop: 20, gap: 15}}>
          <HeaderApp />
          <TotalPayment progress={0.5} />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}>
            <Button
              style={{
                width: "48%",
                borderColor: pressCards ? "transparent" : ColorsBase.cyan500,
              }}
              buttonColor={
                pressCards ? ColorsBase.cyan500 : Colors.light.background
              }
              textColor={
                pressCards ? Colors.light.background : ColorsBase.cyan500
              }
              onPress={() => {
                setTotalDebt(0.5);
                setPressCards(true);
              }}
              mode={pressCards ? "contained" : "outlined"}>
              <ThemedText
                type="default"
                style={{
                  color: pressCards
                    ? Colors.light.background
                    : ColorsBase.cyan500,
                }}>
                Servicios
              </ThemedText>
            </Button>
            <Button
              style={{
                width: "48%",
                borderColor: pressCards ? ColorsBase.cyan500 : "transparent",
              }}
              buttonColor={
                pressCards ? Colors.light.background : ColorsBase.cyan500
              }
              textColor={
                pressCards ? ColorsBase.cyan500 : Colors.light.background
              }
              mode="outlined"
              onPress={() => setPressCards(false)}>
              <ThemedText
                type="default"
                style={{
                  color: pressCards
                    ? ColorsBase.cyan500
                    : Colors.light.background,
                }}>
                Mis Tarjetas
              </ThemedText>
            </Button>
          </View>
          {pressCards ? <ServicesClient /> : <AllCards />}
        </View>
      )}
    />
  );
};

export default memo(BodyDashboard);
