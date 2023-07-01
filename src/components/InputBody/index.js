import { useState } from "react";
import styles from "./styles";
import { Text, View, TextInput } from "react-native";
import { theme } from "../../util/color";

const InputBody = () => {
  return (
    <View style={styles.inputView}>
      <Text style={styles.inputText}>To-Do list for work</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default InputBody;
