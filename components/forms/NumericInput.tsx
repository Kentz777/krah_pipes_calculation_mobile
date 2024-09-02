import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface NumericInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const NumericInput: React.FC<NumericInputProps> = ({ value, onChange, placeholder }) => {
  const handleChange = (text: string) => {
    // Only allow numeric values
    const numericValue = text.replace(/[^0-9]/g, '');
    onChange(numericValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={handleChange}
          placeholder={placeholder}
          keyboardType="numeric"
        />
        <View style={styles.underline} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 5,
  },
  inputWrapper: {
    alignItems: 'center', // Center items horizontally
  },
  input: {
    fontSize: 14,
    color: '#000',
    padding: 1,
    textAlign: 'center', // Center the text
    width: '100%', // Make the input take the full width of the parent
  },
  underline: {
    height: 2,
    backgroundColor: '#F1BD15', // Yellow underline
    width: '60%', // Adjust as needed
    marginTop: 2, // Space between input and underline
    alignSelf: 'center', // Center the underline relative to the parent
  },
});

export default NumericInput;
