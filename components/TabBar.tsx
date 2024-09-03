// components/TabBar.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface TabProps {
  tabs: string[];
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const TabBar: React.FC<TabProps> = ({ tabs, activeTab, onTabPress }) => {
  return (
    <SafeAreaView>
         <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            activeTab === tab && styles.activeTab
          ]}
          onPress={() => onTabPress(tab)}
        >
          <Text style={[
            styles.tabText,
            activeTab === tab && styles.activeTabText
          ]}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#240046',
    height: 50,
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  activeTab: {
    backgroundColor: '#F1BD15',
  },
  tabText: {
    color: '#240046',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#240046',
  },
});

export default TabBar;