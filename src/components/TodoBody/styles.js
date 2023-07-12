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
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 30,
    fontSize: 18,
  },
  listItemView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    backgroundColor: theme.todoBg,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
  },
  listItem: {
    color: theme.whiteText,
    fontSize: 16,
    fontWeight: 500,
  },
  btnView: {
    flexDirection: "row",
    gap: 10,
  },
});

export default styles;
