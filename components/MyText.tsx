import { StyleProp, Text, TextStyle, } from "react-native"

export const MyText = ({ style, children, bold }: {
  children: React.ReactNode, 
  style: StyleProp<TextStyle>
  bold?: boolean
}) => {

  if (!bold) {
    bold = false
  }

  return (
    <Text style={[style, bold ? { fontFamily: 'Inter-Black' } : { fontFamily: 'Inter-Regular' }]}>
      {children}
    </Text>
  )
}