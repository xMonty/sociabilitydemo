import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AddButton from "./AddButton";
import { useSelector } from 'react-redux';

const { width } = Dimensions.get('window');

const Photos = () => {
  const selectedMarker = useSelector(state => state.markers.selectedMarker);
  
  if (!selectedMarker) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.title}>Photos</Text>
        <Text style={{ color: 'blue' }}>See all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {selectedMarker.images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
          />
        ))}
      </ScrollView>
      <View style={{ width: 160 }}><AddButton text="Add Photo" /></View>
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
  horizontalScroll: {
    marginTop: 16,
  },
  image: {
    width: 120,
    height: 120,
    marginRight: 16,
    marginTop: 16,
    borderRadius: 12,
  },
})
export default Photos;
