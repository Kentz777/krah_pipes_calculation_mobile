import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PageIndicator from '@/components/PageIndicator'

const page2 = () => {
  return (
    <View style={styles.container}>
      <Text>stomrwatercaclpage2</Text>
      <PageIndicator pageName='Stormwater Retention' />
    </View>
  )
}

export default page2

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})