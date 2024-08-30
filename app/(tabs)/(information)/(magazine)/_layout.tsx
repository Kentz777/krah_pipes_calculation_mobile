// _layout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import TabNavigation from '@/components/TabNavigation';
import { usePathname } from 'expo-router';

const Layout: React.FC = () => {
 

  return (
    <>
      {/* Render the TabNavigation component only if we are on the home route or page2 */}
      {/* Stack Navigator */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Layout;
