// app/calculation/_layout.tsx
import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { Stack } from 'expo-router';
import TopNav from '@/components/TopNav';
import BottomNav from '@/components/BottomNav';

export default function CalculationLayout() {
  return (
   <View>
<Text>layout</Text>
   </View>
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
