import IconElectricitySimple from "@/assets/svgs/icon-electricity-simple";
import IconFlameSimple from "@/assets/svgs/icon-flame-simple";
import IconWaterSimple from "@/assets/svgs/icon-water-simple";
import { ColorsBase } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useRef } from "react";
import { StyleSheet, View } from "react-native";

const WATER_OPTIONS = ["agua", "water"];
const GAS_OPTIONS = ["gas"];
const LIGHT_OPTIONS = ["light", "electricity", "electricidad", "luz"];

export default function ServicesIcons({ category }: { category: string }) {
  const categoryRef = useRef(category.toLocaleLowerCase());
  return (
    <View
      style={[
        styles.iconContainer,
        WATER_OPTIONS.includes(categoryRef.current) ? styles.water : undefined,
        GAS_OPTIONS.includes(categoryRef.current) ? styles.gas : undefined,
        LIGHT_OPTIONS.includes(categoryRef.current) ? styles.light : undefined,
      ]}
    >
      {WATER_OPTIONS.includes(categoryRef.current) ? (
        <IconWaterSimple width={"50%"} color={ColorsBase.blue500} />
      ) : GAS_OPTIONS.includes(categoryRef.current) ? (
        <IconFlameSimple width={"50%"} color={ColorsBase.red400}/>
      ) : LIGHT_OPTIONS.includes(categoryRef.current) ? (
        <IconElectricitySimple width={"50%"} color={ColorsBase.yellow500} />
      ) : (
        <MaterialIcons
          name="wifi"
          color={"#834E9C"}
          size={30}
          style={{
            backgroundColor: "#e2cced",
            padding: 8,
            borderRadius: 10,
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: "#e2cced",
    aspectRatio:1,
    minWidth: 40,
    minHeight: 40,
    maxWidth: 50,
    maxHeight: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  water: {
    backgroundColor: ColorsBase.blue50,
  },
  light: {
    backgroundColor: ColorsBase.yellow50,
  },
  gas: {
    backgroundColor: ColorsBase.red50,
  },
});
