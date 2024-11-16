import { StatusBar } from 'expo-status-bar'
import { Text, View, StyleSheet } from 'react-native'
import { Box } from './components/box'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
      <Box />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbfafa',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})