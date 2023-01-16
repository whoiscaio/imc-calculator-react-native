import { StyleSheet, Text, View } from 'react-native'
import weightClassifications from './utils/weightClassifications'

export default function WeightClassification() {
  return (
    <View style={style.container}>
      {
        weightClassifications.map((weight) => (
          <View key={weight.id} style={style.weightIconContainer}>
            <View style={{ backgroundColor: weight.backgroundColor, ...style.weightIcon }}>
              <Text style={{ color: weight.textColor,...style.weightIconText }}>{weight.iconText}</Text>
            </View>
            <Text style={{ color: '#202226', fontWeight: 'bold' }}>{weight.label}</Text>
          </View>
        ))
      }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  weightIconContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  weightIcon: {
    width: 90,
    height: 90,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 45,
    marginBottom: 10
  },
  weightIconText: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})