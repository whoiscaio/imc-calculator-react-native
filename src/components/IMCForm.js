import { useState } from 'react'
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function IMCForm() {
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()
  const [result, setResult] = useState()

  function calculate() {
    if (!weight || !height) return

    Keyboard.dismiss()

    const heightInMeters = height / 100
    const imcValue = weight / Math.pow(heightInMeters, 2)

    setResult(imcValue.toFixed(2))
  }

  return (
    <View style={style.container}>
      <View style={style.inputArea}>
        <Text style={style.label}>Informe o peso (KG)</Text>
        <TextInput
          keyboardType='numeric'
          value={weight}
          onChangeText={(newText) => setWeight(newText)}
          style={style.input}
        />
      </View>

      <View style={style.inputArea}>
        <Text style={style.label}>Informe a altura (CM)</Text>
        <TextInput
          keyboardType='numeric'
          value={height}
          onChangeText={(newText) => setHeight(newText)}
          style={style.input}
        />
      </View>

      <View style={style.buttonArea}>
        <Pressable disabled={!(height && weight)} onPress={calculate} style={style.button}>
          <Text style={{ color: '#fff' }}>Calcular IMC</Text>
        </Pressable>
      </View>

      {
        result && (
          <View style={style.resultContainer}>
            <Text style={style.resultText}>SEU IMC é: {result}</Text>
          </View>
        )
      }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15
  },
  inputArea: {
    marginBottom: 20
  },
  label: {
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8
  },
  buttonArea: {
    width: '100%',
    display: 'flex',
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#222026',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5
  },
  resultContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#cc0000'
  }
})