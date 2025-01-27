import { Image, TouchableOpacity, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";

export default function HeaderRegister({handleBack}:{handleBack:()=>void}) {
  return (
    <View style={{ paddingVertical: 15 }}>
      <Image
        source={require("@/assets/images/app-icon.png")}
        style={{ height: 19, width: 63, alignSelf: "center" }}
      />
      <TouchableOpacity
        style={{ width: 24, height: 24 }}
        onPress={() => handleBack()}
      >
        <IconSymbol name={"arrow.backward"} size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}
