import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';


const stormwater_retention = () => {
  const [loaded] = useFonts({
    Rubik: require('../../../assets/fonts/Rubik.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <View>
      <Text>stormwater_retention</Text>
    </View>
  )
}

export default stormwater_retention

const styles = StyleSheet.create({})