// LoginScreen.js
import React from "react";
import Login from "../pages/Login";
import Orders from "./orders";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();


export default function HomeScreen() {
  return (

      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>

  );
}
