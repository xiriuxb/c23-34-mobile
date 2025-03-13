import MyInputText from "@/components/auth/MyInputText";
import HeaderApp from "@/components/dashboard/HeaderApp";
import ServicesIcons from "@/components/ServicesIcons";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { ColorsBase } from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SearchForm = {
  search: string;
};

export default function PaymentsList() {
  const { control } = useForm<SearchForm>();
  return (
    <ThemedView style={{ paddingVertical: 10, paddingHorizontal: 15, gap: 15 }}>
      <TouchableOpacity style={{ maxWidth: 26 }}>
        <IconSymbol
          name="arrow.backward"
          color={ColorsBase.cyan400}
          size={24}
        />
      </TouchableOpacity>
      <HeaderApp />
      <ThemedText type="title">Historial de Pagos</ThemedText>
      <MyInputText control={control} name="search" iconName="0.circle.ar" />
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <MaterialIcons name="filter-alt" color={ColorsBase.cyan400} size={18} />
        <Text>Filtrar por</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <TouchableOpacity style={styles.filterSnack}>
          <MaterialIcons
            name="bar-chart"
            size={20}
            color={ColorsBase.cyan500}
          />
          <Text style={{ fontWeight: 700, fontSize: 15 }}>Estado</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterSnack}>
          <MaterialIcons
            name="calendar-month"
            size={20}
            color={ColorsBase.cyan500}
          />
          <Text style={{ fontWeight: 700, fontSize: 15 }}>Fecha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterSnack}>
          <MaterialIcons
            name="attach-money"
            size={20}
            color={ColorsBase.cyan500}
          />
          <Text style={{ fontWeight: 700, fontSize: 15 }}>Monto</Text>
        </TouchableOpacity>
      </View>
      <HistoryPaymentCard />
      <HistoryPaymentCard />
      <HistoryPaymentCard />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  filterSnack: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    borderWidth: 1,
    borderColor: ColorsBase.neutral400,
    borderRadius: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
});

function HistoryPaymentCard() {
  return (
    <View
      style={{
        backgroundColor: ColorsBase.neutral50,
        borderWidth: 1,
        borderColor: ColorsBase.neutral200,
        borderRadius: 12,
        paddingVertical: 8,
        paddingHorizontal: 14,
        gap:12
      }}
    >
      {/* Head */}
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", gap: 8 }}>
          <ServicesIcons category="wifi" />
          <View style={{}}>
            <ThemedText type="defaultSemiBold">Internet</ThemedText>
            <Text style={{ color: ColorsBase.neutral600 }}>Movistar</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", gap: 8, alignItems: "center" }}>
          <ThemedText style={{ fontWeight: 600 }}>$25.900</ThemedText>
          <MaterialIcons
            name="check-circle-outline"
            color="#47B747"
            size={18}
          />
        </View>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 8,
            borderColor: ColorsBase.neutral400,
            gap: 4,
            paddingHorizontal: 8
          }}
        >
          <MaterialIcons name="receipt-long" color={ColorsBase.neutral400} />
          <Text style={{color: ColorsBase.neutral700}}>N˚Factura</Text>
          <Text>1234456789</Text>
        </View>
        <ThemedText style={{color: ColorsBase.neutral700}} >24 sept 2024</ThemedText>
      </View>
    </View>
  );
}
