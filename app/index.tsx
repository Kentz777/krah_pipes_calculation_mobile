import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'expo-router';
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native';
import cpImage from '../assets/images/screen.png';
import Button from '@/components/Button';

const { width, height } = Dimensions.get('window');

const TabNavigation: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname(); // Get the current route path
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (pathname === '/') {
      setActiveTab('PAGE 1');
    } else if (pathname === '/page2') {
      setActiveTab('PAGE 2');
    }
  }, [pathname]); // Update the active tab whenever the path changes

  const handleTabPress = (tabName: string) => {
    if (tabName === 'PAGE 1') {
      router.push('/');
    } else if (tabName === 'PAGE 2') {
      router.push('/page2');
    }
  };

  return (
    <SafeAreaView style={styles.tabContainer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'PAGE 1' && styles.activeTab]}
        onPress={() => handleTabPress('PAGE 1')}
      >
        <Text style={[styles.firstTabText, activeTab === 'PAGE 1' && styles.activeTabText]}>
          PAGE 1
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'PAGE 2' && styles.activeTab]}
        onPress={() => handleTabPress('PAGE 2')}
      >
        <Text style={[styles.tabText, activeTab === 'PAGE 2' && styles.activeTabText]}>
          PAGE 2
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Index: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TabNavigation />
      <View style={styles.container}>
        <Text style={styles.text}>WELCOME</Text>
        <Image style={styles.image} source={cpImage} />
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus officia in, rerum ipsam a rem.
        </Text>
        <Button name='Continue' route='/page2' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1C76D2',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    backgroundColor: 'white',
  },
  text: {
    fontSize: width * 0.08,
    fontFamily: 'Rubik',
    marginBottom: height * 0.05,
    fontWeight: '900',
    color: 'black',
    textAlign: 'center',
  },
  image: {
    marginBottom: height * 0.02,
  },
  text2: {
    fontSize: width * 0.04,
    fontFamily: 'Rubik',
    textAlign: 'center',
    marginBottom: height * 0.05,
    color: 'black',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    paddingTop: '8%',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#F1BD15',
  },
  firstTabText: {
    color: '#F1BD15', // Static yellow color for the first tab text
    fontFamily: 'Rubik',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tabText: {
    color: 'white', // White color for the second tab text
    fontFamily: 'Rubik',
    fontSize: 16,
  },
  activeTabText: {
    fontWeight: 'bold',
    color: '#F1BD15', // Change to yellow when active
  },
});

export default Index;
