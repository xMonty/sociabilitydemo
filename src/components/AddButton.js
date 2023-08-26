import { StyleSheet, Text, View } from "react-native";
import Ionic from '@expo/vector-icons/Ionicons';

const AddButton = ({ text }) => {
  return (
    <View style={styles.container}>
      <Ionic name="add-circle" size={32} color="#FFA43C" />
      <Text style={styles.title}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFEFDC',
    padding: 8,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#FFA43C',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 250,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
export default AddButton;