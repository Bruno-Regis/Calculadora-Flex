import react from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

const Input = (props) => { // todo conteúdo queeu passar na props vai ser renderizado aqui dentro
  return (
    <TextInput
    style={styles.input}
    keyboardType="decimal-pad"
    {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#fff",
    marginBottom: 10,
  },
});

export default Input;