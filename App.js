import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import MyMapView from './src/map';

export default function App() {
  return (
    <Provider store={store}>
      <MyMapView />
    </Provider>
  );
}
