import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../pages/Home";
import Abastecimento from "../pages/Abastecimento";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Abastecimento"
        component={Abastecimento}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Main;
