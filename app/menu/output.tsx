import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalculatorOutput = () => {
  const value = "1234"; // Static value for demonstration

  return (
    <View style={styles.container}>
      <Text style={styles.output}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  output: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'right',
    color: '#333',
  },
});

export default CalculatorOutput;
