import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const fetchMarkers = createAsyncThunk('markers/fetchMarkers', async () => {
  const response = await fetch('https://my-json-server.typicode.com/xmonty/sociabilitydemo/markers')
  const json = await response.json()
  await AsyncStorage.setItem('markers', JSON.stringify(json));
  return json
});

const markersSlice = createSlice({
  name: "markers",
  initialState: {
    markers: [],
    selectedMarker: null,
  },
  reducers: {
    selectMarker(state, action) {
      state.selectedMarker = action.payload
    },
    loadMarkers(state, action) {
      state.markers = action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchMarkers.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchMarkers.fulfilled, (state, action) => {
      state.markers = action.payload
      state.loading = false
    })
    builder.addCase(fetchMarkers.rejected, state => {
      state.loading = false
    })
  }
})

export const { selectMarker, loadMarkers } = markersSlice.actions
export default markersSlice.reducer
