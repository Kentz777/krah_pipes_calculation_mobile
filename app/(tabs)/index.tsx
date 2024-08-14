import { StyleSheet, View, Text, Dimensions } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Krah Pipeline</Text>
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
