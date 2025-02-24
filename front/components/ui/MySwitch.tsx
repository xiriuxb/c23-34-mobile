import { ColorsBase } from "@/constants/Colors";
import { Switch, SwitchProps, View } from "react-native";

export default function MySwitch({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: SwitchProps["onValueChange"];
}) {
  return (
    <View
      style={{
        backgroundColor: value ? ColorsBase.cyan400 : ColorsBase.cyan50,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: ColorsBase.cyan400,
        flexDirection: "row",
        alignItems: "center",
        maxHeight: 30,
        height: 28,
        width: 50,
      }}
    >
      <Switch
        trackColor={{ false: "#00000000", true: "#00000000" }}
        thumbColor={value ? ColorsBase.cyan100 : ColorsBase.cyan400}
        onValueChange={onValueChange}
        value={value}
        style={{ paddingHorizontal: 4, flex: 1 }}
      />
    </View>
  );
}
