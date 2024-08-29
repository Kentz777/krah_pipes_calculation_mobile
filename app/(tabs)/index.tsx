import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import YouTubeIcon from '@/components/YouTubeIcon';
import HomeSearchIcon from '@/components/HomeSearchIcon';
import HandDownIcon from '@/components/HandDownIcon';
import PageIndicator from '@/components/PageIndicator';

const { width, height } = Dimensions.get('window');

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>
          Find what you're looking for by entering a search term above.
        </Text>
        <View style={styles.searchIconContainer}>
          <HomeSearchIcon color="white" />
        </View>
       
        <Text style={styles.subHeader}>
          Or navigating these buttons below
        </Text>
        <View style={styles.handIconContainer}>
          <HandDownIcon color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05, // 5% of the screen width
  },
  header: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: height * 0.025, // 2.5% of the screen height
  },
  searchIconContainer: {
    marginBottom: height * 0.12, // 12% of the screen height
  },
  subHeader: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: height * 0.025, // 2.5% of the screen height
  },
  handIconContainer: {
    marginBottom: height * 0.019, // 1.9% of the screen height
  },
  button: {
    backgroundColor: '#FFC107',
    paddingVertical: height * 0.02, // 2% of the screen height
    paddingHorizontal: width * 0.3, // 30% of the screen width
    alignItems: 'center',
    marginBottom: height * 0.05, // 5% of the screen height
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;
