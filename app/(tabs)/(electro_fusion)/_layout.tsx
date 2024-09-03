// StackLayout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import TabNavigation from '@/components/TabNavigation'; // Import your reusable TabNavigation component
import { useFonts } from 'expo-font';

const ElectroFusionLayout: React.FC = () => {
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
        <Stack.Screen name="(barcode)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default ElectroFusionLayout;
