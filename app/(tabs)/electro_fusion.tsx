//Information Page
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import PageIndicator from '@/components/PageIndicator';
import BarcodeCalcuIcon from '@/components/BarcodeCalcuIcon';
import { Link, Stack } from 'expo-router';

const { width, height } = Dimensions.get('window');

const CalculationIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => {
  return (
    <IconComponent color={focused ? 'white' : 'black'} />
  );
};

const ElectroFusion = () => {
  return (
    <View style={styles.container}>
       <Stack
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen name="(barcode)" options={{ headerShown: false }} />
      </Stack>
      
      <View style={styles.firstIconContainer}>
      <Link href="/(barcode)" asChild>
        <TouchableOpacity style={styles.iconButton}>
          <CalculationIcon IconComponent={BarcodeCalcuIcon} focused={false} />
          <Text style={styles.text}>Barcode</Text>
        </TouchableOpacity>
        </Link>
      </View>

      <PageIndicator pageName="Main Menu" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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