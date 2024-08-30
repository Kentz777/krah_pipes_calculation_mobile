import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';


const quick_structural_calculation = () => {
  const [loaded] = useFonts({
    Rubik: require('../../../assets/fonts/Rubik.ttf'),
  });

  if (!loaded) {
    return null;
  }
  
  return (
    <View>
      <Text>quick_structural_calculation</Text>
    </View>
  )
}

export default quick_structural_calculation

const styles = StyleSheet.create({})