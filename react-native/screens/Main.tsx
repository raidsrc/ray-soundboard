import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { MyText } from "../components/MyText";
import { SoundButtonGrid } from "../components/SoundButtonGrid";
import { useAppContext } from "../context/AppContext";
import * as SplashScreen from 'expo-splash-screen';
import { RootStackParamList } from "../context/AppContext";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const Main = ({ navigation, route } : {
  navigation: NativeStackNavigationProp<RootStackParamList>
  route: string
}) => {
  const { turbo, setTurbo } = useAppContext()

  const [fontsLoaded] = useFonts({
    'Inter-Black': require('../assets/fonts/Inter-Black.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
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
    <View style={[styles.container, turbo ? styles.turboContainer : null]} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      {turbo
        ? <MyText style={[styles.title, styles.turboTitle]} bold>RAY SOUNDBOARD (TURBO MODE)</MyText>
        : <MyText style={[styles.title,]}>The Ray Soundboard</MyText>}

      <SoundButtonGrid navigation={navigation} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
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
});

export default Main