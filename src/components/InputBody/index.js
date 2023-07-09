import { useState, useRef } from "react";
import styles from "./styles";
import { Text, View, TextInput } from "react-native";

const InputBody = ({ isWorking }) => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});

  const inputRef = useRef();

  const onChangeText = (payload) => {
    setText(payload);
  };

  const onReset = () => {
    if (text === "") {
      return;
    }
    inputRef.current.clear();
  };

  const addTodoList = () => {
    if (text === "") {
      return;
    }

    const newTodos = Object.assign({}, todos, {
      [Date.now()]: { text, work: isWorking },
    });
    setTodos(newTodos);
  };

  onReset();

  console.log(todos);

  return (
    <View style={styles.inputView}>
      {/* <Text style={styles.inputText}>To-Do list for work</Text> */}
      <TextInput
        ref={inputRef}
        returnKeyType="done"
        placeholder={isWorking ? "Add To-Do" : "Where do you want to go?"}
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={addTodoList}
      />
    </View>
  );
};

export default InputBody;
