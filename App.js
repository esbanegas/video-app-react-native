import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CardSet } from "./components/CardSet";
import { data } from "./data";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Bienvenidos</Text>
      <CardSet items={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  welcome: {
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 30,
    color: "#000",
    textAlign: "center",
  },
});
