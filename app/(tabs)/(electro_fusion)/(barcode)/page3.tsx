import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageIndicator from '@/components/PageIndicator';

const page3 = () => {
  return (
    <View style={styles.container}>
      <Text>page3</Text>
      <PageIndicator pageName='Barcodes'/>
    </View>
  )
}

export default page3

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})