import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import Loader from '../components/Loader'; // A
import Button from '../components/Button';

import cpImage from '../assets/images/screen.png';

const Index: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch or any async operation
    const fetchData = async () => {
      try {
        // Simulate a delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        // Handle errors here
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>WELCOME</Text>
      <Image style={styles.image} source={cpImage} />
      <Text style={styles.text2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia in, rerum ipsam a rem.
      </Text>
      <Button name='Continue' route='/menu/' />   
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '8%',
  },
  text: {
    fontSize: 32,
    fontFamily: 'Rubik',
    marginBottom: 80,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    marginBottom: 10,
  },
  text2: {
    fontSize: 16,
    fontFamily: 'Rubik',
    textAlign: 'center',
    marginBottom: 50,
    color: 'black',
  },
});
