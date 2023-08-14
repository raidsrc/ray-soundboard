import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AppContextProvider } from './AppContext';
import { SoundButtonGrid } from './SoundButtonGrid';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Credits" component={Credits} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Main = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <AppContextProvider>
        <StatusBar style="auto" />
        <Text style={styles.title}>Ray Soundboard</Text>
        <SoundButtonGrid />
        <View style={{flex: 1}}>
          <Button title='About this app...' onPress={() => {
            navigation.navigate('Credits')
          }} />
        </View>
      </AppContextProvider>
    </View>
  )
}

const Credits = () => {
  return (
    <View style={styles.creditsContainer}>
      <AppContextProvider>
        <StatusBar style="auto" />
        <Text style={styles.smallerTitle}>Ray Soundboard</Text>
        <View style={styles.creditsView}>
          <Text>- A silly ass soundboard built using React Native & Expo</Text>
          <Text>- Shittily programmed by yung raid tha one and only !!!</Text>
          <Text>- App idea suggested by jake on the dock in tahoe</Text>
          <Text onPress={() => { Linking.openURL('https://landing.raidsrc.me'); }} style={{ color: 'blue' }}>- https://landing.raidsrc.me</Text>
        </View>
      </AppContextProvider>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 40,
  },
  creditsContainer: {
    backgroundColor: '#fff',
    flex: 1
  },
  smallerTitle: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20,
    marginTop: 10,
  },
  creditsView: {
    marginHorizontal: 50,
  }
});
