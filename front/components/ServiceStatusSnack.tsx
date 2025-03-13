import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { isBefore } from "date-fns";

const getStatus = (
  dueDate: Date,
  completed: boolean
): {
  text: string;
  bgColor: string;
  textColor: string;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
} => {
  if (completed) {
    return {
      text: "Pagado",
      bgColor: ColorsBase.cyan400,
      textColor: ColorsBase.neutral50,
      iconName: "check-circle",
    };
  }

  if (isBefore(dueDate, new Date())) {
    return {
      text: "Atrasado",
      bgColor: ColorsBase.red400,
      textColor: ColorsBase.neutral50,
      iconName: "hourglass-disabled",
    };
  }

  return {
    text: "Pendiente",
    bgColor: ColorsBase.yellow400,
    textColor: ColorsBase.yellow900,
    iconName: "pending",
  };
};

export default function ServiceStatusSnack({
  dueDate,
  completed = false,
}: {
  dueDate: Date;
  completed?: boolean;
}) {
  const { bgColor, iconName, text, textColor } = getStatus(dueDate, completed);

  return (
    <View
      style={[
        styles.snackContainer,
        {
          backgroundColor: bgColor,
        },
      ]}
    >
      <MaterialIcons name={iconName} size={14} color={textColor} />
      <ThemedText style={[{ fontSize: 14, fontWeight: 700, color: textColor }]}>
        {text}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  snackContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "flex-start",
    gap: 5,
    maxHeight: 33
  },
});
