import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface KrahIconProps {
  width?: number;
  height?: number;
}

const KrahIcon: React.FC<KrahIconProps> = ({ width = 65, height = 65 }) => {
  return (
    <Image
      source={require('../assets/images/krah_logo_TM.png')} // Update the path to your PNG file
      style={[styles.icon, { width, height }]}  // Apply dynamic size
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    resizeMode: 'contain', // Ensure the image scales properly
  },
});

export default KrahIcon;
