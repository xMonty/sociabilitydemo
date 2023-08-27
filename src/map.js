import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import SlidingUpPanel from 'rn-sliding-up-panel';
import VenueDetails from './components/VenueDetails';
import Accessibility from './components/Accessibility';
import Photos from './components/Photos';
import Reviews from './components/Reviews';
import TopImages from './components/TopImages';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMarkers, loadMarkers, selectMarker } from './store/slices/markers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyMapView = (props) => {
  const [isPanelUp, setIsPanelUp] = useState(false);
  const markers = useSelector(state => state.markers.markers);
  const selectedMarker = useSelector(state => state.markers.selectedMarker);

  const dispatch = useDispatch();

  const slidingUpPanelRef = useRef(null);
  const screenHeight = Dimensions.get('window').height;

  useEffect(() => {
    AsyncStorage.getItem('markers').then((markers) => {
      if (markers) {
        dispatch(loadMarkers(JSON.parse(markers)));
      }
    });
    dispatch(fetchMarkers());
  }, []);

  useEffect(() => {
    console.log(markers);
  }, [markers]);

  useEffect(() => {
    if (slidingUpPanelRef.current && selectedMarker) {
      slidingUpPanelRef.current.show(400);
    }
  }, [selectedMarker]);

  const handleMarkerPress = (marker) => {
    dispatch(selectMarker(marker));
  };

  const panelTopAnchor = screenHeight - 200;
  const panelMidAnchor = 400;

  return (
    <View style={styles.container}>
      <MapView 
        accessibilityLabel="Map showing markers"
        accessibilityHint="Double-tap to interact with the map."
        style={styles.map} 
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 51.5074,
          longitude: -0.1278,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {
          markers && markers.map((marker, index) => (
            <Marker
              accessibilityLabel="Marker for London, the capital of England."
              accessibilityHint="Tap to view more information." 
              key={index}
              coordinate={{
                latitude: marker.gps.latitude,
                longitude: marker.gps.longitude,
              }}
              onPress={()=>{ handleMarkerPress(marker); }}
            />
          ))
        }
      </MapView>
      { isPanelUp && <TopImages onClose={()=>{ slidingUpPanelRef.current.hide(); setIsPanelUp(false); }} />}
      <SlidingUpPanel 
        accessibilityLabel="Information panel"
        accessibilityHint="Slide up to view more information."
        ref={c => (slidingUpPanelRef.current = c)}
        draggableRange={{ top: panelTopAnchor, bottom: 0 }}
        snappingPoints={[panelTopAnchor, panelMidAnchor, 0]}
        showBackdrop={false}
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
              <View style={styles.scrollView}>
                <VenueDetails />
                <Accessibility />
                <Photos />
                <Reviews />
              </View>
            </ScrollView>
          </View>
        )}
      </SlidingUpPanel>
    </View>
  )
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
  scrollView: {
    height: 1900,
  }
});

export default MyMapView;