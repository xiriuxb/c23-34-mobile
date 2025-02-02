import { Colors } from "@/constants/Colors";
import Dashboard from "@/components/BodyDashboard";
import { memo } from "react";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

interface StyleProps {
  color: string;
}

const BottomBar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          sceneStyle: { backgroundColor: Colors.light.background },
          tabBarStyle: {
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
            height: "6%",
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Dashboard}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color }: StyleProps) => (
              <Icon source="home-variant-outline" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={Dashboard}
          options={{
            tabBarItemStyle: { marginEnd: "15%" },
            tabBarLabel: "Historial",
            tabBarIcon: ({ color }: StyleProps) => (
              <Icon source="file-document-outline" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Category"
          component={Dashboard}
          options={{
            tabBarLabel: "Categorias",
            tabBarIcon: ({ color }: StyleProps) => (
              <Icon source="folder-plus-outline" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Dashboard}
          options={{
            tabBarLabel: "Perfil",
            tabBarIcon: ({ color }: StyleProps) => (
              <Icon source="account-circle-outline" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: "2%",
          alignSelf: "center",
          borderWidth: 0.1,
          backgroundColor: Colors.light.background,
          borderRadius: 30,
          // padding: 15,
          elevation: 5,
          shadowColor: "#000",
          shadowOpacity: 0.2,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 5,
        }}
        onPress={() => console.log("Floating Button Pressed")}>
        <Icon source="plus" color={Colors.light.text} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(BottomBar);
