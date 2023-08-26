import React, { useState, useRef } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const TopImages = ({ onClose }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    'https://www.w3schools.com/w3images/lights.jpg',
    'https://www.w3schools.com/w3images/mountains.jpg',
    'https://www.w3schools.com/w3images/nature.jpg',
    'https://www.w3schools.com/w3images/snow.jpg',
  ];
  
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(scrollPosition / width);
    setActiveIndex(activeIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={e => handleScroll(e)}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={styles.image}
          />
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {images.map((_, i) => (
          <Text key={i} style={i === activeIndex ? styles.activeDot : styles.inactiveDot}>•</Text>
        ))}
      </View>

      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <MaterialIcons name="close" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  image: {
    width: width,
    height: 220,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDot: {
    color: 'white',
    fontSize: 24,
    margin: 3,
  },
  inactiveDot: {
    color: '#555',
    fontSize: 24,
    margin: 3,
  },
});

export default TopImages;
