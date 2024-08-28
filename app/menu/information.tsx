//Information Page
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react'
import PageIndicator from '@/components/PageIndicator';
import MagazineIcon from '@/components/MagazineIcon';
import AboutIcon from '@/components/AboutIcon';

const { width, height } = Dimensions.get('window');

const CalculationIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => {
  return (
    <IconComponent color={focused ? 'white' : 'black'} />
  );
};

const Information = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstIconContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <CalculationIcon IconComponent={MagazineIcon} focused={false} />
          <Text style={styles.text}>Magazine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondIconButton}>
          <CalculationIcon IconComponent={AboutIcon} focused={false} />
          <Text style={styles.text}>About</Text>
        </TouchableOpacity>
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
    paddingHorizontal: width * 0.10
  },
  firstIconContainer: {
    flexDirection: 'row',
    marginBottom: height * 0.08,
    paddingTop: height * 0.02,
    height: '50%',
  },
  secondIconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    alignItems: 'center',
    marginEnd: width * 0.04,
    flex: 1
  },
  secondIconButton: {
    alignItems: 'center',
    flex: 1
  },
  text: {
    fontSize: 16,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Information