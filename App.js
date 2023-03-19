import {Button, StyleSheet, Text, View} from 'react-native';

import React, { useState } from 'react';
import getLocation from './src/components/getLocation';

export default function App() {

  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  const getCurrentPosition = () => {
    getLocation(setLatitude, setLongitude);
  }

  return (
    <View>
      <Button title='getLocation' onPress={getCurrentPosition}/>
    </View>
  );
}

const styles = StyleSheet.create({});
