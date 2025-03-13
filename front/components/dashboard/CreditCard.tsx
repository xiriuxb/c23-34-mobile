import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { IconButton } from "react-native-paper";

export default function CreditCard({card}:{card:{cardDateCreated:string}}) {
  return (
    <LinearGradient
      colors={
        card.cardDateCreated!! ? ["#0048b8", "#0072ff"] : ["#148A14", "#47B747"]
      }
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.card}
    >
      <View style={styles.header}>
        <IconButton icon="credit-card" iconColor="white" size={20} />
        <IconButton icon="pencil" iconColor="white" size={20} />
      </View>
      <Text style={styles.title}>Tarjeta de crédito</Text>
      <View style={styles.dottedLine} />
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Visa termina en <Text style={styles.boldText}>4583</Text>
        </Text>
        <Image
          source={require("../../assets/images/visa-blue-logo-19529.png")}
          style={styles.logo}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    // height: 180,
    marginVertical: 10,
    flex: 1,
    borderRadius: 15,
    padding: 20,
    justifyContent: "space-between",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  dottedLine: {
    borderWidth: 0.5,
    borderColor: "white",
    borderStyle: "dotted",
    marginVertical: 10,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  footerText: {
    color: "white",
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
});
