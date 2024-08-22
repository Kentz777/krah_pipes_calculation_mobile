import React, { useRef, useEffect } from 'react';
import { View, Image, Animated, StyleSheet, Text, Dimensions } from 'react-native';

import krahLogo from '../assets/images/krah_logo_TM.png'; // Adjust path as needed

const Loader: React.FC = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    );

    spin.start();

    return () => spin.stop();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.Image
        source={krahLogo}
        style={[styles.logo, { transform: [{ rotate: spin }] }]}
        resizeMode="contain" // Ensures logo maintains aspect ratio
      />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1BD15', // Background color of the loader
  },
  logo: {
    width: width * 0.8, // Adjust width to 80% of screen width
    height: height * 0.5, // Adjust height to 50% of screen height
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    color: '#000000', // Adjust text color if needed
  },
});

export default Loader;
