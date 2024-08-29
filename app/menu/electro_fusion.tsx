//Information Page
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import PageIndicator from '@/components/PageIndicator';
import BarcodeCalcuIcon from '@/components/BarcodeCalcuIcon';
import { useFonts } from 'expo-font';


const { width, height } = Dimensions.get('window');

const CalculationIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => {
  return (
    <IconComponent color={focused ? 'white' : 'black'} />
  );
};

const ElectroFusion = () => {
  const [fontsLoaded] = useFonts({
    "Rubik": require("../assets/fonts/Rubik.ttf"),
  })

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstIconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <CalculationIcon IconComponent={BarcodeCalcuIcon} focused={false} />
          <Text style={styles.text}>Barcode</Text>
        </TouchableOpacity>
      </View>
      
      <PageIndicator pageName="Main Menu" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1E1E1E',
    paddingHorizontal: width * 0.10
  },
  firstIconContainer: {
    flexDirection: 'row',
    marginBottom: height * 0.08,
    paddingTop: height * 0.02,
    paddingStart: width * 0.08,
    height: '50%',
  },
  iconButton: {
    marginEnd: width * 0.04,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: 'white',
    marginTop: height * 0.02,
  },
});

export default ElectroFusion