import react from "react";
import { StyleSheet, View } from "react-native";
import { Appbar } from "react-native-paper";

const Header = ({ title, goBack, children }) => {
  // todo conteúdo queeu passar na props vai ser renderizado aqui dentro
  return (
    <Appbar.Header>
      {goBack && <Appbar.BackAction onPress={goBack} />}

      <Appbar.Content title={title} />
      {children}
    </Appbar.Header>
  );
};

export default Header;
