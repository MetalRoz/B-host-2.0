import React from "react";
import axios from "axios";
import { Button } from "react-native";

export default function Events({ route }) {
  const apiEventsLive = `https://proyectojc.com/api/v2/event-list`;

  const consultaApi = async () => {
    const { token } = route.params;
    console.log(token)
    const options = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    try {
      fetch(apiEventsLive, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return <Button title="Consultar API" onPress={consultaApi} />;
}
