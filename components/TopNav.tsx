import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import KrahIcon from './KrahIcon';
import { SafeAreaView } from 'react-native-safe-area-context';

const TopNav: React.FC = () => {
  return (
    <SafeAreaView>
        <View style={styles.container}>
      <View style={styles.logoContainer}>
      <KrahIcon />
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          placeholderTextColor="#888"
        />
        <View style={styles.searchIcon}>
          <Ionicons name="search" size={24} color="white" />
        </View>
      </View>
    </View>
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1BD15',
    padding: 10,
    height: 60,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    flex: 1,
    marginLeft: 40,
  },
  searchInput: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  searchIcon: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 8,
    marginLeft: -40,
  },
});

export default TopNav;