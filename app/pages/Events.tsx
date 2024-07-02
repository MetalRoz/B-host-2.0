import React, { useEffect, useState } from "react";
import { Button, View, Text } from "react-native";

export default function Events({ route }: any) {
  const [data, setData] = useState([]);

  const consultaApi = async () => {
    const { token } = route.params;
    const apiEventsLive = "https://proyectojc.com/api/v2/event/live";
    console.log("Token usado:", token);

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

  useEffect(() => {
    consultaApi(); // Llamar a consultaApi al montarse el componente
  }, []); // Array vacío para ejecutar solo una vez al montarse

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
    </View>
  );
}
