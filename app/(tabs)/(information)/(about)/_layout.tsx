// _layout.tsx

import React from 'react';
import { Stack } from 'expo-router';
import TabNavigation from '@/components/TabNavigation';
import { usePathname } from 'expo-router';

const Layout: React.FC = () => {
  const pathname = usePathname(); // Get the current route path

  // Define tabs and their routes
  const tabs = [
    { name: 'ABOUT', route: '/' },
    { name: 'CONDITIONS', route: '/page2' },
  ];

  return (
    <>
      {/* Render the TabNavigation component only if we are on the home route or page2 */}
      {(pathname === '/' || pathname === '/page2') && <TabNavigation tabs={tabs} />}
      {/* Stack Navigator */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="page2" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default Layout;
