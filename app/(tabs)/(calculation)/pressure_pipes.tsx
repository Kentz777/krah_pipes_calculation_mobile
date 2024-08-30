import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';

const pressure_pipes = () => {
  const [loaded] = useFonts({
    Rubik: require('../../../assets/fonts/Rubik.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <View>
      <Text>pressure_pipes</Text>
    </View>
  )
}

export default pressure_pipes

const styles = StyleSheet.create({})