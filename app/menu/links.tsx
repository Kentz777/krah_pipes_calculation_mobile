//Links Page
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert, Linking } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import PageIndicator from '@/components/PageIndicator';
import ShopIcon from '@/components/ShopIcon';
import WebsiteIcon from '@/components/WebsiteIcon';
import InstagramIcon from '@/components/InstagramIcon';
import LinkedInIcon from '@/components/LinkedInIcon';
import YouTubeIcon from '@/components/YouTubeIcon';

const { width, height } = Dimensions.get('window');

const CalculationIcon: React.FC<{ focused: boolean; IconComponent: React.FC<{ color: string }> }> = ({ focused, IconComponent }) => {
  return (
    <IconComponent color={focused ? 'white' : 'black'} />
  );
};

const openWebsite = (url: string) => {
  Linking.openURL(url).catch((err) =>
    Alert.alert('Error', 'Failed to open link: ' + err.message)
  );
};

const Links = () => {
  return (
    <View style={styles.container}>
      <View style={styles.firstIconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => openWebsite('https://krah.shop/')}>
          <CalculationIcon IconComponent={ShopIcon} focused={false} />
          <Text style={styles.text}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondIconButton} onPress={() => openWebsite('https://www.krah.net/en/')}>
          <CalculationIcon IconComponent={WebsiteIcon} focused={false} />
          <Text style={styles.text}>Website</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.secondIconContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={() => openWebsite('https://www.instagram.com/derkrah/')}>
          <CalculationIcon IconComponent={InstagramIcon} focused={false} />
          <Text style={styles.text}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondIconButton} onPress={() => openWebsite('https://www.linkedin.com/company/krah-pipes-germany/')}>
          <CalculationIcon IconComponent={LinkedInIcon} focused={false} />
          <Text style={styles.text}>LinkedIn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.thirdIconContainer}>
        <TouchableOpacity style={styles.thirdIconButton} onPress={() => openWebsite('https://www.youtube.com/c/KrahNet')}>
          <CalculationIcon IconComponent={YouTubeIcon} focused={false} />
          <Text style={styles.text}>YouTube</Text>
        </TouchableOpacity>
        <View style={styles.thirdIconButton}></View>
      </View>

      <PageIndicator pageName="Main Menu" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingHorizontal: width * 0.10
  },
  firstIconContainer: {
    flexDirection: 'row',
    marginBottom: height * 0.04,
  },
  secondIconContainer: {
    flexDirection: 'row',
    marginBottom: height * 0.04
  },
  thirdIconContainer: {
    flexDirection: 'row',
    
  },
  iconButton: {
    alignItems: 'center',
    marginEnd: width * 0.04,
    flex: 1
  },
  secondIconButton: {
    alignItems: 'center',
    flex: 1
  },
  thirdIconButton: {
    alignItems: 'center',
    // borderWidth: 2,
    // borderColor: 'red',
    flex: 1
  },
  text: {
    fontSize: 16,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    color: 'white',
    marginTop: height * 0.02
  },
});

export default Links