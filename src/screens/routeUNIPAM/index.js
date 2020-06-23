import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import mapStyle from '../../config/mapStyle.json';
import MapViewDirections from 'react-native-maps-directions';

export default function RouteUNIPAM() {
  const [location, setLocation] = useState({longitude: '', latitude: ''});

  const [UNIPAMLocation] = useState({
    longitude: -46.5158895,
    latitude: -18.5744505,
  });

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(res =>
      setLocation({
        latitude: res.coords.latitude,
        longitude: res.coords.longitude,
      }),
    );
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const renderMap = () => {
    if (location.latitude && location.longitude) {
      return (
        <MapView
          loadingEnabled
          style={styles.map}
          customMapStyle={mapStyle}
          region={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.03,
            longitudeDelta: 0.03,
          }}>
          <Marker
            coordinate={location}
            title="Você esta aqui!"
            description="Esta é a sua posição atual."
          />
          <Marker
            coordinate={UNIPAMLocation}
            title="UNIPAM"
            description="Centro Universitario de Patos de Minas"
          />
          <MapViewDirections
            origin={location}
            destination={UNIPAMLocation}
            apikey="AIzaSyAg9C7kHNkNLiTq3IBvy32W6QPnKb59ZTA"
            strokeColor="red"
            strokeWidth={3}
          />
        </MapView>
      );
    }
  };

  return (
    <>
      <View style={styles.container}>{renderMap()}</View>
    </>
  );
}
