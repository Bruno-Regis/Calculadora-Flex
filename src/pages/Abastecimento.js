import React, { useState } from "react";
import { StyleSheet, FlatList, View, TouchableOpacity } from "react-native";
import { RadioButton, Text, TextInput, Button } from "react-native-paper";

import moment from "moment";
import DateTimePicker from "@react-native-community/datetimepicker";

import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";

const Abastecimento = () => {
  const navigation = useNavigation();
  const [tipo, setTipo] = useState("gas");
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const [preco, setPreco] = useState("");
  const [valor, setValor] = useState("");
  const [odometro, setOdometro] = useState("");
  const [data, setData] = useState("");

  const handleSalvar = () => {
    // Lógica para salvar os dados do abastecimento
    console.log("Tipo:", tipo);
    console.log("Preço:", preco);
    console.log("Valor:", valor);
    console.log("Odômetro:", odometro);
    console.log("Data:", data);
  };

  return (
    <Container>
      <Header title={"Abastecimento"} goBack={() => navigation.goBack()} />
      <Body>
        <View style={styles.radioButtoms}>
          <View style={styles.item}>
            <RadioButton
              value="first"
              status={tipo === "gas" ? "checked" : "unchecked"}
              onPress={() => setTipo("gas")}
              color="red"
            />
            <Text>Gasolina</Text>
          </View>

          <View style={styles.item}>
            <RadioButton
              value="second"
              status={tipo === "eta" ? "checked" : "unchecked"}
              onPress={() => setTipo("eta")}
              color="green"
            />
            <Text>Etanol</Text>
          </View>
        </View>

        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            onTouchCancel={() => setShow(false)}
            onValueChange={(event, selectedDate) => {
              setShow(false);
              setData(moment(selectedDate).format("YYYY/MM/DD"));
            }}
            onDismiss={() => setShow(false)}
          />
        )}

        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label="Data"
            value={data}
            left={<TextInput.Icon icon="calendar" />}
            editable={false}
          />
        </TouchableOpacity>

        <Input
          label="Preco"
          value={preco}
          onChangeText={(text) => setPreco(text)}
          left={<TextInput.Icon icon="currency-brl" />}
        />

        <Input
          label="Valor"
          value={valor}
          onChangeText={(text) => setValor(text)}
          left={<TextInput.Icon icon="currency-brl" />}
        />

        <Input
          label="Odometro   "
          value={odometro}
          onChangeText={(text) => setOdometro(text)}
          left={<TextInput.Icon icon="camera-timer" />}
        />
      </Body>

      <Button
        style={styles.button}
        mode="contained"
        buttonColor="red"
        onPress={handleSalvar}
      >
        Excluir
      </Button>

      <Button style={styles.button} mode="contained" onPress={handleSalvar}>
        Salvar
      </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  radioButtoms: {
    flexDirection: "row",
    alignItems: "center",
    gap: 40,
  },
  button: {
    margin: 10,
  },
});

export default Abastecimento;
