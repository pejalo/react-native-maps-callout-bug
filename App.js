import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';

let markerObjects = [
  {"id":48,"title":"Helgelandskysten","longitude":"12.63376","latitude":"66.02219"},
  {"id":46,"title":"Tysfjord","longitude":"16.50279","latitude":"68.03515"},
  {"id":44,"title":"Sledehunds-ekspedisjon","longitude":"7.53744","latitude":"60.08929"},
  {"id":43,"title":"Amundsens sydpolferd","longitude":"11.38411","latitude":"62.57481"},
  {"id":39,"title":"Vikingtokt","longitude":"6.96781","latitude":"60.96335"},
  {"id":6,"title":"Tungtvann- sabotasjen","longitude":"8.49139","latitude":"59.87111"}
];

export default class App extends React.Component {
  render() {
    return (
      <MapView style={{flex: 1}}>
        {this._markers()}
      </MapView>
    );
  }
  _markers() {
    var markers = [];
    for (var i = 0; i < markerObjects.length; i++) {
      const markerObject = markerObjects[i];
      markers.push(
        <MapView.Marker
          key={i}
          coordinate={{latitude: parseFloat(markerObject.latitude), longitude: parseFloat(markerObject.longitude)}}
          title={markerObject.title}
        >
          <MapView.Callout>
            <Text>{markerObject.title}</Text>
          </MapView.Callout>
        </MapView.Marker>
      );
    }
    return markers;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
