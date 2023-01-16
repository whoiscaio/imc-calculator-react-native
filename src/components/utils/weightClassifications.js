const weightClassifications = [
  {
    iconText: '- 18.5',
    label: 'Abaixo do peso',
    backgroundColor: '#fefbae',
    textColor: '#5e5a00',
    test: (value) => value < 18.5,
    id: 1
  }, {
    iconText: '18.5 - 24.9',
    label: 'Peso normal',
    backgroundColor: '#caffa9',
    textColor: '#286800',
    test: (value) => value >= 18.5 && value < 25,
    id: 2
  }, {
    iconText: '24.9 +',
    label: 'Acima do peso',
    backgroundColor: '#ffbebe',
    textColor: '#830000',
    test: (value) => value >= 25,
    id: 3
  }
]

export default weightClassifications