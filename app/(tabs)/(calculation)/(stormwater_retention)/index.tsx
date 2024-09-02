import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PageIndicator from '@/components/PageIndicator';

const index = () => {
  return (
    <View style={styles.container}>
      <Text>stomrwatercaclindex</Text>
      <PageIndicator pageName='Stormwater Retention' />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})