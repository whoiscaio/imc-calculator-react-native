import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={style.header}>
      <Text style={style.text}>IMC Calculator</Text>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
    height: 150,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 22
  }
})
