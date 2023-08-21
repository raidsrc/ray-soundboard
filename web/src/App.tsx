import { SoundButtonGrid } from "./components/SoundButtonGrid";
import { AppContextProvider } from "./context/AppContext";
import { useAppContext } from "./context/useAppContext";
import "./App.css"

const App = () => {

  return (
    <AppContextProvider>
      <div className="everything">
        <Main></Main>
        {/* <Credits></Credits> */}
      </div>
    </AppContextProvider>
  );
}

const Main = () => {
  const { turbo, setTurbo } = useAppContext()

  return (
    <div className={turbo ? "turboContainer" : "container"}>
      {turbo
        ? <h1 className="turboTitle">RAY SOUNDBOARD (TURBO MODE)</h1>
        : <h1 className="title">The Ray Soundboard</h1>}

      {/* <SoundButtonGrid /> */}

    </div>
  )
}

const Credits = () => {
  return (
    <View style={styles.creditsContainer}>
      <StatusBar style="auto" />
      <MyText style={styles.smallerTitle}>The Ray Soundboard</MyText>
      <View style={styles.creditsView}>
        <MyText>- A silly ass soundboard built using React Native & Expo</MyText>
        <MyText>- Shittily programmed by yung raid tha one and only !!!</MyText>
        <MyText>- Voice lines provided by yung raid</MyText>
        <MyText>- App idea suggested by jake on the dock in tahoe</MyText>
        <MyText>- Soundboard ideas provided by jake + hyunsoo</MyText>
        <MyText onPress={() => { Linking.openURL('https://landing.raidsrc.me'); }} style={{ color: 'blue' }}>- https://landing.raidsrc.me</MyText>
      </View>
    </View>
  )
}

export default App