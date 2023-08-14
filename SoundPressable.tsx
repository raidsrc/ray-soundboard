import { AVPlaybackSource, Audio } from "expo-av";
import { useState, useEffect } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type SoundType = {
  title: string
  audioFile: AVPlaybackSource
}

export const SoundPressable = ({ soundMetadata }: { soundMetadata: SoundType }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null)

  async function playSound() {
    console.log('Loading Sound');

    const { sound } = await Audio.Sound.createAsync(soundMetadata.audioFile);
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const { title, audioFile } = soundMetadata
  return (
    <Pressable style={styles.soundButton} onPress={playSound} accessibilityLabel={title}>
      <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  soundButton: {
    flexDirection: 'column',
    margin: 3,
    padding: 10,
    backgroundColor: '#8c47cc',
    flex: 1,
    height: 100
  },
});