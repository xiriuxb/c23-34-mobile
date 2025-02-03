import React, { memo } from "react";
import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Card } from "react-native-paper";

interface NotificationProps {
  item?: any;
}

const Notification: React.FC<NotificationProps> = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        padding: 8,
        borderWidth: 1,
        borderColor: ColorsBase.cyan500,
        borderRadius: 16,
        gap: 10,
      }}>
      <View>
        {item.status === "Atrasado" ? (
          <MaterialIcons
            name={"hourglass-disabled"}
            color={ColorsBase.red300}
            size={30}
          />
        ) : item.status === "Pendiente" ? (
          <MaterialCommunityIcons
            name={"dots-horizontal-circle-outline"}
            color={ColorsBase.yellow300}
            size={30}
          />
        ) : (
          <MaterialCommunityIcons
            name="check-circle-outline"
            color={ColorsBase.green400}
            size={30}
          />
        )}
      </View>
      <View style={{ flex: 1 }}>
        <ThemedText type="defaultSemiBold">{item.title}</ThemedText>
        <ThemedText style={{ fontSize: 14 }} type="default">
          {item.subtitle}
        </ThemedText>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <ThemedText style={{ fontSize: 10 }}>{item.time}</ThemedText>
          <MaterialIcons name="arrow-forward" size={16} color={"black"} />
        </View>
      </View>
    </View>
  );
};

export default memo(Notification);
