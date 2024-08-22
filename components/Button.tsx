import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Button: React.FC = ({name}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.text}>
          {name}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  continueButton: {
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;