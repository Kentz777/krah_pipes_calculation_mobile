import React from 'react';
import { Text, StyleSheet, Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get('window');


const PageIndicator: React.FC = ({ pageName }) => {

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
    right: 0,
  },
  indicatorContainer: {
    backgroundColor: '#F1BD15',
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderTopLeftRadius: 25,
  },
  pageIndicator: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '600'
  },
});

export default PageIndicator;
