import React from 'react';
import { Stack } from 'expo-router';
import TabNavigation from '@/components/TabNavigation';
import { usePathname } from 'expo-router';
import { View, StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

const Layout: React.FC = () => {
  const pathname = usePathname(); // Get the current route path
  const [loaded] = useFonts({
    Rubik: require('../../../../assets/fonts/Rubik.ttf'),
    Montserrat: require('../../../../assets/fonts/Montserrat-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }

  // Define tabs and their routes
  const tabs = [
    { name: 'CALCULATION', route: '/' },
    { name: 'FIND THE RIGHT DN/ID', route: '/page2' },
    { name: 'FIND THE RIGHT SLOPE', route: '/page3' },
  ];

  return (
    <>
      {/* Render the TabNavigation component only if we are on the home route or page2 */}
      {(pathname === '/' || pathname === '/page2' || pathname === '/page3') && <TabNavigation tabs={tabs} />}

      {/* Stack Navigator with container style applied */}
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="page2" options={{ headerShown: false }} />
        <Stack.Screen name="page3" options={{ headerShown: false }} />
      </Stack>
    </>
  );
};



export default Layout;
