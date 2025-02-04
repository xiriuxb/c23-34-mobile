import HeaderApp from "@/components/dashboard/HeaderApp";
import IconStatus from "@/components/IconStatus";
import { ThemedText } from "@/components/ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Route() {
  const { paymentId } = useLocalSearchParams<{ paymentId: string }>();

  return (
    <ScrollView style={{padding:15, flex:1}} contentContainerStyle={{justifyContent:"space-between"}}>
      <HeaderApp />
      <ThemedText type="subtitle" lightColor={ColorsBase.cyan400}>
        Detalles del servicio
      </ThemedText>
      <IconStatus status={"Atrasado"} />
    </ScrollView>
  );
}


function StatusSnack({type}:{type:"retarded"|"pending"|"payed"}){
  return(
    <View>

    </View>
  )
}