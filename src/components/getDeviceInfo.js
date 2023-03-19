import { StyleSheet, Text, View } from 'react-native'
import DeviceInfo from 'react-native-device-info';
import React from 'react'

export default function getDeviceInfo(setIp, setAppName, setBrand) {
    DeviceInfo.getIpAddress().then((ip) => {
        setIp(ip);
      });
      const appName = DeviceInfo.getApplicationName()
      const brand = DeviceInfo.getBrand();
      setAppName(appName)
      setBrand(brand);
}

const styles = StyleSheet.create({})