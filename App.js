import { useState } from "react";
import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./src/components/Header/index";
import InputBody from "./src/components/InputBody";

export default function App() {
  const [isWorking, setIsWorking] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header isWorking={isWorking} setIsWorking={setIsWorking} />
      <InputBody />
    </View>
  );
}
