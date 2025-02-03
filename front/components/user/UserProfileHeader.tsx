import { StyleSheet, TouchableOpacity,View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";
import { router } from "expo-router";

export default function UserProfileHeader({handleBack}:{handleBack?:()=>void}) {
  return (
    <View style={baseStyle.headerContainer}>
      <TouchableOpacity style={{ width: 24, height: 24 }} onPress={() => router.back()}>
        <IconSymbol name={"arrow.backward"} size={24} color="black" />
      </TouchableOpacity>
      <View  style={baseStyle.headerEnd}>
        <TouchableOpacity>
            <IconSymbol name="bell" size={24} color="black"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{router.push("/dashboard/user/settings")}}>
            <IconSymbol name="gear" size={24} color="black"/>
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
    paddingBottom: 10
  },
  headerEnd:{
    flexDirection: "row",
    gap:8
  }
});
