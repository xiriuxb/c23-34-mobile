import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { ColorsBase } from "@/constants/Colors";

export type SimpleButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
  lightColor?: string;
  darkColor?: string;
};

export default function SimpleButton({
  children,
  onPress,
  style,
  lightColor,
  darkColor,
  ...rest
}: SimpleButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "tabIconSelected"
  );
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ backgroundColor }, baseStyle.buttonLink, style]}
      {...rest}
    >
      {children}
    </TouchableOpacity>
  );
}

export const baseStyle = StyleSheet.create({
  buttonLink: {
    borderColor: ColorsBase.cyan400,
    borderWidth: 1,
    borderRadius: 32,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    padding: 14,
    alignItems: "center",
  },
});
