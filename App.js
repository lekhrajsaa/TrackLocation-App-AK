import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import getLocation from './src/components/getLocation';
import getDeviceInfo from './src/components/getDeviceInfo';
import setDataOnDB from './src/components/setDataOnDB';
import {PermissionsAndroid} from 'react-native';
import PermissionBtn from './src/components/PermissionBtn';
import WelcomeMessage from './src/components/WelcomeMessage';

export default function App() {
  const [ifPermission, setIfPermission] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [ip, setIp] = useState();
  const [appName, setAppName] = useState();
  const [brand, setBrand] = useState();
  const [clock, setClock] = useState();

  const requestLocationPermission = async () => {
    const chckLocationPermission = PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (chckLocationPermission === PermissionsAndroid.RESULTS.GRANTED) {
      alert("You've access for the location");
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setIfPermission(true);
          sendData()
        } else {
          setIfPermission('');
          alert('Location Permission is required');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const sendData = () => {
    // console.log(latitude);
    // console.log(longitude);
    // console.log(ip);
    // console.log(appName);
    // console.log(brand);
    getDeviceInfo(setIp, setAppName, setBrand);
    setInterval(() => {
      setClock(new Date().toLocaleString());
      getLocation(setLatitude, setLongitude);
      setDataOnDB(clock, latitude, longitude, ip, appName, brand);
      // console.log(clock);
    }, 10000);
  };

  const pressHandle = () => {
    requestLocationPermission();
  };

  // const locationHandle = () => {
  //   getLocation(setLatitude, setLongitude);
  // }

  // const deviceHandle = () => {
  //   getDeviceInfo(setIp, setAppName, setBrand);
  // }

  // const submitHandle = () => {
  //   setClock(new Date().toLocaleString());
  //   getLocation(setLatitude, setLongitude);
  //   getDeviceInfo(setIp, setAppName, setBrand);
  //   setDataOnDB(clock, latitude, longitude, ip, appName, brand);
  // }

  return (
    <View style={styles.mainContainer}>
      {ifPermission ? (
        <WelcomeMessage />
      ) : (
        <PermissionBtn onPress={pressHandle} />
      )}
      {/* <Button title='location' onPress={locationHandle} />
      <Button title='deviceInfo' onPress={deviceHandle} />
      <Button title='submit' onPress={submitHandle} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
