import { AVPlaybackSource, Audio } from "expo-av";
import { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { useAppContext } from "../context/AppContext";
import { MyText } from "./MyText";

type SoundType = {
  title: string
  audioFile: AVPlaybackSource
}

export const SoundPressable = ({ soundMetadata }: { soundMetadata: SoundType }) => {
  const [inc, setInc] = useState(1)
  const [sound1, setSound1] = useState<Audio.Sound | null>()
  // const [sound1, setSound1] = useState<Audio.Sound | null>(null)
  // const [sound2, setSound2] = useState<Audio.Sound | null>(null)
  // const [sound3, setSound3] = useState<Audio.Sound | null>(null)
  // const [sound4, setSound4] = useState<Audio.Sound | null>(null)
  // const [sound5, setSound5] = useState<Audio.Sound | null>(null)
  // const [sound6, setSound6] = useState<Audio.Sound | null>(null)
  // const [sound7, setSound7] = useState<Audio.Sound | null>(null)
  // const [sound8, setSound8] = useState<Audio.Sound | null>(null)
  const [pressed, setPressed] = useState(false)
  const { turbo } = useAppContext()

  async function playSound(inc: number) {
    console.log('Loading Sound');

    const { sound } = await Audio.Sound.createAsync(soundMetadata.audioFile);
    setSound1(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound1
      ? () => {
        console.log('Unloading Sound');
        sound1.unloadAsync();
      }
      : undefined;
  }, [sound1]);

  const { title, audioFile } = soundMetadata
  return (
    <Pressable style={[styles.soundButton,
    turbo ? { backgroundColor: "#ff0000", } : null,
    pressed ? styles.pressIn : styles.pressOut]}
      onPress={() => playSound(inc)} onPressIn={() => setPressed(true)} onPressOut={() => setPressed(false)} accessibilityLabel={title}>
      {
        !turbo
          ? <MyText style={[{ color: 'white', fontSize: 15, },]}>{title}</MyText>
          : <MyText style={[{ color: 'black', fontSize: 15, textAlign: 'right' },]} bold>{title}</MyText>
      }
    </Pressable>
  )
}

const styles = StyleSheet.create({
  soundButton: {
    flexDirection: 'column',
    margin: 5,
    marginBottom: 9,
    padding: 10,
    backgroundColor: '#8c47cc',
    flex: 1,
    height: 100,
    borderRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pressIn: {
    opacity: 0.5
  },
  pressOut: {
    opacity: 1
  }
});