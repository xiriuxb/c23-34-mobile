import BottomBar from "@/screens/BottomBar";
import { Colors } from "@/constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider
      style={{
        flex: 1,
        backgroundColor: "#ccedeb",
        paddingTop: 10,
        paddingHorizontal: 15,
      }}>
      <BottomBar />
    </SafeAreaProvider>
  );
}
