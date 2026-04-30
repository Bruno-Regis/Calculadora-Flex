import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { List, Text, FAB } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import Container from "../components/Container";
import Body from "../components/Body";

const DATA = [
  {
    id: 1,
    tipo: 0,
    data: "2024/06/01",
    preco: 6.77,
    valor: 100.0,
    odometro: 5000,
  },
  {
    id: 2,
    tipo: 1,
    data: "2024/06/15",
    preco: 4.67,
    valor: 100.0,
    odometro: 5100,
  },
  {
    id: 3,
    tipo: 1,
    data: "2024/06/20",
    preco: 4.77,
    valor: 100.0,
    odometro: 5200,
  },
];

const Gastos = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <List.Item
      title={`R$ ${item.valor.toFixed(2)} | Preço: R$ ${item.preco.toFixed(2)}`}
      description={`Tipo: ${item.odometro} Km`}
      left={(props) => (
        <List.Icon
          {...props}
          color={item.tipo === 0 ? "red" : "green"}
          icon="gas-station"
        />
      )}
      right={(props) => (
        <Text {...props} style={{ alignSelf: "center" }}>
          {" "}
          {item.data}
        </Text>
      )}
      onPress={() => navigation.navigate("Abastecimento", { item })}
    />
  );

  return (
    <Container>
      <Header title={"Fuel Manager"} />

      <Body>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Body>

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate("Abastecimento")}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default Gastos;
