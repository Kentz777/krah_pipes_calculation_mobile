// components/TabNavigation.tsx

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

interface TabNavigationProps {
  tabs: { name: string; route: string }[]; // Array of tabs with their names and routes
}

const TabNavigation: React.FC<TabNavigationProps> = ({ tabs }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    const currentTab = tabs.find(tab => pathname === tab.route);
    if (currentTab) {
      setActiveTab(currentTab.name);
    }
  }, [pathname, tabs]);

  const handleTabPress = (tabName: string, route: string) => {
    router.push(route);
  };

  return (
    <SafeAreaView style={styles.tabContainer}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab.name}
          style={[styles.tab, activeTab === tab.name && styles.activeTab]}
          onPress={() => handleTabPress(tab.name, tab.route)}
        >
          <Text style={[styles.tabText, activeTab === tab.name && styles.activeTabText]}>
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#F1BD15',
  },
  tabText: {
    color: 'white',
    fontFamily: 'Rubik',
    fontSize: 14,
    textAlign: 'center',
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#F1BD15',
  },
});

export default TabNavigation;
