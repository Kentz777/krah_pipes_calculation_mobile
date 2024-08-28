import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { Tabs } from 'expo-router';
import CalcIcon from '@/components/CalculatorIcon';
import BarcodeIcon from '@/components/BarcodeIcon';
import InfoIcon from '@/components/InfoIcon';
import LinksIcon from '@/components/LinksIcon';
import TopNav from '@/components/TopNav';

const { width, height } = Dimensions.get('window'); // Get screen width and height

const TabLabel: React.FC<{ focused: boolean; title: string }> = ({ focused, title }) => {
  return (
    <View style={styles.tabLabelContainer}>
      <Text style={[styles.tabLabel, focused && styles.tabLabelFocused]}>{title}</Text>
    </View>
  );
};

const TabIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => {
  return (
    <IconComponent color={focused ? 'white' : 'black'} />
  );
};

export default function TabLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <Tabs
        screenOptions={{
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#F1BD15',
            height: height * 0.09, // Adjust height based on screen height
            padding: 0,
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C76D2',
  },
  tabLabelContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: width * 0.03, // Responsive font size
    color: 'black',
    textTransform: 'uppercase',
    letterSpacing: -0.5,
    marginBottom: 2,
  },
  tabLabelFocused: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: width * 0.03, // Responsive font size
    marginBottom: 2,
  },
});
