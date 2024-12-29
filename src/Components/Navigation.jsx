import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "react-native-vector-icons";

// Screens
import HomeScreen from "../Screens/HomeScreen";
import CalendarScreen from "../Screens/CalendarScreen";
import BudgetScreen from "../Screens/BudgetScreen";
import ProfileScreen from "../Screens/ProfileScreen";

// Componentes personalizados
import CustomHeader from "./CustomHeader"; // Componente para el encabezado
import ProfileDrawer from "./ProfileDrawer"; // Componente para el Drawer
import FabGroupComponent from "./FabGroupComponent";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const TabsNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Inicio") iconName = "home";
          else if (route.name === "Calendario") iconName = "calendar";
          else if (route.name === "Presupuestos") iconName = "wallet";

          return (
            <MaterialCommunityIcons
              name={iconName}
              color={focused ? "#008b8b" : "gray"}
              size={size || 24}
            />
          );
        },
        tabBarActiveTintColor: "#008b8b",
        tabBarInactiveTintColor: "gray",
        headerShown: false, // Desactiva el encabezado en Tab.Navigator
      })}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeScreen}
        listeners={{
          focus: () => {
            navigation.setParams({ screenName: "Inicio" }); // Pasamos el nombre de la pantalla como parámetro
          },
        }}
      />
      <Tab.Screen
        name="Calendario"
        component={CalendarScreen}
        listeners={{
          focus: () => {
            navigation.setParams({ screenName: "Calendario" });
          },
        }}
      />
      <Tab.Screen
        name="Presupuestos"
        component={BudgetScreen}
        listeners={{
          focus: () => {
            navigation.setParams({ screenName: "Presupuestos" });
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <ProfileDrawer {...props} />}
      screenOptions={{
        headerShown: true, // Aseguramos que el encabezado se muestre
      }}
    >
      {/* La pantalla de navegación principal */}
      <Drawer.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={({ navigation, route }) => ({
          headerTitle: route.params?.screenName, // Usamos el nombre pasado como parámetro
          headerLeft: () => <CustomHeader navigation={navigation} />, // Usamos el encabezado personalizado
        })}
      />
    </Drawer.Navigator>
  );
};


export default Navigation;
