import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  value?: number;
  onValueChange: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step,
  value = 0,
  onValueChange,
}) => {
  const [inputValue, setInputValue] = useState<number>(value);
  const [inputError, setInputError] = useState('');

  const handleSliderChange = (newValue: number) => {
    setInputValue(newValue);
    onValueChange(newValue);
  };

  const handleInputChange = (text: string) => {
    const newValue = parseFloat(text);
    if (!isNaN(newValue) && newValue >= min && newValue <= max) {
      setInputValue(newValue);
      setInputError('');
      onValueChange(newValue);
    } else {
      setInputError(`Value must be between ${min} and ${max}`);
    }
  };

  const handleReset = () => {
    setInputValue(0);
    onValueChange(0);
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        step={step}
        value={inputValue}
        onValueChange={handleSliderChange}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, inputError ? styles.inputError : null]}
          value={inputValue.toString()}
          onChangeText={handleInputChange}
          keyboardType="numeric"
        />
        {inputError ? <Text style={styles.errorMessage}>{inputError}</Text> : null}
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset to 0</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  slider: {
    width: '100%',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    textAlign: 'center',
    fontSize: 16,
  },
  inputError: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
  resetButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default RangeSlider;