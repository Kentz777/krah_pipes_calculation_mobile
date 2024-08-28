import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native';
import Loader from '../components/Loader';
import Button from '../components/Button';
import CustomHeader from '@/components/CustomHeader';

import cpImage from '../assets/images/screen.png';

const { width, height } = Dimensions.get('window');

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
    <SafeAreaView style={styles.safeArea}>
      <CustomHeader />
      <View style={styles.container}>
        <Text style={styles.text}>WELCOME</Text>
        <Image style={styles.image} source={cpImage} />
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia in, rerum ipsam a rem.
        </Text>
        <Button name='Continue' route='/page2' />
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
  text: {
    fontSize: width * 0.08, // Responsive font size
    marginBottom: height * 0.05, // Responsive margin
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    marginBottom: height * 0.02, // Responsive margin
  },
  text2: {
    fontSize: width * 0.04, // Responsive font size
    textAlign: 'center',
    marginBottom: height * 0.05, // Responsive margin
    color: 'black',
  },
});

export default Index;
