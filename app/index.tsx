import React, { useState, useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button, SafeAreaView } from 'react-native';
import Loader from '../components/Loader'; // A

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
      <Text style={styles.text}>Whereas disregard and contempt for human rights have resulted</Text>
      <Button
        title="Go to Tabs Index"
        onPress={() => router.push('/menu')}
      />
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
    fontSize: 20,
    fontFamily: 'Rubik',
  },
});
