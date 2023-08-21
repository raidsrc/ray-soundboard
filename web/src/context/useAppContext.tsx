import { useContext } from "react"
import { AppContext } from "./AppContext"

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === null) {
    throw new Error(
      "useAppContext must be used within an App Context Provider"
    )
  }
  return context
}