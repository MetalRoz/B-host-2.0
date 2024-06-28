// LoginScreen.js
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import axios from "axios";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from '../pages/Login';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

export default function HomeScreen() {
  return (
      <Login></Login>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Login">
    //     <Stack.Screen name="Login" component={Login}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
  // const api = "https://proyectojc.com";
  // const loginMethod = "api/v2/checkin/login";
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // const onLogin = async () => {
  //   const loginApi = `${api}/${loginMethod}`;
  //   try {
  //     const response = await axios.postForm(loginApi, {
  //       email: email,
  //       password: password,
  //     });
  //     alert(response.data.message);
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // return (
  //   <ImageBackground
  //     source={require("../../assets/images/fondo-login.png")} // Asegúrate de tener una imagen de fondo
  //     style={styles.background}
  //   >
  //     <View style={styles.container}>
  //       <img
  //         src="../../assets/images/logo.png"
  //         width="130"
  //         style={styles.logo}
  //       ></img>
  //       <TextInput
  //         style={styles.input}
  //         placeholder="Correo electrónico"
  //         placeholderTextColor="#ccc"
  //         value={email}
  //         onChangeText={setEmail}
  //       />
  //       <View style={styles.passwordContainer}>
  //         <TextInput
  //           style={[styles.input, styles.passwordInput]}
  //           placeholder="Contraseña"
  //           placeholderTextColor="#ccc"
  //           secureTextEntry={!isPasswordVisible}
  //           value={password}
  //           onChangeText={setPassword}
  //         />
  //         <TouchableOpacity
  //           style={styles.toggleButton}
  //           onPress={() => setIsPasswordVisible(!isPasswordVisible)}
  //         >
  //           <Ionicons
  //             name={isPasswordVisible ? "eye-off" : "eye"}
  //             size={20}
  //             color="#fff"
  //           />
  //         </TouchableOpacity>
  //       </View>
  //       <TouchableOpacity style={styles.button} onPress={onLogin}>
  //         <Text style={styles.buttonText}>Iniciar Sesión</Text>
  //       </TouchableOpacity>
  //     </View>
  //   </ImageBackground>
  // );
}

const styles = StyleSheet.create({
  logo: {
    padding: 7,
    paddingBottom: 45,
  },

  background: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 10,
    alignItems: "center",
  },

  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 5,
    color: "#fff",
  },
  passwordContainer: {
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  passwordInput: {
    paddingRight: 40, // espacio para el icono
  },
  toggleButton: {
    position: "absolute",
    right: 10,
    top: 10,
    justifyContent: "center",
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#1e40ff",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
