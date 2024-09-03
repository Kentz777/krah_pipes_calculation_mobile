import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageIndicator from '@/components/PageIndicator';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>BARCODE index</Text>
      <PageIndicator pageName='Barcodes' />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})