import { Colors, ColorsBase } from "@/constants/Colors";
import { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Animated from "react-native-reanimated";
import { ThemedView } from "@/components/ThemedView";
import BodyDashboard from "@/components/BodyDashboard";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import { SafeAreaView } from "react-native-safe-area-context";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { MaterialIcons } from "@expo/vector-icons";

interface StyleProps {
  color: string;
}

const Dashboard = () => {
  const Tab = createBottomTabNavigator();
  const theme = useColorScheme() ?? "light";
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ccedeb" }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: ColorsBase.cyan500,
          sceneStyle: {
            backgroundColor: "#ccedeb",
            paddingHorizontal: 15,
          },
          tabBarStyle: styles.barStyles,
          tabBarIconStyle: { marginTop: 10 },
          tabBarIcon: ({ focused }) => {
            const scale = focused ? 1.2 : 1;
            return (
              <Animated.View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 25,
                  backgroundColor: focused ? ColorsBase.cyan500 : "transparent",
                  justifyContent: "center",
                  alignItems: "center",
                  transform: [{ scale }],
                }}>
                <MaterialIcons
                  name={
                    route.name === "Home"
                      ? "home-filled"
                      : route.name === "History"
                      ? "receipt-long"
                      : route.name === "Category"
                      ? "notifications-none"
                      : "account-circle"
                  }
                  size={30}
                  color={
                    focused ? Colors.light.background : Colors.light.background
                  }
                />
              </Animated.View>
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={BodyDashboard}
          options={{
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="History"
          component={BodyDashboard}
          options={{
            tabBarLabel: "",
            tabBarItemStyle: { marginEnd: "15%" },
          }}
        />
        <Tab.Screen
          name="Category"
          component={BodyDashboard}
          options={{
            tabBarLabel: "",
          }}
        />
        <Tab.Screen
          name="Profile"
          component={BodyDashboard}
          options={{
            tabBarLabel: "",
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity
        style={styles.buttonPlus}
        onPress={() => console.log("Floating Button Pressed")}>
        <Icon source="plus" color={Colors.light.background} size={30} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  barStyles: {
    borderRadius: 24,
    backgroundColor: "#333333",
    justifyContent: "center",
    height: 64,
  },
  buttonPlus: {
    position: "absolute",
    bottom: "0.5%",
    alignSelf: "center",
    borderWidth: 1,
    backgroundColor: "#333333",
    borderColor: ColorsBase.cyan400,
    borderRadius: 30,
    padding: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
});

export default memo(Dashboard);
