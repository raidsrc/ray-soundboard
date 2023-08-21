import { Dispatch, SetStateAction, createContext, useState } from 'react'

type AppContextType = {
  turbo: boolean 
  setTurbo: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType | null>(null)

export const AppContextProvider = ({children} : {children: React.ReactNode}) => {
  const [turbo, setTurbo] = useState(false)

  return (
    <AppContext.Provider value = {{
      turbo,
      setTurbo,
    }}>
      {children}
    </AppContext.Provider>
  )
}