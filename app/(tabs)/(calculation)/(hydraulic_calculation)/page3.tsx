import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import PageIndicator from '@/components/PageIndicator'
import NumericInput from "@/components/forms/NumericInput";
import RangeSlider from "@/components/forms/RangeSlider";

const { width, height } = Dimensions.get('window');

const page3 = () => {
  const [flowRate, setFlowRate] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <View style={styles.outputMarginContainer}>
          <Text style={styles.textHeader}>Slope:</Text>
        </View>
        <Text style={styles.outputText}>{'1[m/1000m]'}</Text>
      </View>
      <View style={styles.formMainContainer}>
        <ScrollView>
          <View style={styles.formContainer}>
            <View style={styles.marginContainer}>
              <Text style={styles.formText}>Flow rate:[I/s]</Text>
              <View style={styles.cardContainer}>
                <NumericInput
                  value={flowRate}
                  onChange={setFlowRate}
                  placeholder="Enter Flow rate value..."
                />
              </View>
            </View>
            <View style={styles.marginContainer}>
              <Text style={styles.formText}>Internal Diameter:</Text>
              <View style={styles.cardContainer}>
                <RangeSlider min={0} max={2000} />
              </View>
            </View>
            <View style={styles.marginContainer}>
              <Text style={styles.formText}>Filling Height:</Text>
              <View style={styles.cardContainer}>
                <RangeSlider min={0} max={100} />
              </View>
              <Text style={styles.infoText}>Value must be between 0 to 100%</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <PageIndicator pageName='Hydraulic Calculation' />
    </View >
  )
}

export default page3

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outputContainer: {
    backgroundColor: '#1E1E1E',
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.02,
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.02,
    borderRadius: 30
  },
  outputMarginContainer: {
    marginBottom: height * 0.02,
  },
  textHeader: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  outputText: {
    color: '#F1BD15',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: height * 0.04,
  },
  formMainContainer: {
    backgroundColor: "#D9D9D9",
  },
  formContainer: {
    marginHorizontal: width * 0.06,
    marginVertical: height * 0.025
  },
  marginContainer: {
    marginBottom: height * 0.04,
  },
  formText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    // marginTop: 5,
    // marginBottom: 5,
    marginVertical: height * 0.005
  },
  infoText: {
    fontSize: 8,
    fontWeight: '600',
    color: 'red',
  }
})