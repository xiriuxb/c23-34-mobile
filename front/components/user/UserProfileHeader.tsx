import { StyleSheet, TouchableOpacity,View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { router } from "expo-router";

export default function UserProfileHeader({handleBack}:{handleBack:()=>void}) {
  return (
    <View style={baseStyle.headerContainer}>
      <TouchableOpacity style={{ width: 32, height: 32 }} onPress={() => handleBack()}>
        <IconSymbol name={"arrow.backward"} size={32} color="black" />
      </TouchableOpacity>
      <View  style={baseStyle.headerEnd}>
        <TouchableOpacity>
            <IconSymbol name="bell" size={32} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.push("/dashboard/user/settings")}}>
            <IconSymbol name="gear" size={32} color="black"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const baseStyle = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20
  },
  headerEnd:{
    flexDirection: "row",
    gap:8
  }
});
