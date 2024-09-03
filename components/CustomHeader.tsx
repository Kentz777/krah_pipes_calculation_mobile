// components/CustomHeader.tsx
import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import TabBar from './TabBar';

const CustomHeader: React.FC = () => {
  const [activeTab, setActiveTab] = useState('PAGE 1');

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
    
  };

  return (
   
    <SafeAreaView style={styles.container}>
        <TabBar
          tabs={['PAGE 1', 'PAGE 2']}
          activeTab={activeTab}
          onTabPress={handleTabPress}
        />
    </SafeAreaView>
     
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default CustomHeader;