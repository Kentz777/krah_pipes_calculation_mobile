import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Import the router hook

interface ButtonProps {
  name: string;
  route: string; // Route name to navigate to
}

const Button: React.FC<ButtonProps> = ({ name, route }) => {
  const router = useRouter();

  // Function to handle button press
  const handlePress = () => {
    router.push(route); // Navigate to the specified route
  };

  return (
    <TouchableOpacity style={styles.continueButton} onPress={handlePress}>
      <Text style={styles.text}>
        {name}
      </Text>
    </TouchableOpacity>
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
