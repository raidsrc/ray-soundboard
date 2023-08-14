import { useContext, useEffect, useState } from "react"
import { FlatList, View, Pressable, Text, StyleSheet } from "react-native"
import { useAppContext } from "./AppContext"
import { Audio } from "expo-av"


type SoundType = {
  title: string
  audioFileName: string
}

export const SoundButtonGrid = ({ sounds }: {
  sounds: SoundType[]
}) => {
  return (
    <FlatList data={sounds} style={styles.soundButtonGrid}
      renderItem={({ item }) => <SoundPressable soundMetadata={item} />}
      keyExtractor={item => item.title} numColumns={3} />
  )
}

const SoundPressable = ({ soundMetadata }: { soundMetadata: SoundType }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null)

  async function playSound() {
    console.log('Loading Sound');
    
    const path = "./assets/audio-files/angel.mp3"
    const { sound } = await Audio.Sound.createAsync(require(path));
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

  const { title, audioFileName } = soundMetadata
  return (
    <View style={styles.soundButton}>
      <Pressable onPress={playSound} accessibilityLabel={title}>
        <Text style={{ color: 'white', fontSize: 16 }}>{title}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    flex: 1
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: '500',
    marginBottom: 20
  },
  soundButton: {
    flexDirection: 'column',
    margin: 3,
    padding: 10,
    backgroundColor: '#8c47cc',
    flex: 1,
    height: 100
  },
  soundButtonGrid: {
    width: '100%',
  }
});
