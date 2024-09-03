import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  initialValue?: number; // Handle undefined case
  onValueChange?: (value: number) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step = 1,
  initialValue = min,
  onValueChange,
}) => {
  const [value, setValue] = useState(initialValue);
  const [inputValue, setInputValue] = useState(initialValue.toString());
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    validateAndSetValue(initialValue);
  }, [initialValue]); // Update when initialValue changes

  const validateAndSetValue = (newValue: number) => {
    if (newValue < min) {
      setValue(min);
      setInputValue(min.toString());
      setError(`Value must be at least ${min}`);
    } else if (newValue > max) {
      setValue(max);
      setInputValue(max.toString());
      setError(`Value must not exceed ${max}`);
    } else {
      setValue(newValue);
      setInputValue(newValue.toString());
      setError(null);
    }

    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const handleSliderChange = (newValue: number) => {
    validateAndSetValue(newValue);
  };

  const handleInputChange = (text: string) => {
    setInputValue(text);
    const newValue = parseFloat(text);
    if (!isNaN(newValue)) {
      validateAndSetValue(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={min}
            maximumValue={max}
            step={step}
            value={value}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#F1BD15"
            maximumTrackTintColor="grey"
            thumbTintColor='black'
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={handleInputChange}
            keyboardType="numeric"
          />
        </View>
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sliderContainer: {
    flex: 3,
    marginRight: 10,
  },
  slider: {
    width: '100%',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightgrey',
    borderRadius: 5,
    padding: 1,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});

export default RangeSlider;
