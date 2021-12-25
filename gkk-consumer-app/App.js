import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Greet from 'gkk-shared-code';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>This is Consumer App.</Text>
      <Greet />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
