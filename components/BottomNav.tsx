import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalcIcon from '@/components/CalculatorIcon';
import BarcodeIcon from '@/components/BarcodeIcon';
import InfoIcon from '@/components/InfoIcon';
import LinksIcon from '@/components/LinksIcon';
import CalculationScreen from '../app/menu/index';
import ElectroFusionScreen from '../app/menu/electro_fusion';
import InformationScreen from '../app/menu/information';
import LinksScreen from '../app/menu/links';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';

const Tab = createBottomTabNavigator();

const TabLabel: React.FC<{ focused: boolean; title: string }> = ({ focused, title }) => (
  <Text style={{ color: focused ? 'white' : 'black', fontSize: 12, fontWeight: focused ? 'bold' : 'normal' }}>
    {title}
  </Text>
);

const TabIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => (
  <IconComponent color={focused ? 'white' : 'black'} />
);

const BottomNav = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarInactiveTintColor: 'black',
      tabBarActiveTintColor: 'white',
      tabBarStyle: {
        backgroundColor: '#F1BD15',
        height: 60,
        paddingBottom: 5,
      },
      headerShown: false,
    }}
  >
    <Tab.Screen
      name="Calculation"
      component={CalculationScreen}
      options={{
        tabBarLabel: ({ focused }) => <TabLabel focused={focused} title="Calculation" />,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} IconComponent={CalcIcon} />,
      }}
    />
    <Tab.Screen
      name="ElectroFusion"
      component={ElectroFusionScreen}
      options={{
        tabBarLabel: ({ focused }) => <TabLabel focused={focused} title="Electro-Fusion" />,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} IconComponent={BarcodeIcon} />,
      }}
    />
    <Tab.Screen
      name="Information"
      component={InformationScreen}
      options={{
        tabBarLabel: ({ focused }) => <TabLabel focused={focused} title="Information" />,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} IconComponent={InfoIcon} />,
      }}
    />
    <Tab.Screen
      name="Links"
      component={LinksScreen}
      options={{
        tabBarLabel: ({ focused }) => <TabLabel focused={focused} title="Links" />,
        tabBarIcon: ({ focused }) => <TabIcon focused={focused} IconComponent={LinksIcon} />,
      }}
    />
  </Tab.Navigator>
);

export default BottomNav;
