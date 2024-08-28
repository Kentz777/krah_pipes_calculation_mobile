//Information Page
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import PageIndicator from '@/components/PageIndicator';
import CalculatorIcon from '@/components/CalculatorIcon';
import StormwaterIcon from '@/components/StormwaterIcon';
import PressureIcon from '@/components/PressureIcon';
import StructuralIcon from '@/components/StructuralIcon';
import HydraulicIcon from '@/components/HydraulicIcon';



const CalculationIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => {
  return (
    <IconComponent color={focused ? 'white' : 'black'} />
  );
};

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignItems: 'center', marginEnd: 5, flex: 1 }}>
          <CalculationIcon IconComponent={HydraulicIcon} focused={false} />
          <Text>Hydraulic Calculation</Text>
        </View>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <CalculationIcon IconComponent={StormwaterIcon} focused={false} />
          <Text>Stormwater Retention</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ alignItems: 'center', marginEnd: 5, flex: 1 }}>
          <CalculationIcon IconComponent={PressureIcon} focused={false} />
          <Text>Pressure Pipes</Text>
        </View>
        <View style={{ alignItems: 'center', flex: 1 }}>
          <CalculationIcon IconComponent={StructuralIcon} focused={false} />
          <Text>Quick Structural Calculation</Text>
        </View>
      </View>

      <PageIndicator pageName="Main Menu" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
  },
  text: {
    fontSize: 20,
  },
});

export default Index