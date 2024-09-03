import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageIndicator from '@/components/PageIndicator'

const page3 = () => {
  return (
    <View style={styles.container}>
      <Text>hydrocalcpage3</Text>
      <PageIndicator pageName='Hydraulic Calculation'/>
    </View>
  )
}

export default page3

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})