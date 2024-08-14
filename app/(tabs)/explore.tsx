import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, View, Text } from 'react-native';
export default function TabTwoScreen() {
  return (
     <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '8%',
  },
  text: {
    fontSize: 20, 
  },
});

