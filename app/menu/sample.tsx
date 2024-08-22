import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const sample = () => {
  return (
    <SafeAreaView  style={{ flex: 1 }}>
    <Text>Page 2</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '8%',
    },
    text: {
      fontSize: 20, 
    },
  });
  
export default sample