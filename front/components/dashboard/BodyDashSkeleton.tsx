import { View, StyleSheet } from "react-native";

export default function BodyDashSkeleton() {
  return (
    <View style={styles.container}>
      {/* Skeleton del Header */}
      <View style={styles.headerSkeleton} />

      {/* Skeleton del TotalPayment */}
      <View style={styles.totalPaymentSkeleton} />

      {/* Skeleton del Botón "Agregar Servicio" */}
      <View style={styles.buttonSkeleton} />

      {/* Skeleton de los Botones "Servicios" y "Mis Tarjetas" */}
      <View style={styles.buttonRow}>
        <View style={styles.tabButtonSkeleton} />
        <View style={styles.tabButtonSkeleton} />
      </View>

      {/* Skeleton de la sección dinámica (ServicesClient o AllCards) */}
      <View style={styles.contentSkeleton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    gap: 15,
    paddingBottom: 67,
  },
  headerSkeleton: {
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  totalPaymentSkeleton: {
    height: 60,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  buttonSkeleton: {
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    maxWidth: 200,
    alignSelf: "center",
    width: "60%",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  tabButtonSkeleton: {
    height: 40,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    width: "48%",
  },
  contentSkeleton: {
    height: 150,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    marginTop: 10,
  },
});
