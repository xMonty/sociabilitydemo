import { View, Text } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';

export const ShareButton = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#19165C', justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="upload" size={32} color="#FFA43C" />
      </View>
      <Text style={{ paddingTop: 6 }}>Share</Text>
    </View>
  )
}

export const QRButton = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#19165C', justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="qrcode" size={32} color="#FFA43C" />
      </View>
      <Text style={{ paddingTop: 6 }}>QR</Text>
    </View>
  )
}

export const FavoriteButton = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#19165C', justifyContent: 'center', alignItems: 'center' }}>
        <AntDesign name="heart" size={32} color="#FFA43C" />
      </View>
      <Text style={{ paddingTop: 6 }}>Favorite</Text>
    </View>
  )
}

export const AddButton = () => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 64, height: 64, borderRadius: 32, backgroundColor: '#19165C', justifyContent: 'center', alignItems: 'center' }}>
        <Ionicons name="add" size={32} color="#FFA43C" />
      </View>
      <Text style={{ paddingTop: 6 }}>Add</Text>
    </View>
  )
}