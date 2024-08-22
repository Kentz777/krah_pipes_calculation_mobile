//Information Page
import { View, Text, StyleSheet} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'

const ElectroFusion = () => {
  return (
    <View  style={{ flex: 1 }}>
    <Text>Electro Fusion Page</Text>
    </View>
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
  
export default ElectroFusion