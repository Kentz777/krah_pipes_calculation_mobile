import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface DropdownInputProps {
  placeholder?: string;
  onValueChange: (value: string) => void;
}

const DropdownInput: React.FC<DropdownInputProps> = ({ placeholder = 'Select...', onValueChange }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const [mode, setMode] = useState<'water' | 'free'>('water');
  const options = ['Water', 'Free Entry'];

  const handleSelect = (item: string) => {
    if (item === 'Free Entry') {
      setMode('free');
      setValue('');
      onValueChange('');
    } else {
      setMode('water');
      setValue(item);
      onValueChange(item);
    }
    setModalVisible(false);
  };

  const handleFreeEntryChange = (text: string) => {
    setValue(text);
    onValueChange(text);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.inputContainer} 
        onPress={() => {
          if (mode === 'water') {
            setModalVisible(true);
          }
        }}
      >
        {mode === 'free' ? (
          <TextInput
            style={styles.freeEntryInput}
            value={value}
            onChangeText={handleFreeEntryChange}
            placeholder="Enter value..."
            onFocus={() => setModalVisible(false)} // Prevent the modal from reopening on focus
            onBlur={() => {}} // Do nothing on blur to keep the value
          />
        ) : (
          <Text style={value ? styles.inputText : styles.placeholder}>
            {value || placeholder}
          </Text>
        )}
        <Ionicons name="chevron-down" size={24} color="#000" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  style={styles.option} 
                  onPress={() => handleSelect(item)}
                >
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
            />
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 2,
    borderBottomColor: '#F1BD15', // Yellow underline
  },
  inputText: {
    color: '#000',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    color: '#999',
    flex: 1,
    textAlign: 'center',
  },
  freeEntryInput: {
    flex: 1,
    color: '#000',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DropdownInput;
