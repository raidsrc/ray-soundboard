import { StyleProp, Text, TextStyle, } from "react-native"

export const MyText = ({ style, children, bold, onPress }: {
  children: React.ReactNode, 
  style: StyleProp<TextStyle>
  onPress?: () => {}
  bold?: boolean
}) => {

  if (!bold) {
    bold = false
  }

  return (
    <Text onPress={onPress} style={[style, bold ? { fontFamily: 'Inter-Black' } : { fontFamily: 'Inter-Regular' }]}>
      {children}
    </Text>
  )
}