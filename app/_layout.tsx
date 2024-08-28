import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    const loadApp = async () => {
      await SplashScreen.hideAsync();
    };

    loadApp();
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="page2" options={{ headerShown: false }} />
      <Stack.Screen 
        name="menu" 
        options={{ 
          headerShown: false,
          // This ensures the menu layout is not unmounted when navigating
          presentation: 'modal',
        }} 
      />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}