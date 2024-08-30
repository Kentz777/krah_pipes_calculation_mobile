import React from 'react';
import { Text, StyleSheet, Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window');


const NavPageIndicator: React.FC = ({ pageName }) => {

  return (
    <View style={styles.positionContainer}>
      <View style={styles.indicatorContainer}>
        <Text style={styles.pageIndicator}>
          {pageName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  positionContainer: {
    position: 'absolute',
    width: '50%',
    bottom: 0,  // Positioning from the bottom
    left: 0,
  },
  indicatorContainer: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 4,
    borderTopRightRadius: 25,
  },
  pageIndicator: {
    fontFamily: 'Rubik',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '700',
    color: '#F1BD15',
  },
});

export default NavPageIndicator;
