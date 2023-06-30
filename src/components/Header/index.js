import styles from "./styles";
import { Text, View, TouchableOpacity } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text style={styles.btnText}>Work</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.btnText}>Travel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
