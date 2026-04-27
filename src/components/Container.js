import react from "react";
import { StyleSheet, View } from "react-native";

const Container = ({ children }) => { // todo conteúdo queeu passar na props vai ser renderizado aqui dentro
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Container;