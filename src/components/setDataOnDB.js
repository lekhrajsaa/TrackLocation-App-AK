import {StyleSheet, Text, View} from 'react-native';
import database from '@react-native-firebase/database';
import React from 'react';

export default async function setDataOnDB(latitude, longitude, ip, appName, brand) {
  try {
    const response = await database()
      .ref('/users/1')
      .set({
        lat: latitude,
        lon: longitude,
        ip: ip,
        srcApp: appName,
        brand: brand,
      });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

const styles = StyleSheet.create({});
