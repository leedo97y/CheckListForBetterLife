import { useState, useRef, useEffect } from "react";
import { theme } from "../../util/color";
import { STORAGE_KEY } from "../../util/keys";
import styles from "./styles";
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

const TodoBody = ({ isWorking }) => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState({});

  const inputRef = useRef();

  useEffect(() => {
    loadTodos();
  }, []);

  const saveTodos = async (savedTodos) => {
    try {
      const jsonTodoVaule = JSON.stringify(savedTodos);
      await AsyncStorage.setItem(STORAGE_KEY, jsonTodoVaule);
    } catch (err) {
      console.log(err);
    }
  };

  const loadTodos = async () => {
    const str = await AsyncStorage.getItem(STORAGE_KEY);
    setTodos(JSON.parse(str));
  };

  const onChangeText = (payload) => {
    setText(payload);
  };

  const addTodoList = async () => {
    if (text === "") {
      return;
    }

    const newTodos = {
      ...todos,
      [Date.now()]: { text, isWorking, done: false },
    };

    setTodos(newTodos);
    inputRef.current.clear();
    await saveTodos(newTodos);
    setText("");
  };

  const deleteTodo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      {
        text: "Yes",
        style: "destructive",
        onPress: async () => {
          const copiedTodos = { ...todos };
          delete copiedTodos[key];
          setTodos(copiedTodos);
          await saveTodos(copiedTodos);
        },
      },
      { text: "Cancel", style: "destructive" },
    ]);
    return;
  };

  const doneTodo = (id) => {
    const copiedTodos = { ...todos };
    Object.keys(copiedTodos).map(async (key) => {
      if (id === key) {
        copiedTodos[id].done = !copiedTodos[id].done;
        setTodos(copiedTodos);
        await saveTodos(copiedTodos);
      }
    });
  };

  return (
    <View style={styles.inputView}>
      <TextInput
        value={text}
        ref={inputRef}
        returnKeyType="done"
        placeholder={isWorking ? "Add To-Do" : "Where do you want to go?"}
        style={styles.input}
        onChangeText={onChangeText}
        onSubmitEditing={addTodoList}
      />
      <ScrollView>
        {Object.keys(todos).map((key) =>
          todos[key].isWorking === isWorking ? (
            <View key={key} style={styles.listItemView}>
              <Text
                style={[
                  styles.listItem,
                  {
                    textDecorationLine:
                      todos[key].done === true ? "line-through" : "none",
                  },
                ]}
              >
                {todos[key].text}
              </Text>
              <View style={styles.btnView}>
                <TouchableOpacity onPress={() => doneTodo(key)}>
                  <MaterialIcons name="done" size={22} color={theme.grey} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTodo(key)}>
                  <MaterialIcons name="delete" size={22} color={theme.grey} />
                </TouchableOpacity>
              </View>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
};

export default TodoBody;
