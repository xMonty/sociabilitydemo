import { ScrollView, StyleSheet, Text, View } from "react-native";
import ReviewCard from "./ReviewCard";
import AddButton from "./AddButton";
import { useSelector } from 'react-redux';

const Reviews = () => {
  const selectedMarker = useSelector(state => state.markers.selectedMarker);
  if (!selectedMarker) {
    return null;
  }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>Reviews</Text>
        <Text style={{ color: 'blue' }}>See all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {
          selectedMarker.reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        }
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