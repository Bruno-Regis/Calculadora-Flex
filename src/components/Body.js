import react from "react";
import { StyleSheet, View } from "react-native";

const Body = ({ children }) => { // todo conteúdo queeu passar na props vai ser renderizado aqui dentro
  return (
    <View style={styles.body}>
      {children}
    </View>
  );
};
 
const styles = StyleSheet.create({
  body: {
    margin: 20,
    gap: 10,
  },
});

export default Body;