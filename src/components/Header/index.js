import styles from "./styles";
import { Text, View, TouchableOpacity } from "react-native";
import { theme } from "../../util/color";

const Header = ({ isWorking, setIsWorking }) => {
  const work = () => setIsWorking(true);
  const travel = () => setIsWorking(false);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={work}>
        <Text
          style={{
            ...styles.btnText,
            color: isWorking ? theme.whiteText : theme.grey,
          }}
        >
          Work
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={travel}>
        <Text
          style={{
            ...styles.btnText,
            color: !isWorking ? theme.whiteText : theme.grey,
          }}
        >
          Travel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
