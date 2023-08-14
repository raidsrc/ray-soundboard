import { FlatList, StyleSheet } from "react-native"
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
      keyExtractor={item => item.title} numColumns={3} />
  )
}

