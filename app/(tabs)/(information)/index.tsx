import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import PageIndicator from '@/components/PageIndicator';

import krahImage from '../../../assets/images/krah_logo_about.png';

const { width, height } = Dimensions.get('window');

const index = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={krahImage} />
      <Text style={styles.text}>
        Krah Pipes GmbH & Co. KG
      </Text>
      <View style={styles.secondContainer}>
        <Text style={styles.text1}>
          Betzdorfer Str. 8
          57520 Schutzbach
          Germany / Deutschland
          Tel.: +49 (27 41) 97 64 - 0
          info@krah-pipes.de
          Icons from Icons8.
        </Text>
      </View>

      <PageIndicator pageName={'About'} />

    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondContainer: {
    paddingHorizontal: width * 0.30
  },
  image: {
    marginBottom: height * 0.01,
  },
  text: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: height * 0.02
  },
  text1: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    textAlign: 'center',
  }
})