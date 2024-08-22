import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalcIcon from '@/components/CalculatorIcon'; // Import the Calculator Icon component
import BarcodeIcon from '@/components/BarcodeIcon'; // Import the Barcode Icon component
import InfoIcon from '@/components/InfoIcon'; // Import the Info Icon component
import LinksIcon from '@/components/LinksIcon'; // Import the Links Icon component

// Define a custom tab label component
const TabLabel: React.FC<{ focused: boolean; title: string }> = ({ focused, title }) => {
  return (
    <View style={styles.tabLabelContainer}>
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>{title}</Text>
    </View>
  );
};

// Define a custom tab icon component
const TabIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => {
  return (
    <IconComponent color={focused ? 'white' : 'black'} />
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#F1BD15',
          height: '9%',
          padding: 0
        },
        tabBarLabel: ({ focused, children }) => (
          <TabLabel focused={focused} title={children as string} />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Calculation',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} IconComponent={CalcIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="electro_fusion"
        options={{
          title: 'Electro-Fusion',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} IconComponent={BarcodeIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="information"
        options={{
          title: 'Information',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} IconComponent={InfoIcon} />
          ),
        }}
      />
      <Tabs.Screen
        name="links"
        options={{
          title: 'Links',
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} IconComponent={LinksIcon} />
          ),
        }}
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  tabLabelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 10,
    color: 'black', 
    fontFamily: 'Rubik',
    textTransform: 'uppercase',
    letterSpacing: -1, 
    marginBottom: 5,
  },
  tabLabelFocused: {
    color: 'white', 
    fontWeight: 'bold', 
    fontFamily: 'Rubik',
    textTransform: 'uppercase', 
    fontSize: 10,
    marginBottom: 5,
  },
});
