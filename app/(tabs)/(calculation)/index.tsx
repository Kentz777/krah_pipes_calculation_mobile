import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BottomNav from '@/components/BottomNav';
import { useFonts } from 'expo-font';


const index = () => {
  const [loaded] = useFonts({
    Rubik: require('../../../assets/fonts/Rubik.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Text>calc1</Text>
      <Text>calc1</Text>
      <Text>calc1</Text>
      <Text>calc1</Text>
      <Text>calc1</Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})