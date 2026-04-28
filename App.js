import 'react-native-gesture-handler';
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';

import Main from "./src/navigations/main";
import Calculadora from "./src/pages/Calculadora";


export default function App() {
  const [gas, setGas] = useState("");
  const [eta, setEta] = useState("");
  const [res, setRes] = useState("");

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

