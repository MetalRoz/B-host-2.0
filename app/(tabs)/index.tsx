import React, { useEffect, useState } from "react";
import Login from "../pages/Login";
import Orders from "./orders";
import Events from "../pages/Events";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const [initialRoute, setInitialRoute] = useState("");

  useEffect(() => {
    const fetchInitialRoute = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          setInitialRoute("Events");
        } else {
          setInitialRoute("Login");
        }
      } catch (error) {
        console.error("Error fetching token:", error);
        // Handle error fetching token
        setInitialRoute("Login"); // Fallback to Login screen
      }
    };

    fetchInitialRoute();
  }, []);

  useEffect(() => {}, [initialRoute]);

  if (!initialRoute) {
    // Aquí puedes mostrar un cargador mientras se determina la ruta inicial
    return null;
  }

  return (
    <Stack.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Events" component={Events} />
    </Stack.Navigator>
  );
}

export default HomeScreen;
