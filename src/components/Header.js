import react from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

const Header = ({ title, goBack }) => {
  // todo conteúdo queeu passar na props vai ser renderizado aqui dentro
  return (
    <Appbar.Header>
      {goBack && <Appbar.BackAction onPress={goBack} />}

      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default Header;
