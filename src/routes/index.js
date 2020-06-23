import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import CurrentPosition from '../screens/currentPosition';
import PhotoEmail from '../screens/photoEmail';
import QRCode from '../screens/qrcode';
import RouteUNIPAM from '../screens/routeUNIPAM';

const Tab = createBottomTabNavigator();

MaterialIcon.loadFont();

export default function Routes() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FFF',
        tabStyle: {
          backgroundColor: '#283343',
        },
      }}>
      <Tab.Screen
        name="Email"
        component={PhotoEmail}
        options={{
          tabBarLabel: 'Email',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="email" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Posição"
        component={CurrentPosition}
        options={{
          tabBarLabel: 'Geolocalização',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="location-on" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="QR Code"
        component={QRCode}
        options={{
          tabBarLabel: 'QR Code',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="camera-alt" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="UNIPAM"
        component={RouteUNIPAM}
        options={{
          tabBarLabel: 'UNIPAM',
          tabBarIcon: ({color, size}) => (
            <MaterialIcon name="directions" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
