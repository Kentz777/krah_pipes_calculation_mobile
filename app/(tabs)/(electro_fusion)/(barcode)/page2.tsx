import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageIndicator from '@/components/PageIndicator';

const page2 = () => {
  return (
    <View style={styles.container}>
      <Text>page2</Text>
      <PageIndicator pageName='Barcodes' />
    </View>
  )
}

export default page2

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})