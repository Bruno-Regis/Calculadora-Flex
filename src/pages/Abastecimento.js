import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { List, Text, FAB } from "react-native-paper";

import { useNavigation } from "@react-navigation/native";

import Header from "../components/Header";
import Container from "../components/Container";
import Body from "../components/Body";

const Abastecimento = () => {
  
    const navigation = useNavigation();

  return (
    <Container>
      <Header 
      title={"Abastecimento"}
      goBack={() => navigation.goBack()}
       />
      <Body>
      </Body>
    </Container>
  );
};

export default Abastecimento;