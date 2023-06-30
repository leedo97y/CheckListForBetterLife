import { StyleSheet } from "react-native";
import { theme } from "../../util/color";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 100,
  },

  btnText: {
    color: theme.whiteText,
    fontSize: 35,
    fontWeight: 600,
  },
});

export default styles;
