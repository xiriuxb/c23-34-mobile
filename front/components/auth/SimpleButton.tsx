import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

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
    borderRadius: 14,
    padding: 14,
    alignItems: "center",
  },
});
