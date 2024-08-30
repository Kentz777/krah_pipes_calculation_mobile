// _layout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import { usePathname } from 'expo-router';

const Layout: React.FC = () => {
 

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
