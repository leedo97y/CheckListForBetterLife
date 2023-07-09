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
    backgroundColor: theme.whiteText,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    fontSize: 18,
  },
});

export default styles;
