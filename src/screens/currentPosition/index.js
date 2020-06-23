import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import styles from './styles';
import MapView, {Marker} from 'react-native-maps';
import mapStyle from '../../config/mapStyle.json';

export default function CurrentPosition() {
  const [location, setLocation] = useState({longitude: '', latitude: ''});

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
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          }}>
          <Marker
            coordinate={location}
            title="Você esta aqui!"
            description="Esta é a sua posição atual."
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
