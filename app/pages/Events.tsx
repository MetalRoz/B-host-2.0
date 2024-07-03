import React, { useEffect, useState } from "react";
import { Button, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Events({ navigation }: any) {
  const [data, setData] = useState([]);

  const consultaApi = async (token: any) => {
    const apiEventsLive = "https://proyectojc.com/api/v2/event/live";
    console.log(token)

    const options = {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    try {
      const response = await fetch(apiEventsLive, options);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("Respuesta de la API:", data);
      setData(data.data); // Actualizar el estado con los datos recibidos
    } catch (error) {
      console.error("Error en la solicitud:", error);
    }
  };

  const obtenerToken = async () => {
    const tokenStorage = await AsyncStorage.getItem("token");
    if (tokenStorage !== null) {
      consultaApi(tokenStorage)
    }
  };

  useEffect(() => {
    obtenerToken()
  }, []);

  const renderItems = () => {
    if (data.length === 0) {
      return <Text>No hay datos disponibles.</Text>;
    }

    return data.map((item, index) => (
      <View key={index} style={{ marginBottom: 10 }}>
        <Text>{`Item ${index + 1}: ${item}`}</Text>
        {/* Añade más campos según la estructura de tus datos */}
      </View>
    ));
  };

  return (
    <View>
      <View style={{ marginTop: 20 }}>{renderItems()}</View>
      <TouchableOpacity
        style={styles.button}
        onPress={async () => {
          await AsyncStorage.removeItem("token").then(()=> {
            navigation.navigate('Login')
          })
        }}
      >
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
