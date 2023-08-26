import { ScrollView, StyleSheet, Text, View } from "react-native";
import ReviewCard from "./ReviewCard";
import AddButton from "./AddButton";

const Reviews = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>Reviews</Text>
        <Text style={{ color: 'blue' }}>See all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <ReviewCard review={{}} />
        <ReviewCard review={{}} />
      </ScrollView>
      <View style={{ width: 160 }}><AddButton text="Add Review" /></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Reviews;