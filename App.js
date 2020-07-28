import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps'
export default
class App extends React.Component {
  render() {
    return (
      <MapView
         style={{ ...StyleSheet.absoluteFillObject }}
         initialRegion={{
            latitude: 49.840722,
            longitude: 18.288480,
            latitudeDelta: .005,
            longitudeDelta: .005
         }} >

         <MapView.Marker
            coordinate={{ latitude: 49.840722, longitude: 18.288480 }}
            title='Ostravská Univerzita'
            description='Hledané místo na mapě'
      />
      </MapView>
    );
  }
}
