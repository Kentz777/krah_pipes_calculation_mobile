// StackLayout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import TabNavigation from '@/components/TabNavigation'; // Import your reusable TabNavigation component

const ElectroFusionLayout: React.FC = () => {
  return (
    <>
      {/* Render the TabNavigation component on specific routes */}
      {/* Stack Navigator */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(barcode)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default ElectroFusionLayout;
