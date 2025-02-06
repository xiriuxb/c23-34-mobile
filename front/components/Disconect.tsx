import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

const Disconect = () => {
  return (
    <View style={styles.container}>
      <Icon source={"wifi-strength-alert-outline"} color="#969696" size={100} />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        ¡No estás conectado!
      </Text>
      <Text style={{ fontSize: 17, flexWrap: "wrap" }}>
        Por favor, intenta conectarte a la red mas cercana
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },
});

export default memo(Disconect);
