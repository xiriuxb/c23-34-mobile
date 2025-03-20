import { Image, View } from "react-native";

export default function LoginHeader() {
  return (
    <View
      style={{
        paddingVertical: 40,
        paddingHorizontal: 16,
      }}
    >
      <Image
        source={require("@/assets/images/app-icon.png")}
        style={{ height: 19, width: 63 }}
      />
    </View>
  );
} 