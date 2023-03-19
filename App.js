import {Button, StyleSheet, Text, View} from 'react-native';

import React, { useState } from 'react';
import getLocation from './src/components/getLocation';
import getDeviceInfo from './src/components/getDeviceInfo';

export default function App() {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [ip, setIp] = useState();
  const [appName, setAppName] = useState();
  const [brand, setBrand] = useState();

  const getCurrentPosition = () => {
    getLocation(setLatitude, setLongitude);
  }

  const getcurrentDeviceInfo = ()=> {
    getDeviceInfo(setIp, setAppName, setBrand);
  }

  const onSubmit = () => {
    console.log(latitude);
    console.log(longitude);
    console.log(ip);
    console.log(appName);
    console.log(brand);
  }

  return (
    <View>
      <Button title='getLocation' onPress={getCurrentPosition}/>
      <Button title='getDeviceInfo' onPress={getcurrentDeviceInfo}/>
      <Button title='submit' onPress={onSubmit}/>
    </View>
  );
}

const styles = StyleSheet.create({});
