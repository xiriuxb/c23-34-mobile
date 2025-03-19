import { memo } from "react";
import { View } from "react-native";
import RegisterDot from "./RegisterDot";

interface RegisterDotsProps {
  currentUri: string;
  uris: string[];
}
const RegisterDots = memo(function ({ currentUri, uris }: RegisterDotsProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 8,
        justifyContent: "center",
        paddingBlock: 12,
      }}
    >
      {uris.map((uri: string) => {
        return <RegisterDot key={uri} isAnimated={currentUri === uri} />;
      })}
    </View>
  );
});

export default RegisterDots;
