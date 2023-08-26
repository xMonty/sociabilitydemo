import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ReviewCard = ({ review }) => {
  const images = [
    'https://www.w3schools.com/w3images/lights.jpg',
    'https://www.w3schools.com/w3images/mountains.jpg',
    'https://www.w3schools.com/w3images/nature.jpg',
    'https://www.w3schools.com/w3images/snow.jpg',
  ];
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image style={styles.avatar} source={{ uri: "https://www.w3schools.com/w3images/snow.jpg" }}/>
        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{review.name}</Text>
          <Text>6 days ago</Text>
        </View>
      </View>
      <View style={{ borderRadius: 12, backgroundColor: '#DEDDF7', marginTop: 10, justifyContent: 'center', alignItems: 'center', padding: 4, width: 120 }}>
        <Text>Partially Blind</Text>
      </View>
      <View style={{ marginTop: 10 }}>
        <Text>
          {review.text}
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {review.images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 16,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 1,
    borderRadius: 18,
    padding: 16,
    width: 300,
    ...Platform.select({
      ios: {
        shadowColor: '#707070',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 4,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 16,
    marginTop: 16,
    borderRadius: 12,
  }
});
export default ReviewCard;