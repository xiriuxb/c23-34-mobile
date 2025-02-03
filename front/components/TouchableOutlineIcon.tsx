import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ColorsBase } from "@/constants/Colors";
import { IconSymbol } from "./ui/IconSymbol";

type Props = TouchableOpacityProps & {
  title: string;
  colorText?: string;
};

export default function TouchableOutlineIncon({
  title,
  colorText = ColorsBase.neutral600,
  style,
  ...rest
}: Props) {
  return (
    <TouchableOpacity {...rest} style={[baseStyle.buttonOutline, style]}>
      <ThemedText style={{ fontWeight: 500, color: colorText }}>
        {title}
      </ThemedText>
      <IconSymbol name="dpad.right.fill" color={colorText} size={24} />
    </TouchableOpacity>
  );
}

const baseStyle = StyleSheet.create({
  buttonOutline: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    borderColor: ColorsBase.neutral200,
    justifyContent: "space-between",
  },
});
