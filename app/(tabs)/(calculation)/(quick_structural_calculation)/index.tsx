import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageIndicator from '@/components/PageIndicator'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>QSC index</Text>
      <PageIndicator pageName='Quick Structural Calculation' />
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})