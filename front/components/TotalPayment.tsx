import { Colors, ColorsBase } from "@/constants/Colors";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card, Divider, ProgressBar } from "react-native-paper";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import IconArrow from "@/assets/svgs/icon-arrow-back";

interface PaymentProps {
  progress: number;
}
const TotalPayment: React.FC<PaymentProps> = ({ progress }) => {
  const theme = useColorScheme() ?? "light";
  return (
    <>
      <Card
        mode="contained"
        style={[
          styles.container,
          {
            backgroundColor:
              theme === "light"
                ? Colors.light.background
                : Colors.dark.background,
          },
        ]}>
        <Card.Content style={{ gap: 8 }}>
          <ThemedText type="subtitle" style={{ color: ColorsBase.cyan400 }}>
            Total Restante
          </ThemedText>
          <ThemedView style={styles.priceRestante}>
            <ThemedText type="title" style={{ fontSize: 40, lineHeight: 40 }}>
              $ {185.013}
            </ThemedText>
            <ThemedText style={{ fontSize: 20 }}> ARS</ThemedText>
          </ThemedView>
          <ProgressBar
            progress={progress}
            style={{
              backgroundColor:
                progress < 0.5
                  ? "#F39999"
                  : progress < 0.9
                  ? "#fff443"
                  : ColorsBase.cyan400,
            }}
            color={
              progress < 0.5
                ? "#BC0000"
                : progress < 0.8
                ? "#D69900"
                : ColorsBase.cyan400
            }
          />
          <ThemedView
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 10,
            }}>
            <ThemedView style={{ flexDirection: "row", gap: 5 }}>
              <ThemedText
                type="default"
                style={{
                  color:
                    progress < 0.5
                      ? "#BC0000"
                      : progress < 0.8
                      ? "#D69900"
                      : ColorsBase.cyan400,
                }}>
                {progress * 100}%
              </ThemedText>
              <ThemedText style={{ color: ColorsBase.cyan400 }}>
                Pagado
              </ThemedText>
            </ThemedView>
            <ThemedView style={{ flexDirection: "row", gap: 5 }}>
              <ThemedText type="default" style={{ color: ColorsBase.cyan400 }}>
                $ 205.587
              </ThemedText>
              <ThemedText
                type="defaultSemiBold"
                style={{ color: ColorsBase.cyan400 }}>
                Total a Pagar
              </ThemedText>
            </ThemedView>
          </ThemedView>
        </Card.Content>
      </Card>
      <Button
        mode="contained"
        buttonColor="#333333"
        icon={() => <IconArrow />}
        style={{
          width: "100%",
          height: 48,
          marginBottom: 10,
          borderRadius: 16,
        }}
        contentStyle={{
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
        <ThemedText
          type="default"
          style={{
            color: theme !== "light" ? Colors.light.text : Colors.dark.text,
          }}>
          Ir a pagar ${"205.587"}
        </ThemedText>
      </Button>
      <Divider style={{ backgroundColor: ColorsBase.cyan400, height: 1 }} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: Colors.light.background,
    borderWidth: 0.5,
    borderColor: ColorsBase.cyan500,
  },
  priceRestante: {
    flexDirection: "row",
    alignItems: "baseline",
    alignSelf: "flex-start",
    marginVertical: 7,
  },
});

export default memo(TotalPayment);
