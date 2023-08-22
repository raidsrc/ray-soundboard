import { StatusBar } from "expo-status-bar";
import { View, Linking, StyleSheet } from "react-native";
import { MyText } from "../components/MyText";


const Credits = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MyText style={styles.smallerTitle}>The Ray Soundboard</MyText>
      <View style={styles.creditsView}>
        <MyText>- A silly ass soundboard built using React Native & Expo</MyText>
        <MyText>- Shittily programmed by yung raid tha one and only !!!</MyText>
        <MyText>- Voice lines provided by yung raid</MyText>
        <MyText>- App idea suggested by jake on the dock in tahoe</MyText>
        <MyText>- Soundboard ideas provided by jake + hyunsoo</MyText>
        <MyText onPress={() =>  Linking.openURL('https://landing.raidsrc.me') } style={{ color: 'blue' }}>- https://landing.raidsrc.me</MyText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonView: {
    margin: 3,
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


export default Credits