import { NavigationProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

type AppContextType = {
  turbo: boolean 
  setTurbo: Dispatch<SetStateAction<boolean>>
  navigation: NativeStackNavigationProp<RootStackParamList>
}

export type RootStackParamList = {
  Main: undefined 
  Credits: undefined 
}

const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({children} : {children: React.ReactNode}) => {
  const [turbo, setTurbo] = useState(false)
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <AppContext.Provider value = {{
      turbo,
      setTurbo,
      navigation
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