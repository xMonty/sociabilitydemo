import React, { useEffect, useRef, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import { Dimensions } from 'react-native';
import VenueDetails from './src/components/VenueDetails';

export default function App() {
  const [isPanelUp, setIsPanelUp] = useState(false);

  const slidingUpPanelRef = useRef(null);
  const screenHeight = Dimensions.get('window').height;

  const handleMarkerPress = () => {
    if (slidingUpPanelRef.current) {
      slidingUpPanelRef.current.show(400);
    }
  };

  const panelTopAnchor = screenHeight - 200;
  const panelMidAnchor = 400;

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 51.5074,
          longitude: -0.1278,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker 
          coordinate={{ latitude: 51.5074, longitude: -0.1278 }}
          title="London"
          description="Capital of England"
          onPress={handleMarkerPress}
        />
      </MapView>
      { isPanelUp && <View style={styles.backgroundImage} height={220} />}
      <SlidingUpPanel 
        ref={c => (slidingUpPanelRef.current = c)}
        draggableRange={{ top: panelTopAnchor, bottom: 0 }}
        snappingPoints={[panelTopAnchor, panelMidAnchor, 0]}
        backdropOpacity={0}
        onDragStart={(value, gestureState) => {
          if (value < panelTopAnchor) {
            setIsPanelUp(false);
          }
        }}
        onMomentumDragEnd={(value, gestureState) => {
          if (value >= panelTopAnchor) {
            setIsPanelUp(true);
          } else {
            setIsPanelUp(false);
          }
        }}
      >
        {dragHandler => (
          <View style={styles.panelContainer}>
            <View style={styles.dragHandler} {...dragHandler}>
              <View style={styles.dragBar}/>
            </View>
            <ScrollView>
              <VenueDetails />
            </ScrollView>
          </View>
        )}
      </SlidingUpPanel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  panelContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dragHandler: {
    alignSelf: 'stretch',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  dragBar: {
    width: 40,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#00000040',
  },
  backgroundImage: {
    position: 'absolute', // Ensure the image is below other components
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
  },
});
