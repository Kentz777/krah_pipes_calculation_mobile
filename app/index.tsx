import React from 'react'
import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const index = () => {
    const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Whereas disregard and contempt for human rights have resulsted</Text>
    <Button
        title="Go to Tabs Index"
        onPress={() => router.push('menu')}
      />
  </SafeAreaView>
  )
}

export default index

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
  