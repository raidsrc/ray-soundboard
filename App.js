import { StyleSheet, } from 'react-native';
import { AppContextProvider } from './context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as SplashScreen from 'expo-splash-screen';
import Main from './screens/Main';
import Credits from './screens/Credits';

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
