import { Colors, ColorsBase } from "@/constants/Colors";
import { memo } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

// Based on /auth/Dashboard code, by GioPati

const Dashboard = () => {
  const theme = useColorScheme() ?? "light";
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccedeb" }}>
      <Tabs
        initialRouteName="index"
        screenOptions={() => ({
          headerShown: false,
          tabBarActiveTintColor: ColorsBase.cyan500,
          sceneStyle: {
            backgroundColor: "#ccedeb",
            paddingHorizontal: 15,
          },
          tabBarItemStyle: {
            alignItems: "center",
            flexDirection: "row",
            
          },
          tabBarStyle: styles.barStyles,
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="home-filled" isFocused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="payments-list"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="receipt-long" isFocused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="notifications-none" isFocused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="user-profile"
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <TabBarIcon iconName="account-circle" isFocused={focused} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  barStyles: {
    borderRadius: 24,
    backgroundColor: "#333333",
    justifyContent: "center",
    height: 64,
    alignItems: "center",
  },
});

const TabBarIcon = ({
  isFocused,
  iconName,
}: {
  isFocused: boolean;
  iconName: React.ComponentProps<typeof MaterialIcons>["name"];
}) => {
  const scale = isFocused ? 1.2 : 1;
  return (
    <Animated.View
      style={{
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: isFocused ? ColorsBase.cyan500 : "transparent",
        justifyContent: "center",
        alignItems: "center",
        transform: [{ scale }],
      }}
    >
      <MaterialIcons
        name={iconName}
        size={30}
        color={isFocused ? Colors.light.background : Colors.light.background}
      />
    </Animated.View>
  );
};

export default memo(Dashboard);