import { useState } from 'react'
import { Keyboard, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import weightClassifications from './utils/weightClassifications'

export default function IMCForm() {
  const [weight, setWeight] = useState()
  const [height, setHeight] = useState()

  const [result, setResult] = useState()
  const [resultTextColor, setResultTextColor] = useState()

  function calculate() {
    if (!weight || !height) return

    Keyboard.dismiss()

    const heightInMeters = height / 100
    const imcValue = weight / Math.pow(heightInMeters, 2)
    const resultTextColor = weightClassifications.find(weight => weight.test(imcValue))?.textColor

    setResult(imcValue.toFixed(2))
    setResultTextColor(resultTextColor)
  }

  return (
    <View>
      <View style={style.inputArea}>
        <Text style={style.label}>Informe o peso (KG)</Text>
        <TextInput
          inputMode='numeric'
          keyboardType='numeric'
          value={weight}
          onChangeText={(newText) => setWeight(newText)}
          style={style.input}
        />
      </View>

      <View style={style.inputArea}>
        <Text style={style.label}>Informe a altura (CM)</Text>
        <TextInput
          inputMode='numeric'
          keyboardType='numeric'
          value={height}
          onChangeText={(newText) => setHeight(newText)}
          style={style.input}
        />
      </View>

      <View style={style.buttonArea}>
        <Pressable disabled={!(height && weight)} onPress={calculate} style={style.button}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold' }}>Calcular IMC</Text>
        </Pressable>
      </View>

      <View style={style.resultContainer}>
        {
          result && (
            <Text style={{ color: resultTextColor || '#f90', ...style.resultText }}>SEU IMC é: {result}</Text>
          )
        }
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  inputArea: {
    marginBottom: 30
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    fontSize: 16,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
  buttonArea: {
    width: '100%',
    display: 'flex',
    marginTop: 20,
    marginBottom: 40,
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#222026',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5
  },
  resultContainer: {
    display: 'flex',
    alignItems: 'center',
    height: 30,
    marginBottom: 20
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})