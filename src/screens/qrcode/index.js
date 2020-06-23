import React, {useState} from 'react';
import {Text, TouchableOpacity, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';

export default function QRCode() {
  const [url, setURL] = useState('');

  const teste = () => {
    Linking.openURL(url);
  };

  return (
    <>
      <QRCodeScanner
        onRead={event => setURL(event.data)}
        showMarker={true}
        bottomContent={
          <TouchableOpacity
            style={styles.buttonTouchable}
            onPress={() => teste()}>
            <Text style={styles.buttonText}>{url}</Text>
          </TouchableOpacity>
        }
      />
    </>
  );
}
