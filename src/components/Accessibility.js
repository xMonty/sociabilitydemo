import { StyleSheet, Text, View } from "react-native"
import AccessibilitySection from "./AccessibilitySection";
import AddButton from "./AddButton";

const Accessibility = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility</Text>
      <AccessibilitySection />
      <AddButton text="Add Accessibility Tags" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
})
export default Accessibility