import styles from "./styles";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./src/components/Header/index";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
    </View>
  );
}
