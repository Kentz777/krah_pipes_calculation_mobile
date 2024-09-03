// StackLayout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import TabNavigation from '@/components/TabNavigation'; // Import your reusable TabNavigation component
import { useFonts } from 'expo-font';

const CalcLayout: React.FC = () => {
  const [loaded] = useFonts({
    Rubik: require('../../../assets/fonts/Rubik.ttf'),
    Montserrat: require('../../../assets/fonts/Montserrat-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      {/* Render the TabNavigation component on specific routes */}
      {/* Stack Navigator */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="pressure_pipes" options={{ headerShown: false }} />
        <Stack.Screen name="(hydraulic_calculation)" options={{ headerShown: false }} />
        <Stack.Screen name="(stormwater_retention)" options={{ headerShown: false }} />
        <Stack.Screen name="(pressure_pipes)" options={{ headerShown: false }} />
        <Stack.Screen name="(quick_structural_calculation)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default CalcLayout;
