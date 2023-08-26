import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AddButton, FavoriteButton, QRButton, ShareButton } from './Buttons';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import Ionicons from '@expo/vector-icons/Ionicons';

const VenueDetails = () => {
  return (
    <View style={styles.container}>
      <Text>Restaurant | 0.7 Miles away</Text>
      <Text style={styles.name}>Cecconi's Pizza Bar</Text>
      <View style={styles.divider} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 6, paddingRight: 6, paddingTop: 10, paddingBottom: 10 }}>
        <ShareButton />
        <QRButton />
        <FavoriteButton />
        <AddButton />
      </View>
      <View style={styles.divider} />
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Ionicons name="location" size={26} color="#19165C" />
        <Text style={{ fontSize: 16, paddingStart: 6}}>19-21 Old Compton St, West End</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
        <Ionicons name="earth" size={26} color="#19165C" />
        <Text style={{ fontSize: 16, paddingStart: 6}}>www.gelupo.com</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
        <Ionicons name="phone-portrait-outline" size={26} color="#19165C" />
        <Text style={{ fontSize: 16, paddingStart: 6}}>+ 44 44 4334-4634</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
        <Ionicons name="alarm-outline" size={26} color="#19165C" />
        <Text style={{ fontSize: 16, paddingStart: 6}}>Opening hours - 9:00 - 22:00</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, backgroundColor: '#FFEFDC', padding: 6, borderRadius: 4 }}>
        <Text>5/5 </Text><Ionicons name="star" size={18} color="#EC7E00" /><Text> Google Reviews</Text>
      </View>
      <View style={styles.divider} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#DCE1F4',
    marginTop: 16,
    marginBottom: 16,
  }
})
export default VenueDetails