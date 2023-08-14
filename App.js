import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, useAnimatedValue, } from 'react-native';
import { useCallback } from 'react';
import { AppContextProvider, useAppContext } from './context/AppContext';
import { SoundButtonGrid } from './components/SoundButtonGrid';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { MyText } from './components/MyText';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <AppContextProvider>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
          <Stack.Screen name="Credits" component={Credits} />
        </Stack.Navigator>
      </AppContextProvider>
    </NavigationContainer>
  );
}

const Main = ({ navigation, route }) => {
  const { turbo, setTurbo } = useAppContext()

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter-Black.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View style={[styles.container, turbo ? styles.turboContainer : ""]} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      {turbo
        ? <MyText style={[styles.title, styles.turboTitle]} bold>RAY SOUNDBOARD (TURBO MODE)</MyText>
        : <MyText style={[styles.title,]}>Ray Soundboard</MyText>}
      
      <View style={{ width: "100%" }}>
        <SoundButtonGrid />
      </View>

      <View style={{ flex: 2, paddingVertical: 10, }}>
        <View style={styles.buttonView}>
          <Button title='toggle turbo mode' color={'#ee2244'} onPress={() => {
            setTurbo(!turbo)
          }} />
        </View>
        <View style={styles.buttonView}>
          <Button title='About this app...' onPress={() => {
            navigation.navigate('Credits')
          }} />
        </View>
      </View>
    </View>
  )
}

const Credits = () => {
  return (
    <View style={styles.creditsContainer}>
      <StatusBar style="auto" />
      <MyText style={styles.smallerTitle}>Ray Soundboard</MyText>
      <View style={styles.creditsView}>
        <MyText>- A silly ass soundboard built using React Native & Expo</MyText>
        <MyText>- Shittily programmed by yung raid tha one and only !!!</MyText>
        <MyText>- App idea suggested by jake on the dock in tahoe</MyText>
        <MyText>- Sound idea help provided by jake + hyunsoo</MyText>
        <MyText onPress={() => { Linking.openURL('https://landing.raidsrc.me'); }} style={{ color: 'blue' }}>- https://landing.raidsrc.me</MyText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  turboContainer: {
    backgroundColor: '#000'
  },
  buttonView: {
    margin: 3,
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 40,
  },
  turboTitle: {
    color: '#fff',
  },
  creditsContainer: {
    backgroundColor: '#fff',
    flex: 1,
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
