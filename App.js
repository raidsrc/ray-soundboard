import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppContextProvider } from './AppContext';
import { SoundButtonGrid } from './SoundButtonGrid';


export default function App() {

  return (
    <View style={styles.container}>
      <AppContextProvider>
        <StatusBar style="auto" />
        <Text style={styles.title}>Ray Soundboard</Text>
        <SoundButtonGrid />
      </AppContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    flex: 1
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20
  },
});
