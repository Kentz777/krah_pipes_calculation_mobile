// StackLayout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import TabNavigation from '@/components/TabNavigation'; // Import your reusable TabNavigation component

const CalcLayout: React.FC = () => {
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
