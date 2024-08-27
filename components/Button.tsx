import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useRouter } from 'expo-router'; // Import the router hook

const { width, height } = Dimensions.get('window');

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
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.12,
    borderRadius: 30,
  },
  text: {
    fontSize: 24,
    fontFamily: 'Rubik',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Button;
