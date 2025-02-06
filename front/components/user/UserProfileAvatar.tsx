import { ColorsBase } from "@/constants/Colors";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import fontStyles from "@/styles/fontStyles";
import IconFlame from "@/assets/svgs/icon-flame";

export default function UserProfileAvatar({ userName }: { userName: string }) {
  return (
    <View style={baseStyle.avatarContainer}>
      <View style={[baseStyle.photoContainer, {}]}>
        <IconFlame width={50} height={50}/>
      </View>
      <ThemedText style={[fontStyles.bold, { color: ColorsBase.cyan400 }]}>
        {userName}
      </ThemedText>
    </View>
  );
}

const baseStyle = StyleSheet.create({
  avatarContainer: {
    alignItems: "center",
  },
  photoContainer: {
    borderColor: ColorsBase.cyan200,
    borderWidth: 5,
    width: 81,
    height: 81,
    borderRadius: "100%",
    alignItems: "center",
    justifyContent:"center"
  },
});
