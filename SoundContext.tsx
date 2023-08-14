import { Audio } from 'expo-av'
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from 'react'

type AppContextType = {
  turbo: boolean 
  setTurbo: Dispatch<SetStateAction<boolean>>
  sound: Audio.Sound | null
  setSound: Dispatch<SetStateAction<Audio.Sound | null>>
  playSound: () => Promise<void>
}

const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({children} : {children: React.ReactNode}) => {
  const [turbo, setTurbo] = useState(false)
  const [sound, setSound] = useState<Audio.Sound | null>(null)

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(require('./assets/audio-files/angel.mp3'));
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

  return (
    <AppContext.Provider value = {{
      turbo,
      setTurbo,
      sound,
      setSound,
      playSound,
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === null) {
    throw new Error(
      "useAppContext must be used within an App Context Provider"
    )
  }
  return context
}