import { StyleSheet, Text, View } from 'react-native'

export default function WeightClassification() {
  const weightClassifications = [
    {
      iconText: '< 18.5',
      label: 'Abaixo do peso',
      id: 1
    }, {
      iconText: '18.5 - 24.9',
      label: 'Peso normal',
      id: 2
    }, {
      iconText: '> 24.9',
      label: 'Acima do peso',
      id: 3
    }
  ]

  return (
    <View style={style.container}>
      {
        weightClassifications.map((weight) => (
          <View key={weight.id} style={style.weightIconContainer}>
            <View style={style.weightIcon}>
              <Text style={style.weightIconText}>{weight.iconText}</Text>
            </View>
            <Text style={{ fontWeight: 'bold' }}>{weight.label}</Text>
          </View>
        ))
      }
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  weightIconContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  weightIcon: {
    width: 80,
    height: 80,
    backgroundColor: '#f00',
    marginTop: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 40
  },
  weightIconText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})