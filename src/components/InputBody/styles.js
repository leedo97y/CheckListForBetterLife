import { StyleSheet } from "react-native";
import { theme } from "../../util/color";

const styles = StyleSheet.create({
  inputView: {
    flex: 1,
  },
  inputText: {
    color: theme.whiteText,
    marginTop: 30,
    fontSize: 20,
    fontWeight: 500,
  },
  input: {
    color: theme.whiteText,
    backgroundColor: theme.whiteText,
    marginTop: 10,
  },
});

export default styles;
