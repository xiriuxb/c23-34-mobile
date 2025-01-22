import { Colors } from "@/constants/Colors";
import { Link, LinkProps } from "expo-router";
import { StyleProp, useColorScheme } from "react-native";

type props = LinkProps & {
  style?: StyleProp<LinkStyle>;
};

export default function ThemedLink({ style, ...rest }: props) {
  const colorScheme = useColorScheme();
  return (
    <Link
      {...rest}
      style={[{ color: Colors[colorScheme!].hrefLink, fontWeight: 700 }, style]}
    ></Link>
  );
}
