import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import { Link, Stack, usePathname } from 'expo-router';
import CalcIcon from '@/components/CalculatorIcon';
import BarcodeIcon from '@/components/BarcodeIcon';
import InfoIcon from '@/components/InfoIcon';
import LinksIcon from '@/components/LinksIcon';
import TopNav from '@/components/TopNav';

const { width, height } = Dimensions.get('window');

type IconProps = {
  color: string;
};

type NavButtonProps = {
  title: string;
  IconComponent: React.FC<IconProps>;
  route: string;
};

const NavButton: React.FC<NavButtonProps> = ({ title, IconComponent, route }) => {
  const pathname = usePathname();
  const isActive = pathname === route;

  return (
    <Link href={route} asChild>
      <TouchableOpacity style={styles.navButton}>
        <IconComponent color={isActive ? 'white' : 'black'} />
        <Text style={[styles.navLabel, isActive && styles.activeNavLabel]}>
          {title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default function Layout() {
  return (
    <SafeAreaView style={styles.container}>
      <TopNav />
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="calculations" options={{ headerShown: false }} />
        <Stack.Screen name="links" options={{ headerShown: false }} />
        <Stack.Screen name="information" options={{ headerShown: false }} />
        <Stack.Screen name="electro_fusion" options={{ headerShown: false }} />
        <Stack.Screen name="(calc)" options={{ headerShown: false }} />
      </Stack>
      <View style={styles.bottomNav}>
        <NavButton title="Calculation" IconComponent={CalcIcon} route="/calculations" />
        <NavButton title="Electro-Fusion" IconComponent={BarcodeIcon} route="/electro_fusion" />
        <NavButton title="Information" IconComponent={InfoIcon} route="/information" />
        <NavButton title="Links" IconComponent={LinksIcon} route="/links" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C76D2',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#F1BD15',
    height: height * 0.1,
    paddingVertical: 10,
  },
  navButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navLabel: {
    fontSize: width * 0.028,
    color: 'black',
    marginTop: 5,
    textAlign: 'center',
  },
  activeNavLabel: {
    color: 'white',
    fontWeight: 'bold',
  },
});
