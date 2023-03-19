import {StyleSheet, Text, View} from 'react-native';
import GetLocation from 'react-native-get-location';
import React from 'react';

export default function getLocation(currentLatitude, currentLongitude) {
  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 2500,
  })
    .then(location => {
      console.log(location);
      currentLatitude(location.latitude);
      currentLongitude(location.longitude);
    })
    .catch(error => {
      const {code, message} = error;
      console.warn(code, message);
    });
}

const styles = StyleSheet.create({});
