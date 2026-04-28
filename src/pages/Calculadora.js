import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Appbar, TextInput, Button, Text } from "react-native-paper";

import Container from "./../components/Container";
import Header from "./../components/Header";
import Body from "./../components/Body";
import Input from "./../components/Input";

export default function Calculadora() {
  const [gas, setGas] = useState("");
  const [eta, setEta] = useState("");
  const [res, setRes] = useState("");

  const handleCalcular = () => {
    if (!gas || gas <= 0 || !eta || eta <= 0) {
      Alert.alert(
        "Atenção",
        "Por favor, preencha todos os campos com valores válidos.",
      );
    } else {
      const valorGas = parseFloat(gas);
      const valorEta = parseFloat(eta);
      const resultado = Math.round((valorEta / valorGas) * 100);

      if (resultado < 70) {
        setRes(
          resultado.toFixed(2) + "% - É mais vantajoso abastecer com etanol.",
        );
      } else {
        setRes(
          resultado.toFixed(2) + "% - É mais vantajoso abastecer com gasolina.",
        );
      }
    }
  };

  return (

      <Container>
        <Header title="Calculadora Flex" />

        <Body>
          <Input
            label="Preço da gasolina"
            value={gas}
            onChangeText={(text) => setGas(text)}
          />
          <Input
            label="Preço do etanol"
            value={eta}
            onChangeText={(text) => setEta(text)}
          />
          <Button icon="calculator" mode="contained" onPress={handleCalcular}>
            Calcular
          </Button>

          <Text style={styles.text}> {res} </Text>
        </Body>
      </Container>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  },
});
