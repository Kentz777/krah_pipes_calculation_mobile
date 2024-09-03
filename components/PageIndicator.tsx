import React from 'react';
import { Text, StyleSheet, Dimensions, View } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

const { width, height } = Dimensions.get('window');


const PageIndicator: React.FC = ({ pageName }) => {
  const pathname = usePathname();

  return (
    <View style={[styles.positionContainer, pathname !== '/calculations' && pathname !== '/electro_fusion' && pathname !== '/information' && pathname !== '/links' ? { left: 0 } : { right: 0 }]}>
      <View style={pathname !== '/calculations' && pathname !== '/electro_fusion' && pathname !== '/information' && pathname !== '/links' ?
        styles.layoutIndicatorContainer
        :
        styles.menuIndicatorContainer
      }>
        <Text style={pathname !== '/calculations' && pathname !== '/electro_fusion' && pathname !== '/information' && pathname !== '/links' ?
          styles.layoutPageIndicator
          :
          styles.menuPageIndicator
        }>
          {pageName}
        </Text>
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  positionContainer: {
    position: 'absolute',
    width: '50%',
    bottom: 0,  // Positioning from the bottom
  },
  menuIndicatorContainer: {
    backgroundColor: '#F1BD15',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderTopLeftRadius: 25,
  },
  layoutIndicatorContainer: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 4,
    borderTopRightRadius: 25,
  },
  menuPageIndicator: {
    fontFamily: 'Rubik',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600'
  },
  layoutPageIndicator: {
    fontFamily: 'Rubik',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '700',
    color: '#F1BD15',
  },
});

export default PageIndicator;
