import { Button, Card } from "react-native-paper";
import { ThemedView } from "../ThemedView";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import { Colors, ColorsBase } from "@/constants/Colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CardItem } from "@/api/cards.service";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import ServicesIcons from "../ServicesIcons";
import ServiceStatusSnack from "../ServiceStatusSnack";

export default function ServiceCard({ item }: { item: CardItem }) {
  const theme = useColorScheme() ?? "light";
  const categoryColor =
    item.category.name == "Agua"
      ? ColorsBase.blue400
      : item.type === "Gas"
      ? ColorsBase.red400
      : item.type === "Internet"
      ? "#834E9C"
      : ColorsBase.yellow600;

  return (
    <Card
      mode="contained"
      style={{
        borderWidth: 0.2,
        borderColor: "black",
        backgroundColor:
          theme === "light" ? Colors.light.background : Colors.dark.background,
      }}
    >
      <Card.Content style={{ gap: 10 }}>
        <ThemedView
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <ServicesIcons category={item.category.name} />

            <View>
              <ThemedText type="defaultSemiBold" style={{ fontWeight: 700 }}>
                {item.category.name}
              </ThemedText>
              <ThemedText
                style={{
                  fontWeight: 600,
                  color: categoryColor,
                }}
              >
                {item.name}
              </ThemedText>
            </View>
          </View>

          <ServiceStatusSnack dueDate={new Date(2025, 1, 12)} />
        </ThemedView>

        <ThemedText style={styles.clientNumber}>
          N° Cliente{" "}
          <ThemedText
            type="defaultSemiBold"
            style={{ color: ColorsBase.cyan600 }}
          >
            {item.registeredUsers[0].clienteId}
          </ThemedText>
          <MaterialCommunityIcons
            name="content-copy"
            size={18}
            color={ColorsBase.cyan500}
          />
        </ThemedText>
        {/* </ThemedView> */}
        <View style={styles.infoRow}>
          <ThemedText type="defaultSemiBold">Vencimiento</ThemedText>
          <ThemedText>{item.fechVen ? item.fechVen : "26/02/2025"}</ThemedText>
        </View>
        <View style={styles.infoRow}>
          <ThemedText type="subtitle">Total a pagar</ThemedText>
          <View
            style={{ flexDirection: "row", alignItems: "flex-end", gap: 12 }}
          >
            <ThemedText>ARS</ThemedText>
            <ThemedText type="title">
              $ {item.totalPagar ? item.totalPagar : "75.900"}
            </ThemedText>
          </View>
        </View>
        
        <View
          style={{
            gap: 10,
            marginTop: 10,
          }}
        >
          <Button
            mode="outlined"
            textColor={ColorsBase.cyan500}
            style={{
              borderColor: ColorsBase.cyan500,
            }}
            onPress={() =>
              router.push(`/dashboard/home/payment/${item.Client}`)
            }
          >
            <ThemedText type="default" style={{ color: ColorsBase.cyan500 }}>
              Ver Detalles
            </ThemedText>
          </Button>
          <Button mode="contained" buttonColor={ColorsBase.cyan500}>
            <ThemedText style={{ color: Colors.light.background }}>
              Pagar ahora
            </ThemedText>
          </Button>
        </View>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  clientNumber: {
    paddingHorizontal: 10,
    borderRadius: 8,
    color: ColorsBase.cyan600,
    backgroundColor: ColorsBase.cyan100,
    alignSelf: "flex-start",
  },
  infoRow:{
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
