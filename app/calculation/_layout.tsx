// app/calculation/_layout.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

export default function CalculationLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />

      <View style={styles.contentContainer}>
   
          {/* Add other screens as needed */}
      </View>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
});
