import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import Loader from '../components/Loader'; // A
import Button from '../components/Button';
import CustomHeader from '@/components/CustomHeader';
import { useFonts } from 'expo-font';

import pipesImage from '../assets/images/pipes.png'

const { width, height } = Dimensions.get('window');

const Page2: React.FC = () => {
  const [loaded] = useFonts({
    Rubik: require('../assets/fonts/Rubik.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>SOME BIG TEXT</Text>
          <Text style={styles.text2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia in, rerum ipsam a rem.
          </Text>
        </View>

        <Image style={styles.image} source={pipesImage} />
        <Button name='Get Started' route='/(tabs)' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C76D2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    backgroundColor: 'white',
  },
  textContainer: {
    marginHorizontal: width * 0.18,
  },
  text: {
    fontSize: width * 0.08, // Responsive font size
    fontFamily: 'Rubik',
    marginBottom: height * 0.03, // Responsive margin
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    marginBottom: height * 0.05, // Responsive margin
  },
  text2: {
    fontSize: width * 0.04, // Responsive font size
    fontFamily: 'Rubik',
    textAlign: 'center',
    marginBottom: height * 0.04, // Responsive margin
    color: 'black',
  },
});

export default Page2;



