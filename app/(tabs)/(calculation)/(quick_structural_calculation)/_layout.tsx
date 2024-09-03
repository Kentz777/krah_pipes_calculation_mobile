// _layout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import { usePathname } from 'expo-router';
import { useFonts } from 'expo-font';

const Layout: React.FC = () => {
  const [loaded] = useFonts({
    Rubik: require('../../../../assets/fonts/Rubik.ttf'),
    Montserrat: require('../../../../assets/fonts/Montserrat-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="page2" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Layout;
