import react from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

const Header = ({ title }) => { // todo conteúdo queeu passar na props vai ser renderizado aqui dentro
  return (
    <Appbar.Header>
        <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;