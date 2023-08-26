import { configureStore } from '@reduxjs/toolkit';
import markersReducer from './slices/markers';

export const store = configureStore({
  reducer: {
    markers: markersReducer,
  }
});
