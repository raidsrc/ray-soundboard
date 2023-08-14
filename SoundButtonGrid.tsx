import { FlatList, StyleSheet } from "react-native"
import { SoundPressable } from "./SoundPressable";

export const SoundButtonGrid = () => {
  const sounds = [
    {
      title: "Bruh",
      audioFile: require("./assets/audio-files/angel.mp3")
    },
    {
      title: "Ain't no way",
      audioFile: require("./assets/audio-files/sound0.wav")
    },
    {
      title: "AAAAAAAAAAAAAAAAAAAAAAAA",
      audioFile: require("./assets/audio-files/angel.mp3")
    },
    {
      title: "You gotta be fucking kidding me",
      audioFile: require("./assets/audio-files/sound0.wav")
    },
    {
      title: "YOOOOOOOOOOOOOOOO",
      audioFile: require("./assets/audio-files/angel.mp3")
    },
    {
      title: "Don't worry about it",
      audioFile: require("./assets/audio-files/sound0.wav")
    },
    {
      title: "Man...",
      audioFile: require("./assets/audio-files/angel.mp3")
    },
    {
      title: "Damn",
      audioFile: require("./assets/audio-files/angel.mp3")
    },
    {
      title: "Peace",
      audioFile: require("./assets/audio-files/angel.mp3")
    },
  ]
  return (
    <FlatList data={sounds} style={styles.soundButtonGrid}
      renderItem={({ item }) => <SoundPressable soundMetadata={item} />}
      keyExtractor={item => item.title} numColumns={3} />
  )
}

const styles = StyleSheet.create({
  soundButtonGrid: {
    width: '100%',
  }
});
