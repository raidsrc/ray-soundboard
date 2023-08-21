import { Button, FlatList, View } from "react-native"
import { SoundPressable } from "./SoundPressable";
import { useAppContext } from "../context/AppContext";

export const SoundButtonGrid = () => {
  const sounds = [
    {
      title: "Bruh",
      audioFile: require("../assets/audio-files/bruh.wav")
    },
    {
      title: "Ain't no way",
      audioFile: require("../assets/audio-files/aint.wav")
    },
    {
      title: "AAAAAAAAAAAAAAAAAAAAAAAA",
      audioFile: require("../assets/audio-files/aaa.wav")
    },
    {
      title: "You gotta be fucking kidding me",
      audioFile: require("../assets/audio-files/kid.wav")
    },
    {
      title: "YOOOOOOOOOOOOOOOO",
      audioFile: require("../assets/audio-files/yo.wav")
    },
    {
      title: "Don't worry about it",
      audioFile: require("../assets/audio-files/worry.wav")
    },
    {
      title: "Man...",
      audioFile: require("../assets/audio-files/man.wav")
    },
    {
      title: "I doubt it",
      audioFile: require("../assets/audio-files/doubt.wav")
    },
    {
      title: "Huh",
      audioFile: require("../assets/audio-files/huh.wav")
    },
    {
      title: "Damn",
      audioFile: require("../assets/audio-files/damn.wav")
    },
    {
      title: "Peace",
      audioFile: require("../assets/audio-files/peace.wav")
    },
  ]
  const turboSounds = [
    {
      title: "Bruh",
      audioFile: require("../assets/audio-files/bruh-turbo.wav")
    },
    {
      title: "Ain't no way",
      audioFile: require("../assets/audio-files/aint-turbo.wav")
    },
    {
      title: "AAAAAAAAAAAAAAAAAAAAAAAA",
      audioFile: require("../assets/audio-files/aaa-turbo.wav")
    },
    {
      title: "You gotta be fucking kidding me",
      audioFile: require("../assets/audio-files/kid-turbo.wav")
    },
    {
      title: "YOOOOOOOOOOOOOOOO",
      audioFile: require("../assets/audio-files/yo-turbo.wav")
    },
    {
      title: "Don't worry about it",
      audioFile: require("../assets/audio-files/worry-turbo.wav")
    },
    {
      title: "Man...",
      audioFile: require("../assets/audio-files/man-turbo.wav")
    },
    {
      title: "I doubt it",
      audioFile: require("../assets/audio-files/doubt-turbo.wav")
    },
    {
      title: "Huh",
      audioFile: require("../assets/audio-files/huh-turbo.wav")
    },
    {
      title: "Damn",
      audioFile: require("../assets/audio-files/damn-turbo.wav")
    },
    {
      title: "Peace",
      audioFile: require("../assets/audio-files/peace-turbo.wav")
    },
  ]

  const { turbo } = useAppContext()

  return (
    <FlatList data={turbo ? turboSounds : sounds} style={{ width: '100%', }}
      renderItem={({ item }) => <SoundPressable soundMetadata={item} />}
      keyExtractor={item => item.title} numColumns={3} ListFooterComponent={<OtherButtons />} />
  )
}

const OtherButtons = () => {
  const { turbo, setTurbo, navigation } = useAppContext()

  return (
    <View style={{ flex: 2, paddingBottom: 20 }}>
      <View style={{ margin: 3 }}>
        <Button title='toggle turbo mode' color={'#ee2244'} onPress={() => {
          setTurbo(!turbo)
        }} />
      </View>
      <View style={{ margin: 3 }}>
        <Button title='About this app...' onPress={() => {
          navigation.navigate("Credits")
        }} />
      </View>
    </View>
  )
}