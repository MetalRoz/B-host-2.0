import React from "react";
import { Alert, Button, Pressable } from "react-native";


export default function Orders({navigation}) {


  return <Button title={"2-Button Alert"} onPress={() => navigation.navigate("Events")} />;
}
