import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppContextProvider } from './AppContext';
import { SoundButtonGrid } from './SoundButtonGrid';


export default function App() {

  const sounds = [
    {
      title: "Bruh",
      audioFileName: "angel.mp3"
    },
    {
      title: "Ain't no way",
      audioFileName: "snap-fire.mp3"
    },
    {
      title: "AAAAAAAAAAAAAAAAAAAAAAAA",
      audioFileName: "angel.mp3"
    },
    {
      title: "You gotta be fucking kidding me",
      audioFileName: "snap-fire.mp3"
    },
    {
      title: "YOOOOOOOOOOOOOOOO",
      audioFileName: "angel.mp3"
    },
    {
      title: "Don't worry about it",
      audioFileName: "snap-fire.mp3"
    },
    {
      title: "Peace",
      audioFileName: "angel.mp3"
    },
  ]

  return (
    <View style={styles.container}>
      <AppContextProvider>
        <StatusBar style="auto" />
        <Text style={styles.title}>Ray Soundboard</Text>
        <SoundButtonGrid sounds={sounds} />
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
