import React, { memo, useEffect, useMemo, useState } from "react";
import { Colors, ColorsBase } from "@/constants/Colors";
import { FlatList, Modal, View } from "react-native";
import { Button } from "react-native-paper";
import HeaderApp from "./HeaderApp";
import { ThemedText } from "../ThemedText";
import TotalPayment from "./TotalPayment";
import LoadingScreen from "@/app/loading";
import { useAuthStore } from "@/hooks/useAuthStore";
import { apiGetUserDebts, apiGetUserServices } from "@/api/providers.service";
import ServiceCard from "./ServiceCard";
import { apiGetCards } from "@/api/cards.service";
import CreditCard from "./CreditCard";

// based on /components/BodyDashboard by GioPati
const BodyDashboard = () => {
  const [pressCards, setPressCards] = useState(true);
  const [loading, setLoading] = useState(true);
  const [userServices, setUserServices] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const { user } = useAuthStore();

  const handleGetCards = async () => {
    const { ok, data } = await apiGetCards();
    if (ok) {
      setUserCards(data);
      setLoading(false);
      return;
    }
    setLoading(false)
  };

  const getData = async () => {
    const { ok, data } = await apiGetUserServices(user.id!);
    if (ok) {
      setUserServices(data);
      setLoading(false);
      return;
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
    handleGetCards();
    apiGetUserDebts(user.id!);
  }, []);

  const header = useMemo(
    () => (
      <View style={{ paddingTop: 15, gap: 15 }}>
        <HeaderApp />
        <TotalPayment progress={0.5} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <NavButtonServicesCards
            cardsSelected={pressCards}
            title="Servicios"
            onPress={() => setPressCards(true)}
          />
          <NavButtonServicesCards
            cardsSelected={!pressCards}
            title="Mis Tarjetas"
            onPress={() => setPressCards(false)}
          />
        </View>
      </View>
    ),
    [pressCards]
  );

  if (loading) {
    return (
      <Modal transparent={true} animationType="slide" visible>
        <LoadingScreen />
      </Modal>
    );
  }

  return (
    <FlatList
      style={{ backgroundColor: ColorsBase.cyan100, paddingHorizontal: 15 }}
      contentContainerStyle={{ gap: 12 }}
      data={userServices}
      renderItem={({ item }) =>
        pressCards ? <ServiceCard item={item} /> : <CreditCard card={item}/>
      }
      ListHeaderComponent={header}
      ListFooterComponent={() => <View style={{ marginBottom: 67 }}></View>}
    />
  );
};

export default memo(BodyDashboard);

function NavButtonServicesCards({
  title,
  cardsSelected,
  onPress,
}: {
  title: string;
  cardsSelected: boolean;
  onPress: () => void;
}) {
  return (
    <Button
      style={{
        width: "48%",
        borderColor: cardsSelected ? "transparent" : ColorsBase.cyan500,
      }}
      buttonColor={cardsSelected ? ColorsBase.cyan500 : Colors.light.background}
      textColor={cardsSelected ? Colors.light.background : ColorsBase.cyan500}
      onPress={() => {
        onPress();
      }}
      mode={cardsSelected ? "contained" : "outlined"}
    >
      <ThemedText
        type="default"
        style={{
          color: cardsSelected ? Colors.light.background : ColorsBase.cyan500,
        }}
      >
        {title}
      </ThemedText>
    </Button>
  );
}
